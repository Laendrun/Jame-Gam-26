let cards = [];
let imgs = [];
let items_imgs = [];
let anger_status;
let nights;
let money;
let villagers;
let state;

let items = [];
let inventory = [];

let mem_eras;
let dw_killer;

let notification;
let hotbar;
let hotbar_frame;
let arrow_up;
let arrow_left;
let arrow_right;

/*
States description
	0: Playing
	1: Dead
	2: In shop
	4: Settings
*/

function preload()
{
	for (let i = 0; i < 5; i++)
		imgs[i] = loadImage('assets/img/' + i + '.png');
	items_imgs[0] = loadImage('assets/img/mem_eraser.png');
	items_imgs[1] = loadImage('assets/img/dw_killer.png');
	hotbar_frame = loadImage('assets/img/inventory_frame.png');
	arrow_up = loadImage('assets/img/arrow_up.png');
	arrow_left = loadImage('assets/img/arrow_left.png');
	arrow_right = loadImage('assets/img/arrow_right.png');
}

function setup()
{
	createCanvas(720, 900);
	for (let i = 0; i < 5; i++)
		cards[i] = new Card(imgs[i], i);
	cards[int(random(0, cards.length))].visible = true;
	items.push(new Item('Memory Eraser', 100, items_imgs[0]));
	items.push(new Item('Darkweb killer', 150, items_imgs[1]));

	notification = new Notification(50, 75);
	hotbar = new Hotbar((width / 2 - width / 4), 800);
	// setup inventory
	for (let i = 0; i < items.length; i++)
		inventory.push(new Item(items[i].name, 0, items[i].img));
	anger_status = new Status('Anger');
	anger_status.lvl = 0;
	nights = 0;
	money = 0;
	villagers = 0;
	state = 0;
	mem_eras = 0;
	dw_killer = 0;
}

function draw()
{
	background(0);
	notification.show();
	hotbar.update(inventory);
	hotbar.show();
	if (state == 0)
	{
		stroke(0);
		textSize(10);
		fill(255);
		textAlign(CENTER);
		text("Nights: " + nights, 50, 840);
		text("Money: " + money, 50, 860);
		text("Villagers killed: " + villagers, 50, 880);
		arrows();
		for (let i = cards.length - 1; i >= 0; i--)
			cards[i].show();
		anger_status.show(width / 2 - anger_status.width / 2, 10);
	}
	else if (state == 2)
		show_shop();
	else if (state == 1)
		show_death_screen();
}

function keyPressed()
{
	if ((keyCode == 65 || keyCode == 37) && state == 0)
		press_left();
	else if ((keyCode == 87 || keyCode == 38) && state == 0)
		press_up();
	else if ((keyCode == 68 || keyCode == 39) && state == 0)
		press_right();
	else if ((keyCode == 83 || keyCode == 40) && state != 1)
		state == 2 ? state = 0 : state = 2;
	else if (keyCode == 82 && state == 1)
		restart();
	else if ((keyCode >= 49 || keyCode <= 57) && state == 2) // 1 - 9
		buy_item(keyCode - 48);
	else if ((keyCode >= 49 || keyCode <= 57) && state == 0)
		use_item(keyCode - 48);
	else
		console.log(keyCode);
}
