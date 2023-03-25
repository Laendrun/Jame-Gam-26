function press_left()
{
	switch_cards();
	anger_status.lvl += 5;
	if (anger_status.lvl > 100)
		anger_status.lvl = 100;
	console.log("Killing villager");
	villagers++;
	should_die();
}

function press_right()
{
	switch_cards();
	anger_status.lvl += 4;
	if (anger_status.lvl > 100)
		anger_status.lvl = 100;
	console.log("Rob villager's money");
	money += int(random(1, 10));	
	should_die();
}

function press_up()
{
	switch_cards();
	anger_status.lvl -= 3;
	if (anger_status.lvl < 0)
		anger_status.lvl = 0;
	console.log("Leave villager alone");
	should_die();
}

function restart()
{
	nights = 0;
	money = 0;
	villagers = 0;
	anger_status.lvl = 0;
	state = 0;
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