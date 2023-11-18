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

function renderByCall(canvas, data) {
    var canvasWidth = canvas.offsetWidth;
    var canvasHeight = canvas.offsetHeight;
    console.log({
        canvasWidth,
        canvasHeight
    });
    const height = 20;
    const ctx = canvas.getContext("2d");
    const size = canvasWidth;
    const text = data.name;
    drawBar(ctx, 0, canvasHeight - height, size, height, canvasWidth, "red", text);
    let children = data.children;
    let currentLine = 1;
    const startTimestamp = data.entryTime;
    const endTimestamp = data.exitTime;
    const executionTime = endTimestamp - startTimestamp;
    while (children.length > 0) {
        currentLine++;
        let currentY = canvasHeight - (height * currentLine);
        let newChildren = [];
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            const childEntryTime = child.entryTime;
            const childExitTime = child.exitTime;
            const x = ((childEntryTime - startTimestamp) / executionTime) * canvasWidth;
            let childWidth = ((childExitTime - childEntryTime) / executionTime) * canvasWidth;
            if (childWidth === 0){ // Less then 1 pixel, skip
                continue;
            }
            drawBar(ctx, x, currentY, childWidth, height, canvasWidth, "green", child.name);
            if(child.children){
                newChildren = newChildren.concat(child.children);
            }
        }
        children = newChildren;
    }
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
    renderByTimestamp(canvas, data);
})();

function resizeCanvas() {
    const canvas = document.getElementById("flamegraph");
    renderByTimestamp(canvas, data);
}