function setup() 
{
	createCanvas(800, 800);
	background(255, 50, 200);
}

function draw()
{
	background(0);
	fill(255);
	ellipse(mouseX, mouseY, 100, 100);

   drawDonut1(31, 127, 176, 100, 100);
   drawDonut1(16, 161, 130, 300, 100);
   drawDonut1(154, 185, 92, 255, 400,200);
   drawDonut1(243, 154, 16, 74, 500,300);

}

function drawDonut1(r, g, b, x, y)
{
 //doughnut #1
    fill(r, g, b);
    ellipse(x, y, 200, 200);
    fill(0);
    ellipse(x, y, 120, 120);
}