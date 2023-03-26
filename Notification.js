class Notification
{
	constructor(x, y)
	{
		this.pos = createVector();
		this.pos.x = x;
		this.pos.y = y;
		this.text = null;
		this.visible = false;
		this.hiding = false;
	}

	show()
	{
		if (this.visible)
		{
			fill(127,127,127)
			stroke(127,127,127);
			rect(this.pos.x, this.pos.y, 250, 30);
			fill(255);
			stroke(0);
			textAlign(LEFT);
			textSize(15);
			text(this.text, this.pos.x + 5, this.pos.y + 20);
			if (!this.hiding)
			{
				this.hiding = true;
				setTimeout(() => {
						this.visible = false;
						this.hiding = false;
				}, 2000);
			}
		}
	}
}