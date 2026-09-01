const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext();

ctx.fillStyle = "rgb(200, 0, 0)";
ctx.fillRect(10, 10, 50, 50);

ctx.fillStyle = "rgb(0 0 200 / 50%)";
ctx.fillRect(30, 30, 50, 50);