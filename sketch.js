let cards = [];
let imgs = [];
let mem_eraser_img;
let dw_killer_img;
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
let shop_frame;
let card_frame;
let arrow_up;
let arrow_left;
let arrow_right;
let background_img;

/*
States description
	0: Playing
	1: Dead
	2: In shop
	3: Help
*/

function preload()
{
	for (let i = 0; i < 5; i++)
		imgs[i] = loadImage('assets/img/' + i + '.png');
	mem_eraser_img = loadImage('assets/img/mem_eraser.png');
	dw_killer_img = loadImage('assets/img/dw_killer.png');
	hotbar_frame = loadImage('assets/img/inventory_frame.png');
	shop_frame = loadImage('assets/img/inventory_frame75.png');
	card_frame = loadImage('assets/img/card_frame.png');
	arrow_up = loadImage('assets/img/arrow_up.png');
	arrow_left = loadImage('assets/img/arrow_left.png');
	arrow_right = loadImage('assets/img/arrow_right.png');
	background_img = loadImage('assets/img/background.png');
}

function setup()
{
	let options = {
		preventDefault: true
	};
	let hammer = new Hammer(document.body, options);
	hammer.get('swipe').set({
		direction: Hammer.DIRECTION_ALL
	});
	hammer.on("swipe", swiped);
	createCanvas(720, 900);
	for (let i = 0; i < 5; i++)
		cards[i] = new Card(imgs[i], i);
	cards[int(random(0, cards.length))].visible = true;
	items.push(new Item('Memory Eraser', 100, mem_eraser_img));
	items.push(new Item('Darkweb killer', 150, dw_killer_img));

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
{7
	// background(0);
	image(background_img, 0, 0);
	notification.show();
	hotbar.update(inventory);
	hotbar.show();
	if (state != 1 && state != 3)
	{
		status_texts();
		help_text();
	}
	if (state == 0)
	{
		arrows();
		for (let i = cards.length - 1; i >= 0; i--)
			cards[i].show();
		anger_status.show(width / 2 - anger_status.width / 2, 25);
	}
	else if (state == 3)
		show_help();
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
	else if ((keyCode >= 49 && keyCode <= 57) && state == 2) // 1 - 9
		buy_item(keyCode - 48);
	else if ((keyCode >= 49 && keyCode <= 57) && state == 0)
		use_item(keyCode - 48);
	else if ((keyCode == 72))
		state == 3 ? state = 0 : state = 3;
	// else
	// 	console.log(keyCode);
}

function swiped(event)
{
	/* directions:
	 * 2 => swipe left
	 * 8 => swipe up
	 * 16 => swipe down
	 * 4 => swipe right
	 */
	if (event.direction == 2 && state == 0)
		press_left();
	else if (event.direction == 8 && state == 0)
		press_up();
	else if (event.direction == 4 && state == 0)
		press_right();
	else if (event.direction == 16 && state != 1)
		state == 2 ? state = 0 : state = 2;
}

function status_texts()
{
	stroke(0);
	fill(255);
	textAlign(CENTER);
	textSize(20);
	text("Nights: " + nights, width * 7 / 8, 25);
	text("Money: " + money, width * 7 / 8, 50);
	text("Villagers killed: " + villagers, width * 7 / 8, 75);
}

function help_text()
{
	stroke(0);
	fill(255);
	textAlign(CENTER);
	textSize(15);
	text("Press H to access help panel.", width / 2, height - 25);
}
