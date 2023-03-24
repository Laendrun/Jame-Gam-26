let cards = [];
let imgs = [];
let anger_status;

function preload()
{
	for (let i = 0; i < 5; i++)
		imgs[i] = loadImage('assets/img/' + i + '.png');
}

function setup()
{
	createCanvas(720, 720);
	for (let i = 0; i < 5; i++)
		cards[i] = new Card(imgs[i], i);
	cards[int((random(0, cards.length)))].visible = true;
	anger_status = new Status('Anger');
	anger_status.lvl = 0;
	frameRate(20);
}

function draw()
{
	background(0);
	for (let card of cards)
		card.show();
	anger_status.show(width / 2, 10);
}

function keyPressed()
{
	if (keyCode == 65 || keyCode == 37)
	{
		switch_cards();
		anger_status.lvl += 5;
		if (anger_status.lvl > 100)
			anger_status.lvl = 100;
		console.log("Killing villager");
		should_die();
	}
	else if (keyCode == 87 || keyCode == 38)
	{
		switch_cards();
		anger_status.lvl -= 3;
		if (anger_status.lvl < 0)
			anger_status.lvl = 0;
		console.log("Leave villager alone");
		should_die();
	}
	else if (keyCode == 68 || keyCode == 39)
	{
		switch_cards();
		anger_status.lvl += 3
		if (anger_status.lvl > 100)
			anger_status.lvl = 100;
		console.log("Rob villager's money");
		should_die();
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