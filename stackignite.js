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

function render(canvas, data) {
    var canvasWidth = canvas.offsetWidth;
    var canvasHeight = canvas.offsetHeight;
    const height = 20;
    const ctx = canvas.getContext("2d");
    const size = canvasWidth;
    const text = "InplaceQuickSort.sort(int[] = [10, 14, 7, 11, 8, 5, 15, 12, 1, 9, 3, 4, 2, 13, 6], int = 0, int = 14) => void";
    drawBar(ctx, 0, canvasHeight - height, size, height, canvasWidth, "red", text);
    drawBar(ctx, 0, canvasHeight - (height * 2), (canvasWidth/2), height, canvasWidth, "green", text);
    drawBar(ctx, (canvasWidth/2), canvasHeight - (height * 2), (canvasWidth/2), height, canvasWidth, "blue", text);
}

(() => {
    const canvas = document.getElementById("flamegraph");
    render(canvas, data);
})();

function resizeCanvas() {
    console.log("resize");
    const canvas = document.getElementById("flamegraph");
    render(canvas, data);
}