class Villager
{
	constructor()
	{
		this.masculine = int(random(0, 100) < 50) ? true : false;
		this.rich = int(random(0, 100) < 15) ? true : false;
		this.name = this.setName();
		this.img = this.setImage();
	}

	setName()
	{
		let name = null;
		if (this.masculine)
		{
			if (this.rich)
				name = wealthy_mnames[int(random(0, wealthy_mnames.length))];
			if (name)
				name += ' ' + masculine_names[int(random(0, masculine_names.length))];
			else
				name = masculine_names[int(random(0, masculine_names.length))];
		}
		else
		{
			if (this.rich)
				name = wealthy_fnames[int(random(0, wealthy_fnames.length))];
			if (name)
				name += ' ' + feminine_names[int(random(0, feminine_names.length))];
			else
				name = feminine_names[int(random(0, feminine_names.length))];
		}
		return (name);
	}

	setImage()
	{
		let img = null;
		img = imgs[int(random(0, imgs.length))];
		return (img);
	}

	eat()
	{
		anger_status.lvl += 5;
		if (anger_status.lvl > 100)
			anger_status.lvl = 100;
		hunger_status.lvl += 9;
		if (hunger_status.lvl > 100)
			hunger_status.lvl = 100;
		villagers++;
		money += int(random(1, 5));
	}

	rob()
	{
		anger_status.lvl += 4;
		if (anger_status.lvl > 100)
			anger_status.lvl = 100;
		hunger_status.lvl -= 4;
		if (hunger_status.lvl < 0)
			hunger_status.lvl = 0;
		if (this.rich)
		{
			if (random(0, 100) < 5)
			{
				let id = int(random(0, inventory.length));
				inventory[id].add(1);
				notification.text = "You found 1 " + inventory[id].name;
				notification.visible = true;
			}
			else
				money += int(random(10, 30));
		}
		else
			money += int(random(1, 10));
	}

	leave()
	{
		anger_status.lvl -= 3;
		if (anger_status.lvl < 0)
			anger_status.lvl = 0;
		hunger_status.lvl -= 4;
		if (hunger_status.lvl <= 0)
			state = 1;
	}

	show()
	{
		image(this.img, 0, 0);
	}
}