class Shop
{
	constructor()
	{
		this.xOff = 50;
		this.yOff = 150;
		this.size = 75;
	}

	show()
	{
		textAlign(CENTER);
		textSize(25);
		stroke(0);
		fill(255);
		text("Shop", width / 2, 25);
		textSize(15);
		text("Press number key corresponding to the item you wanna buy.", width / 2, 50);
		for (let i = 0; i < items.length; i++)
			items[i].show(this.xOff + this.size * i, this.yOff, this.size, i + 1);
	}

	touchItem(x, y)
	{
		for (let i = 0; i < items.length; i++)
		{
			if ((x >= (this.xOff + i * this.size) && x <= (this.xOff + i * this.size) + this.size) &&
				(y >= this.yOff && y <= this.yOff + this.size))
				inventory[i].buy();
		}
	}
}