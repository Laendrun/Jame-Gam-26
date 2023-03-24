class Card
{
	constructor(img)
	{
		this.pos = createVector();
		this.pos.x = ((width / 2) - (img.width / 2));
		this.pos.y = ((height / 2) - (img.height / 2));
		this.visible = true;
		this.img = img;
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
			image(this.img, this.pos.x, this.pos.y);
		}
	}
}