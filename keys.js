function press_left()
{
	switch_cards('left');
	anger_status.lvl += 5;
	if (anger_status.lvl > 100)
		anger_status.lvl = 100;
	// console.log("Killing villager");
	villagers++;
	money += int(random(1, 5));
	should_die();
}

function press_right()
{
	switch_cards('right');
	anger_status.lvl += 4;
	if (anger_status.lvl > 100)
		anger_status.lvl = 100;
	if (random(0, 100) < 10)
	{
		// random item
		let id = int(random(0, inventory.lenght));
		inventory[id].add(1);
		notification.text = "You found 1 " + inventory[id].name;
		notification.visible = true;
	}
	else
		int(random(0, 100) < 5) ? money += int(random(10, 30)) : money += int(random(1, 10));
	should_die();
}

function press_up()
{
	switch_cards('up');
	anger_status.lvl -= 3;
	if (anger_status.lvl < 0)
		anger_status.lvl = 0;
	// console.log("Leave villager alone");
	should_die();
}

function restart()
{
	nights = 0;
	money = 0;
	villagers = 0;
	anger_status.lvl = 0;
	state = 0;
	for (let card of cards)
	{
		card.fadeLeft = false;
		card.fadeRight = false;
		card.fadeUp = false;
	}
	for (let item of inventory)
	{
		item.count = 0;
	}
	cards[int(random(0, cards.length))].visible = true;
}

function switch_cards(dir)
{
	for (let i = 0; i < cards.length; i++)
	{
		if (cards[i].visible)
		{
			cards[i].fade(dir);
			cards[i].visible = false;
			return ;
		}
	}
}