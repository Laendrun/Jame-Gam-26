/*
 * - [ ] controls description
 */

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
	text("W / ARROW_UP", 300, 75);
	text("Kill villager:", 50, 100);
	text("A / ARROW_LEFT", 300, 100);
	text("Rob villager:", 50, 125);
	text("D / ARROW_RIGHT", 300, 125);
	text("Access shop:", 50, 150);
	text("S / ARROW_DOWN", 300, 150);
	text("Access help:", 50, 175);
	text("H", 300, 175);
	text("Buy item in shop:", 50, 200);
	text("1 - 9", 300, 200);
	text("Use item in game:", 50, 225);
	text("1 - 9", 300, 225);
	text("Restart game (when lost):", 50, 250);
	text("R", 300, 250);
}