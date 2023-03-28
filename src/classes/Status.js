class Status
{
	constructor(title)
	{
		this.title = title;
		this.lvl = 0;
		this.height = 100 - this.lvl;
		this.width = 20;
	}

	show(x, y)
	{
		push();
		translate(x, y);
		stroke(255);
		fill(255);
		rect(0, 0, this.width, this.height - this.lvl);
		stroke(0);
		textSize(10);
		textAlign(CENTER);
		text(this.title, this.width / 2, this.height + 10);
		if (this.lvl > 0)
		{
			stroke('red');
			fill('red');
			rect(0, this.height - this.lvl, this.width, this.lvl);
		}
		pop();
	}
}