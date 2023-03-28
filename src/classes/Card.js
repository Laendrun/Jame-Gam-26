class Card
{
	constructor(villager)
	{
		this.pos = createVector();
		this.defaultPos = createVector();
		this.villager = villager;
		this.pos.x = ((width / 2) - (villager.img.width / 2));
		this.pos.y = ((height / 2) - (villager.img.height / 8));
		this.defaultPos.x = this.pos.x;
		this.defaultPos.y = this.pos.y;
		this.fadeLeft = false;
		this.fadeRight = false;
		this.fadeUp = false;
		this.threshold = 10;
		this.offset = 0;
		this.fadeMult = 2;
	}

	show()
	{
		if (!this.fadeLeft && !this.fadeRight && !this.fadeUp)
		{
			image(card_frame, this.pos.x - 10, this.pos.y - 10);
			image(this.villager.img, this.pos.x, this.pos.y);
		}
		else if (this.fadeLeft)
		{
			this.offset++;
			if (this.offset > 10)
			{
				this.offset = 0;
				this.pos.x = this.defaultPos.x;
				this.pos.y = this.defaultPos.y;
				this.fadeLeft = false;
				this.visible = false;
				this.showNext()
			}
			else
				this.pos.x -= this.offset * this.fadeMult;
			image(card_frame, this.pos.x - 10, this.pos.y - 10);
			image(this.villager.img, this.pos.x, this.pos.y);
		}
		else if (this.fadeRight)
		{
			this.offset++;
			if (this.offset > 10)
			{
				this.offset = 0;
				this.pos.x = this.defaultPos.x;
				this.pos.y = this.defaultPos.y;
				this.fadeRight = false;
				this.visible = false;
				this.showNext()
			}
			else
				this.pos.x += this.offset * this.fadeMult;
			image(card_frame, this.pos.x - 10, this.pos.y - 10);
			image(this.villager.img, this.pos.x, this.pos.y);
		}
		else if (this.fadeUp)
		{
			this.offset++;
			if (this.offset > 10)
			{
				this.offset = 0;
				this.pos.x = this.defaultPos.x;
				this.pos.y = this.defaultPos.y;
				this.fadeUp = false;
				this.visible = false;
				this.showNext()
			}
			else
				this.pos.y -= this.offset * this.fadeMult;
			image(card_frame, this.pos.x - 10, this.pos.y - 10);
			image(this.villager.img, this.pos.x, this.pos.y);
		}
		textAlign(CENTER);
		textSize(20);
		fill(255);
		text(this.villager.name, width / 2, 750);
	}

	fade(dir)
	{
		switch(dir)
		{
			case 'left':
				this.fadeLeft = true;
				break ;
			case 'right':
				this.fadeRight = true;
				break ;
			case 'up':
				this.fadeUp = true;
				break ;
			default:
				console.error('Unknow direction');
				break ;
		}
	}

	showNext()
	{
		new_villager = true;
	}
}