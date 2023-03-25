function arrows()
{
	arrow_left();
	arrow_right()
	arrow_up()
}

function arrow_left()
{
	stroke(255);
	line(50, 560, 150, 560);
	line(50, 560, 100, 540);
	line(50, 560, 100, 580);
	textSize(8);
	stroke(0);
	fill(255);
	textAlign(LEFT);
	text("Kill villager", 50, 600);
}

function arrow_right()
{
	stroke(255);
	line(670, 560, 570, 560);
	line(670, 560, 620, 540);
	line(670, 560, 620, 580);
	textSize(8);
	stroke(0);
	fill(255);
	textAlign(RIGHT);
	text("Rob villager", 670, 600);
}

function arrow_up()
{
	stroke(255);
	line(width / 2, 210, width / 2, 310);
	line(width / 2, 210, width / 2 - 20, 260);
	line(width / 2, 210, width / 2 + 20, 260);
	textSize(8);
	stroke(0);
	fill(255);
	textAlign(CENTER);
	text("Leave villager", width / 2, 330);
}
