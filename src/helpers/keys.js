function press_left()
{
	card.fade('left');
	villager.eat();
	should_die();
}

function press_right()
{
	card.fade('right');
	villager.rob();
	should_die();
}

function press_up()
{
	card.fade('up');
	villager.leave();
	should_die();
}

function restart()
{
	nights = 0;
	money = 0;
	villagers = 0;
	anger_status.lvl = 0;
	hunger_status.lvl = 50;
	state = 0;
	card.fadeLeft = false;
	card.fadeRight = false;
	card.fadeUp = false;
	for (let item of inventory)
		item.count = 0;
}
