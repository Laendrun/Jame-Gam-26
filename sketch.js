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
let arrow_up_pos;
let arrow_left;
let arrow_left_pos;
let arrow_right;
let arrow_right_pos;
let question_mark_img;
let question_mark_pos;
let shopping_cart_img;
let shopping_cart_pos;
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
	question_mark_img = loadImage('assets/img/question_mark.png');
	shopping_cart_img = loadImage('assets/img/shopping_cart.png');
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
	for (let i = 0; i < items.length; i++)
		inventory.push(new Item(items[i].name, 0, items[i].img));
	arrow_up_pos = createVector();
	arrow_left_pos = createVector();
	arrow_right_pos = createVector();
	question_mark_pos = createVector();
	shopping_cart_pos = createVector();
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
	if (state != 1)
	{
		buttons();
		if (state != 3)
		{
			status_texts();
			help_text();
		}
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

function mouseClicked(event)
{
	let x = event.clientX;
	let y = event.clientY;
	if (state == 0)
	{
		// check for up arrow
		if ((x >= arrow_up_pos.x && x <= arrow_up_pos.x + arrow_up.width) &&
			(y >= arrow_up_pos.y && y <= arrow_up_pos.y + arrow_up.height))
			press_up();
		// check for left arrow
		if ((x >= arrow_left_pos.x && x <= arrow_left_pos.x + arrow_left.width) &&
			(y >= arrow_left_pos.y && y <= arrow_left_pos.y + arrow_left.height))
			press_left();
		// check for right arrow
		if ((x >= arrow_right_pos.x && x <= arrow_right_pos.x + arrow_right.width) &&
			(y >= arrow_right_pos.y && y <= arrow_right_pos.y + arrow_right.height))
			press_right();
	}
	if (state == 1)
		restart();
	// check for shop button clicked
	if ((x >= shopping_cart_pos.x && x <= shopping_cart_pos.x + shopping_cart_img.width) &&
		(y >= shopping_cart_pos.y && y <= shopping_cart_pos.y + shopping_cart_img.height))
		state == 2 ? state = 0 : state = 2;
	// check for help button clicked
	if ((x >= question_mark_pos.x && x <= question_mark_pos.x + question_mark_img.width) &&
		(y >= question_mark_pos.y && y <= question_mark_pos.y + question_mark_img.height))
		state == 3 ? state = 0 : state = 3;
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

function buttons()
{
	image(shopping_cart_img, width - shopping_cart_img.width * 2, 100);
	shopping_cart_pos.x = width - shopping_cart_img.width * 2;
	shopping_cart_pos.y = 100;
	image(question_mark_img, width - shopping_cart_img.width * 2, 155);
	question_mark_pos.x = width - shopping_cart_img.width * 2;
	question_mark_pos.y = 155;
}
