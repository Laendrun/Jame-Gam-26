class Card
{
	constructor(img, id)
	{
		this.pos = createVector();
		this.defaultPos = createVector();
		this.pos.x = ((width / 2) - (img.width / 2));
		this.pos.y = ((height / 2) - (img.height / 8));
		this.defaultPos.x = this.pos.x;
		this.defaultPos.y = this.pos.y;
		this.visible = false;
		this.img = img;
		this.id = id;
		this.fadeLeft = false;
		this.fadeRight = false;
		this.fadeUp = false;
		this.threshold = 10;
		this.offset = 0;
		this.fadeMult = 2;
	}

	show()
	{
		if (this.visible && !this.fadeLeft && !this.fadeRight && !this.fadeUp)
		{
			// fill(125, 125, 125);
			// stroke(125, 125, 125);
			// rect(160, 360, 400, 400);
			image(card_frame, this.pos.x - 10, this.pos.y - 10);
			image(this.img, this.pos.x, this.pos.y);
		}
		else if (this.fadeLeft)
		{
			this.offset++;
			fill(0);
			stroke(0);
			rect(160, 360, 400, 400);
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
			image(this.img, this.pos.x, this.pos.y);
		}
		else if (this.fadeRight)
		{
			this.offset++;
			fill(0);
			stroke(0);
			rect(160, 360, 400, 400);
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
			image(this.img, this.pos.x, this.pos.y);
		}
		else if (this.fadeUp)
		{
			this.offset++;
			fill(0);
			stroke(0);
			rect(160, 360, 400, 400);
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
			image(this.img, this.pos.x, this.pos.y);
		}
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
		if (this.id == cards.length - 1)
			cards[0].visible = true;
		else
			cards[this.id + 1].visible = true;
	}
}