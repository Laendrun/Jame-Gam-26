class Card
{
	constructor(img, id)
	{
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
			rect(160, 160, 400, 400);
			image(this.img, 220, 220);
		}
	}
}