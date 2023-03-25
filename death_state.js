function show_death_screen()
{
	textSize(32);
	stroke(0);
	fill('red');
	textAlign(CENTER);
	text("You have been killed by angry villagers", width / 2, (height / 2) - 80);
	text("You survived " + nights + " nights.", width / 2, (height / 2) - 40);
	text("You had " + money + " coins when you were killed.", width / 2, (height / 2) - 0);
	text("You killed " + villagers + " villagers", width / 2, (height / 2) + 40)
	text("Press R to restart and beat you record.", width / 2, (height / 2) + 80);
}

function should_die()
{
	if (random(10, 100) < anger_status.lvl)
		state = 1;
	else
		nights++;
}