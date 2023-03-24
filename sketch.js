let img;

let cards = [];

function preload()
{
	img = loadImage('assets/img/card280x280.png');
}

function setup()
{
	let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet massa neque. Pellentesque ut commodo risus. Phasellus vel nulla et sem feugiat sagittis. Aliquam faucibus, purus vel rhoncus lobortis, lorem ante feugiat enim, at mattis lorem quam nec turpis. Morbi mauris dui, molestie ut sodales a, rutrum ac mauris. Phasellus erat elit, vehicula in dictum et, imperdiet ut elit. Pellentesque quis purus ligula. Etiam a eleifend felis. Ut velit leo, efficitur ut tincidunt vel, efficitur id velit. Cras mattis porttitor leo. Nam luctus odio sed augue aliquam accumsan. Integer tincidunt, ipsum quis maximus sollicitudin, ex odio sollicitudin dolor, id suscipit magna lectus quis dolor. Donec aliquet vestibulum dui ut aliquet. Curabitur sem neque, pharetra sit amet pulvinar sit amet, ornare vulputate purus.";
	createCanvas(720, 720);
	cards[0] = new Card(img, text);
}

function draw()
{
	background(0);
	cards[0].show();
	//cards[0].setPos(mouseX, mouseY);
	//image(img, (width / 2) - (img.width / 2), (height / 2) - (img.height / 2));
}