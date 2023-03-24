let img;

let cards = [];

function preload()
{
	img = loadImage('assets/img/card_1.png');
}

function setup()
{
	createCanvas(720, 720);
	cards[0] = new Card(img);
}

function draw()
{
	background(0);
	cards[0].show();
	cards[0].setPos(mouseX, mouseY);
	//image(img, (width / 2) - (img.width / 2), (height / 2) - (img.height / 2));
}