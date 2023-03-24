let img;

let cards = [];
let imgs = [];

function preload()
{
	for (let i = 0; i < 5; i++)
		imgs[i] = loadImage('assets/img/' + i + '.png');
	// imgs[0] = loadImage('assets/img/card1.png');
	// imgs[1] = loadImage('assets/img/card2.png');
}

function setup()
{
	// let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet massa neque. Pellentesque ut commodo risus. Phasellus vel nulla et sem feugiat sagittis. Aliquam faucibus, purus vel rhoncus lobortis, lorem ante feugiat enim, at mattis lorem quam nec turpis. Morbi mauris dui, molestie ut sodales a, rutrum ac mauris. Phasellus erat elit, vehicula in dictum et, imperdiet ut elit. Pellentesque quis purus ligula. Etiam a eleifend felis. Ut velit leo, efficitur ut tincidunt vel, efficitur id velit. Cras mattis porttitor leo. Nam luctus odio sed augue aliquam accumsan. Integer tincidunt, ipsum quis maximus sollicitudin, ex odio sollicitudin dolor, id suscipit magna lectus quis dolor. Donec aliquet vestibulum dui ut aliquet. Curabitur sem neque, pharetra sit amet pulvinar sit amet, ornare vulputate purus.";
	createCanvas(720, 720);
	for (let i = 0; i < 5; i++)
		cards[i] = new Card(imgs[i], null, i);
		//cards[i] = new Card(imgs[int(random(0, imgs.length))], null, i);
	cards[int((random(0, cards.length)))].visible = true;
	frameRate(20);
}

function draw()
{
	background(0);
	for (let card of cards)
		card.show();
}

function keyPressed()
{
	if (keyCode == 65 || keyCode == 37)
	{
		switch_cards();
		console.log("Killing villager");
	}
	else if (keyCode == 87 || keyCode == 38)
	{
		switch_cards();
		console.log("Leave villager alone");
	}
	else if (keyCode == 68 || keyCode == 39)
	{
		switch_cards();
		console.log("Rob villager's money");
	}
}

function switch_cards()
{
	for (let i = 0; i < cards.length; i++)
	{
		if (cards[i].visible)
		{
			cards[i].visible = false;
			if (i == cards.length - 1)
				cards[0].visible = true;
			else
				cards[i + 1].visible = true;
			return ;
		}
	}
}