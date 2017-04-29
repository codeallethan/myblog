// alert("It's working!")

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="salmon";
ctx.moveTo(150,0);
ctx.lineTo(300,300);
ctx.lineTo(0,300)
ctx.closePath();
ctx.stroke();
ctx.fillStyle= "green";
ctx.fill()


var c2=document.getElementById("myCanvas2");
var ctx2=c2.getContext("2d");
ctx2.beginPath();
ctx2.strokeStyle="blue";
ctx2.moveTo(150,0);
ctx2.lineTo(300,150);
ctx2.lineTo(150,300);
ctx2.lineTo(0,150)
ctx2.closePath();
ctx2.stroke();
ctx2.fillStyle= "blue"
ctx2.fill()

var c3=document.getElementById("myCanvas3");
var ctx3=c3.getContext("2d");
ctx3.beginPath()
ctx3.strokeStyle="blue";
ctx3.moveTo(0,0);
ctx3.lineTo(150,150);
ctx3.lineTo(300,0);
ctx3.lineTo(300,300);
ctx3.lineTo(150,150);
ctx3.lineTo(0,300);
ctx3.closePath();
ctx3.stroke();
ctx3.fillStyle= "blue"
ctx3.fill()


var c4=document.getElementById("myCanvas4");
var ctx4=c4.getContext("2d");
ctx4.beginPath();
ctx4.strokeStyle="blue";
ctx4.moveTo(0,0);
ctx4.lineTo(0,150);
ctx4.lineTo(150,150);
ctx4.lineTo(150,0);
ctx4.lineTo(300,0);
ctx4.lineTo(150,150);
ctx4.lineTo(300,150);
ctx4.lineTo(300,300);
ctx4.lineTo(150,150);
ctx4.lineTo(150,300);
ctx4.lineTo(0,300);
ctx4.lineTo(150,150);
ctx4.closePath();
ctx4.stroke();
ctx4.fillStyle = "blue"
ctx4.fill();

var c5=document.getElementById("myCanvas5");
var ctx5=c5.getContext("2d");
ctx5.beginPath();
ctx5.strokeStyle="brown"
ctx5.arc(150,150,150,0,6.28)

ctx5.moveTo(80,80)
ctx5.fillStyle = "red"
ctx5.fill();
ctx5.arc(80,80,40,0,6.28)
ctx.fillStyle = "blue"
ctx5.fill();

ctx5.moveTo(220,80)
ctx5.fillStyle = "red"
ctx5.fill();
ctx5.arc(220,80,40,0,6.28)
ctx.fillStyle = "blue"


ctx5.moveTo(50,200)
ctx5.lineTo(200,200)
ctx5.arc(150,200,100,0,3.14)
ctx5.moveTo(125,200)
ctx5.lineTo(175,200)
ctx5.arc(150,200,50,0,3.14)

//Arc: X-Coordinate, Y-Coordinate, Radius(Size), Start Angle, End Angle

ctx5.closePath();
ctx5.stroke();



