class Hotbar
{
	constructor(x, y)
	{
		this.pos = createVector();
		this.pos.x = x;
		this.pos.y = y;
		this.height = 50;
		this.width = 50;
		this.items = [];
	}

	show()
	{
		if (state == 0)
		{
			for (let i = 0; i < this.items.length; i++)
			{
				image(hotbar_frame, this.pos.x + i * this.width, this.pos.y, this.width, this.height);
				image(this.items[i].img, this.pos.x + i * this.width, this.pos.y, this.width, this.height);
				textSize(15);
				textAlign(CENTER);
				strokeWeight(2);
				stroke(0);
				fill(255);
				text(this.items[i].count, (this.pos.x + this.width * 7/8) + i * this.width, this.pos.y + this.height * 1/4);
			}
		}
	}

	update(items)
	{
		this.items = [];
		for (let item of items)
			this.items.push(new Item(item.name, item.price, item.img, item.count));
	}
}