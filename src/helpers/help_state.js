function show_help()
{
	textAlign(CENTER);
	textSize(25);
	stroke(0);
	fill(255);
	text("Help", width / 2, 25);
	textSize(15);
	textAlign(LEFT);
	text("Controls:", 50, 50);
	textSize(13);
	text("Leave villager:", 50, 75);
	text("W / ARROW_UP / Click up arrow / Swipe Up ", 300, 75);
	text("Kill villager:", 50, 100);
	text("A / ARROW_LEFT / Click left arrow / Swipe left", 300, 100);
	text("Rob villager:", 50, 125);
	text("D / ARROW_RIGHT / Click right arrow / Swipe right", 300, 125);
	text("Access shop:", 50, 150);
	text("S / ARROW_DOWN / Click shop icon / Swipe down", 300, 150);
	text("Access help:", 50, 175);
	text("H / Click help icon", 300, 175);
	text("Buy item in shop:", 50, 200);
	text("1 - 9 / Click on item", 300, 200);
	text("Use item in game:", 50, 225);
	text("1 - 9 / Click on item", 300, 225);
	text("Restart game (when lost):", 50, 250);
	text("R / Click anywhere", 300, 250);
	text("Mute / Unmute music", 50,275);
	text("M", 300, 275);
}