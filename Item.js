class Item
{
	constructor(name, price, img, count)
	{
		this.name = name;
		this.price = price;
		this.img = img;
		!count ? this.count = 0 : this.count = count;
	}

	show(x, y, size, id)
	{
		// stroke(0);
		// fill(127, 127, 127);
		// rect(x, y, size, size);
		image(shop_frame, x, y);
		image(this.img, x + this.img.width - size / 2, y + this.img.height - size / 2);
		fill(255);
		textSize(8);
		textAlign(CENTER);
		text(this.name + " " + this.price, x + (size / 2), y + size + (size / 4));
		textSize(16);
		text(id, x + size - size / 4, y + size / 4);
	}

	add(num)
	{
		this.count += num;
	}

	remove(num)
	{
		this.count -= num;
		this.count < 0 ? this.count = 0: this.count = this.count;
	}
}

/*
Items description

Memory Eraser (100) : Sets the anger level to 0
Darkweb killer (150) : Kills 3 villagers without upping the anger level
*/