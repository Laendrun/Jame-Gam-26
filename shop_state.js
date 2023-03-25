function show_shop()
{
	let xOff = 50;
	let yOff = 75;
	let size = 75;
	textSize(25);
	stroke(0);
	fill(255);
	text("Shop", width / 2, 25);
	textSize(15);
	text("Press number key corresponding to the item you wanna buy.", width / 2, 50);
	for (let i = 0; i < items.length; i++)
		items[i].show(xOff + size * i, yOff, size, i + 1);
}

function buy_item(id)
{
	if (id < 1 || id > items.length)
		return ;
	if (money >= items[id - 1].price)
	{
		for (let i = 0; i < inventory.length; i++)
		{
			if (inventory[i].name == items[id - 1].name)
			{
				inventory[i].add(1);
				money -= items[id - 1].price;
			}
		}
	}
}

function use_item(id)
{
	if (id < 1 || id > inventory.length)
		return ;
	if (inventory[id - 1].count > 0)
	{
		let name = inventory[id - 1].name;
		if (name == 'Memory Eraser')
			anger_status.lvl = 0;
		else if (name == 'Darkweb killer')
			villagers += 3;
		inventory[id - 1].remove(1);
	}
}
