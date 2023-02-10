var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var gradient = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
gradient.addColorStop(0,"red");
gradient.addColorStop(1,"white");

ctx.fillStyle = gradient;
ctx.fillRect(10, 10, 150, 80);