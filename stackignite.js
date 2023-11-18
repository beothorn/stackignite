const lineHeight = 20;

function drawBar(ctx, x, y, width, height, clearWidth, color, text) {
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = "gray";
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.font = "12px serif";
    ctx.fillText(text, x + 5, y + 14);
    ctx.clearRect(x + width, y, clearWidth - x, height);
}

function renderChildrenByCall(
    ctx, 
    canvasWidth, 
    canvasHeight, 
    startX,
    spanWidth,
    children, 
    currentLine
){
    if(!children || children.length === 0) return;

    let currentY = canvasHeight - (lineHeight * currentLine);
    const length = spanWidth / children.length;
    if (length < 1){
        drawBar(
            ctx, 
            startX, 
            currentY, 
            spanWidth, 
            lineHeight, 
            canvasWidth, 
            "green", 
            "..."
        );
    }

    let xOffset = startX;
    for (let i = 0; i < children.length; i++) {
        const child = children[i];

        const x = xOffset;
        xOffset = xOffset + length;

        drawBar(
            ctx, 
            x, 
            currentY, 
            length, 
            lineHeight, 
            canvasWidth, 
            "green", 
            child.name
        );

        renderChildrenByCall(
            ctx,  
            canvasWidth, 
            canvasHeight,
            x, 
            length,
            child.children, 
            currentLine + 1
        );
    }
}

function renderByCall(canvas, data) {
    var canvasWidth = canvas.offsetWidth;
    var canvasHeight = canvas.offsetHeight;

    const ctx = canvas.getContext("2d");
    console.log({
        canvasWidth,
        canvasHeight,
        h: ctx.height
    });
    renderChildrenByCall(
        ctx, 
        canvasWidth, 
        canvasHeight,
        0,
        canvasWidth,
        [data], 
        0
    );
}

function renderChildrenByTimestamp(
    ctx, 
    canvasWidth, 
    canvasHeight, 
    startX,
    spanWidth,
    startTimestamp, 
    executionTime,  
    children, 
    currentLine
){
    if(!children || children.length === 0) return;

    let currentY = canvasHeight - (lineHeight * currentLine);
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        const childEntryTime = child.entryTime;
        const childExitTime = child.exitTime;
        const childExecutionTime = childExitTime - childEntryTime;

        const x = startX +  (((childEntryTime - startTimestamp) / executionTime) * spanWidth);
        let childWidth = (childExecutionTime / executionTime) * spanWidth;
        if (childWidth === 0){ // Less then 1 pixel, skip
            continue;
        }
        drawBar(
            ctx, 
            x, 
            currentY, 
            childWidth, 
            lineHeight, 
            canvasWidth, 
            "green", 
            child.name
        );

        renderChildrenByTimestamp(
            ctx,  
            canvasWidth, 
            canvasHeight,
            x, 
            childWidth,
            childEntryTime, 
            childExecutionTime, 
            child.children, 
            currentLine + 1
        );
    }
}

function renderByTimestamp(canvas, data) {
    var canvasWidth = canvas.offsetWidth;
    var canvasHeight = canvas.offsetHeight;

    const ctx = canvas.getContext("2d");
    console.log({
        canvasWidth,
        canvasHeight,
        h: ctx.height
    });
    const startTimestamp = data.entryTime;
    const endTimestamp = data.exitTime;
    const executionTime = endTimestamp - startTimestamp;
    renderChildrenByTimestamp(
        ctx, 
        canvasWidth, 
        canvasHeight,
        0,
        canvasWidth,
        startTimestamp, 
        executionTime, 
        [data], 
        0
    );
}

(() => {
    const canvas = document.getElementById("flamegraph");
    renderByCall(canvas, data);
})();

function resizeCanvas() {
    const canvas = document.getElementById("flamegraph");
    renderByCall(canvas, data);
}