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

	use()
	{
		if (this.count > 0)
		{
			if (this.name == 'Memory Eraser')
				anger_status.lvl = 0;
			else if (this.name == 'Darkweb killer')
				villagers += 3;
			this.remove(1);
			notification.text = "You used " + this.name;
			notification.visible = true;
		}
		else
		{
			notification.text = "Not enough " + this.name;
			notification.visible = true;
		}
	}

	buy()
	{
		if (money >= this.price)
		{
			this.add(1);
			money -= this.price;
			notification.text = "You bought 1 " + this.name;
			notification.visible = true;
		}
	}
}

/*
Items description

Memory Eraser (100) : Sets the anger level to 0
Darkweb killer (150) : Kills 3 villagers without upping the anger level
*/