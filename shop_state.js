function show_shop()
{
	let xOff = 50;
	let yOff = 150;
	let size = 75;
	textAlign(CENTER);
	textSize(25);
	stroke(0);
	fill(255);
	text("Shop", width / 2, 25);
	textSize(15);
	text("Press number key corresponding to the item you wanna buy.", width / 2, 50);
	text("Press S or ARROW_DOWN to close shop.", width / 2, 70);
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
				notification.text = "You bought 1 " + items[id - 1].name;
				notification.visible = true;
				inventory[i].add(1);
				money -= items[id - 1].price;
			}
		}
	}
	else
	{
		notification.text = "Not enough money";
		notification.visible = true;
	}
}
