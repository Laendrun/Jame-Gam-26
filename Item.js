class Item
{
	constructor(name, price)
	{
		this.name = name;
		this.price = price;
		this.count = 0;
	}

	show(x, y, size, id)
	{
		stroke(0);
		fill(127, 127, 127);
		rect(x, y, size, size);
		fill(255);
		textSize(8);
		textAlign(CENTER);
		text(this.name + " " + this.price, x + (size / 2), y + size + (size / 4));
		textSize(16);
		text(id, x + size / 2, y + size / 2);
	}

	add(num)
	{
		this.count += num;
	}

	remove(num)
	{
		this.count -= num;
	}
}

/*
Items description

Memory Eraser (100) : Sets the anger level to 0
Darkweb killer (150) : Kills 3 villagers without upping the anger level
*/