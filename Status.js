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
		stroke(255);
		fill(255);
		rect(x, y, this.width, this.height - this.lvl);
		textSize(10);
		text(this.title, x, y + this.height + 10);
		fill('red');
		rect(x, y + this.height - this.lvl, this.width, this.lvl);
	}
}