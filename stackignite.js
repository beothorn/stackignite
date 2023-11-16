const canvas = document.getElementById("flamegraph");
const ctx = canvas.getContext("2d");
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;


function drawBar(ctx, x, y, width, color, text) {
    const height = 20;
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
    ctx.clearRect(x + width, y, canvasWidth - x, height);
}

function render() {
    const canvas = document.getElementById("flamegraph");
    const ctx = canvas.getContext("2d");
    canvasWidth = canvas.width;
    canvasHeight = canvas.height;
    const size = canvasWidth / 3;
    const text = "InplaceQuickSort.sort(int[] = [10, 14, 7, 11, 8, 5, 15, 12, 1, 9, 3, 4, 2, 13, 6], int = 0, int = 14) => void";
    drawBar(ctx, 20, 20, size, "red", text);
    drawBar(ctx, 20 + size, 20, size, "rgba(255, 100, 100, 1)", text);
    
}

render();

function resizeCanvas() {
    console.log("resize");
    // set canvas width to window width
    const canvas = document.getElementById("flamegraph");
    canvasWidth = window.innerWidth;
    canvasHeight = window.innerHeight;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    render();
}