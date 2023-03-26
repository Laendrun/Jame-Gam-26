function arrows()
{
	image(arrow_up, (width / 2) - arrow_up.width / 2, 250);
	arrow_up_pos.x = (width / 2) - arrow_up.width / 2;
	arrow_up_pos.y = 250;
	image(arrow_left, 1/4 * arrow_left.width, 560 - arrow_left.height / 2);
	arrow_left_pos.x = 1/4 * arrow_left.width;
	arrow_left_pos.y = 560 - arrow_left.height / 2;
	image(arrow_right, width - arrow_right.width - 1/4 * arrow_right.width, 560 - arrow_right.height / 2);
	arrow_right_pos.x = width - arrow_right.width - 1/4 * arrow_right.width;
	arrow_right_pos.y = 560 - arrow_right.height / 2;
}
