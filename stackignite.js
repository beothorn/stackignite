
function drawBar(ctx, x, y, width, color, text) {
    const height = 20;
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.font = "12px serif";
    ctx.fillText(text, x + 5, y + 14);
}

function render() {
    const canvas = document.getElementById("flamegraph");
    const ctx = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
    const text = "InplaceQuickSort.sort(int[] = [10, 14, 7, 11, 8, 5, 15, 12, 1, 9, 3, 4, 2, 13, 6], int = 0, int = 14) => void";
    drawBar(ctx, 20, 20, width - 40, "rgba(255, 100, 100, 1)", text);
}

render();