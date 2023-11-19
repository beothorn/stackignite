function addEntry(
    lines, 
    lineNumber, 
    x, 
    length, 
    name, 
    node,
    colorPalette
){
    const colorPaletteToUse = colorPalette || ["#FF6F3C", "#FF9A3C", "#FFC93C"]
    const line = lines[lineNumber] || [];
    const children = [];
    
    const color = colorPaletteToUse[name.charCodeAt(0) % colorPaletteToUse.length];
    const newEntry = {
        x, 
        length, 
        name,
        node,
        color,
        children
    };
    line.push(newEntry);
    lines[lineNumber] = line;
    return newEntry;
}

function drawBar(
    ctx, 
    x, 
    y, 
    width, 
    height, 
    clearWidth, 
    color, 
    text
) {
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.font = "12px serif";
    ctx.fillText(text, x + 5, y + 14);
    ctx.clearRect(x + width, y, clearWidth - x, height);
}

function resizeLines(lines, previousCanvasWidth, canvasWidth){
    for (let currentLine = 0; currentLine < lines.length; currentLine++) {
        const line = lines[currentLine];
        for (let i = 0; i < line.length; i++) {
            const entry = line[i];
            entry.x = (entry.x / previousCanvasWidth) * canvasWidth;
            entry.length = (entry.length / previousCanvasWidth) * canvasWidth;
        }
    }
}

function renderLines(
    ctx, 
    canvasWidth, 
    canvasHeight,
    linesToDraw,
    lineDrawHeight
){
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    for (let currentLine = 0; currentLine < linesToDraw.length; currentLine++) {
        const line = linesToDraw[currentLine];
        const lineY = canvasHeight - (lineDrawHeight * (currentLine + 1));
        for (let i = 0; i < line.length; i++) {
            const entry = line[i];
            drawBar(
                ctx, 
                entry.x, 
                lineY, 
                entry.length, 
                lineDrawHeight, 
                canvasWidth,
                entry.color, 
                entry.name
            );
        }
    }
}

function renderChildrenByChildrenCount(
    startX,
    spanWidth,
    children, 
    currentLine,
    lines,
    colorPalette
){
    if(!children || children.length === 0) return;

    let totalChildrenCount = 0;
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        totalChildrenCount += child.deepChildrenCount;
    }

    const unitLength = spanWidth / totalChildrenCount;

    let xOffset = startX;
    for (let i = 0; i < children.length; i++) {
        const child = children[i];

        const length = unitLength * child.deepChildrenCount;
        const x = xOffset;
        xOffset = xOffset + length;

        addEntry(
            lines,
            currentLine,
            x, 
            length, 
            child.name, 
            child,
            colorPalette
        );

        renderChildrenByChildrenCount(
            x, 
            length,
            child.children, 
            currentLine + 1,
            lines,
            colorPalette
        );
    }
}

function addChildCount(root) {
    if (!root.children) {
        root.deepChildrenCount = 1; // Needs to be at least 1 to render
        return;
    }

    let sum = 0;
    for (let i = 0; i < root.children.length; i++) {
        const child = root.children[i];
        addChildCount(child);
        sum += child.deepChildrenCount;
    }
    root.deepChildrenCount = sum;
}

function renderByChildrenCount(
    canvas, 
    data, 
    lines,
    colorPalette
) {
    addChildCount(data);
    renderChildrenByChildrenCount(
        0,
        canvas.offsetWidth,
        [data], 
        0, 
        lines,
        colorPalette
    );
}

function renderChildrenByTimestamp(
    startTimestamp,
    executionTime,
    startX,
    spanWidth,
    children, 
    currentLine,
    lines,
    colorPalette
){
    if(!children || children.length === 0) return;

    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        const childEntryTime = child.entryTime;
        const childExitTime = child.exitTime;
        const childExecutionTime = childExitTime - childEntryTime;

        const x = startX + (((childEntryTime - startTimestamp) / executionTime) * spanWidth);
        let length = (childExecutionTime / executionTime) * spanWidth;
        addEntry(
            lines,
            currentLine,
            x, 
            length, 
            child.name, 
            child,
            colorPalette
        );

        renderChildrenByTimestamp(
            childEntryTime,
            childExecutionTime,
            x, 
            length,
            child.children, 
            currentLine + 1,
            lines,
            colorPalette
        );
    }
}

function renderByTimestamp(
    canvas, 
    data,
    lines,
    colorPalette
) {
    var canvasWidth = canvas.offsetWidth;
    var canvasHeight = canvas.offsetHeight;

    const ctx = canvas.getContext("2d");
    const startTimestamp = data.entryTime;
    const endTimestamp = data.exitTime;
    const executionTime = endTimestamp - startTimestamp;
    renderChildrenByTimestamp(
        startTimestamp, 
        executionTime, 
        0,
        canvasWidth, 
        [data], 
        0,
        lines,
        colorPalette
    );
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
        y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
    };
}

function bisectSpan(line, posX){
    let start = 0;
    let end = line.length;

    while(start != end) {
        let middle = start + Math.floor((end - start) / 2);
        const candidate = line[middle];
        if (posX >= candidate.x && posX <= candidate.x + candidate.length) {
            return candidate;
        }
        if (posX < candidate.x) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }

    const candidate = line[start];
    if (candidate && posX >= candidate.x && posX <= candidate.x + candidate.length) {
        return candidate;
    }
    
    return null;
}

function loadData(config){
    const canvasHolderId = config.elementId;
    const stackData = config.data;
    const parentDiv = document.getElementById(canvasHolderId);

    // Create a canvas element
    const canvas = document.createElement('canvas');
    canvas.id = canvasHolderId+"Canvas";
    
    // Set canvas size to match the parent
    canvas.width = parentDiv.clientWidth;
    canvas.height = parentDiv.clientHeight;
    
    // Append the canvas to the parent div
    parentDiv.appendChild(canvas);

    canvas.style.width='100%';
    canvas.style.height='100%';
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;    
    const canvasWidth = canvas.offsetWidth;
    const canvasHeight = canvas.offsetHeight;

    const lineHeight = 20;
    let lines = [];
    
    const ctx = canvas.getContext("2d");

    if(!config.graphType || config.graphType === "ChildrenCallCount"){
        renderByChildrenCount(
            canvas, 
            stackData, 
            lines,
            config.colorPalette
        );
    }
    if (config.graphType === "Timestamp") {
        renderByTimestamp(
            canvas, 
            stackData, 
            lines,
            config.colorPalette
        );
    }
    renderLines(
        ctx, 
        canvasWidth, 
        canvasHeight,
        lines,
        lineHeight
    )

    let previousCanvasWidth = canvasWidth;
    window.addEventListener('resize', function() {
        // TODO: debouncer
        canvas.width = parentDiv.clientWidth;
        canvas.height = parentDiv.clientHeight;
        const newCtx = canvas.getContext("2d");
        resizeLines(lines, previousCanvasWidth, canvas.width);
        renderLines(
            newCtx, 
            canvas.offsetWidth, 
            canvas.offsetHeight,
            lines,
            lineHeight
        );
        previousCanvasWidth = canvas.width;
    });

    if (config.onClick) {
        window.addEventListener('mousedown', function printCoords(e) {
            const pos = getMousePos(canvas, e);
            var canvasHeight = canvas.offsetHeight;
            const line  = Math.floor((canvasHeight - pos.y) / lineHeight);
            if(line >= 0 && line < lines.length){
                const clickedOn = bisectSpan(lines[line], pos.x);
                if (clickedOn) {
                    config.onClick(clickedOn);
                }
            }
        }, false);    
    }
}