class Card
{
	constructor(img, text)
	{
		this.pos = createVector();
		this.pos.x = ((width / 2) - (img.width / 2));
		this.pos.y = ((height / 2) - (img.height / 2));
		this.visible = true;
		this.img = img;
		this.text = text;
	}

	setPos(x, y)
	{
		this.pos.x = x - (this.img.width / 2);
		this.pos.y = y - (this.img.height / 2);
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
			// stroke(225, 225, 225);
			// rect(220, 320, 280, 280);
			image(this.img, 220, 320);


			// textSize(10);
			// fill(255);
			// text(this.text, this.pos.x, this.pos.y);
			// image(this.img, this.pos.x, this.pos.y);
		}
	}
}