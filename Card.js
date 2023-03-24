class Card
{
	constructor(img, text, id)
	{
		text = "";
		if (text)
			this.text = text;
		this.pos = createVector();
		this.pos.x = ((width / 2) - (img.width / 2));
		this.pos.y = ((height / 2) - (img.height / 2));
		this.visible = false;
		this.img = img;
		this.id = id;
	}

	show()
	{
		if (this.visible)
		{
			fill(125, 125, 125);
			stroke(125, 125, 125);
			rect(160, 60, 400, 600);

			fill(180, 180, 180);
			stroke(180, 180, 180);
			rect(220, 80, 280, 200);

			textSize(10);
			fill(255);
			text(this.text, 220, 80, 280, 200);

			fill(225, 225, 225);
			image(this.img, 220, 320);
			// console.log(this.id);
		}
	}
}