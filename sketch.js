let cards = [];
let imgs = [];
let anger_status;
let nights;

function preload()
{
	for (let i = 0; i < 5; i++)
		imgs[i] = loadImage('assets/img/' + i + '.png');
}

function setup()
{
	createCanvas(720, 900);
	for (let i = 0; i < 5; i++)
		cards[i] = new Card(imgs[i], i);
	cards[int((random(0, cards.length)))].visible = true;
	anger_status = new Status('Anger');
	anger_status.lvl = 0;
	nights = 0;
	frameRate(20);
}

function draw()
{
	background(0);
	for (let card of cards)
		card.show();
	anger_status.show(width / 2 - anger_status.width / 2, 10);
	stroke(0);
	textSize(10);
	fill(255);
	textAlign(CENTER);
	text("Nights: " + nights, (width / 2 - width / 4), 800);
	arrow('left');
	arrow('right');
	arrow('up');
}

function keyPressed()
{
	if (keyCode == 65 || keyCode == 37) // left
	{
		switch_cards();
		anger_status.lvl += 5;
		if (anger_status.lvl > 100)
			anger_status.lvl = 100;
		console.log("Killing villager");
		if (!should_die())
			nights++;
	}
	else if (keyCode == 87 || keyCode == 38) // up
	{
		switch_cards();
		anger_status.lvl -= 3;
		if (anger_status.lvl < 0)
			anger_status.lvl = 0;
		console.log("Leave villager alone");
		if (!should_die())
			nights++;
	}
	else if (keyCode == 68 || keyCode == 39) // right
	{
		switch_cards();
		anger_status.lvl += 3
		if (anger_status.lvl > 100)
			anger_status.lvl = 100;
		console.log("Rob villager's money");
		if (!should_die())
			nights++;
	}
}

function switch_cards()
{
	for (let i = 0; i < cards.length; i++)
	{
		if (cards[i].visible)
		{
			cards[i].visible = false;
			if (i == cards.length - 1)
				cards[0].visible = true;
			else
				cards[i + 1].visible = true;
			return ;
		}
	}
}

function should_die()
{
	if (random(10, 100) < anger_status.lvl)
	{
		console.error("Should die.");
		return true;
	}
	return (false);
}

function arrow(dir)
{
	if (dir == 'left')
	{
		// draw arrow on the left of card
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
	else if (dir == 'right')
	{
		// draw arrow on the right of card
		stroke(255);
		line(670, 560, 570, 560);
		line(670, 560, 620, 540);
		line(670, 560, 620, 580);
		textSize(8);
		stroke(0);
		fill(255);
		textAlign(RIGHT);
		text("Rob villager", 670, 600)
	}
	else if (dir == 'up')
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
		// draw arrow on the top of card
	}
}