# Jame Gam #26

- Date: 24.03.2023 - 29.03.2023
- Theme : `You are the monster`
- Special Object: `Cards`
- Rank : N/A

> Arts by [mikoolec](https://mikoolec.itch.io/)

> Music by [spacewolf](https://soundcloud.com/spacewolfmusic)


## Game

The game is not finished yet, the jam isn't finished yet.

Here's the link to the [itch.io](https://laendrun.itch.io/jame-gam-26) page of the game (also under construction).

## Ideas

I thought of something like `Reigns: Her majesty`.

You'll be a monster living in a cave near a village and each night you'll have to decide for each villager what you want to do with them:

- Rob them
- Kill them
- Leave them 

- [x] Nights counter
- [x] Villagers counter

This won't be really enjoyable to play but this will be the MVP.

If I have enough time, I want to implement the following :

- [x] Villagers getting hint on where you live as you rob / kill too many villager in a row
	- [x] If they get enough hint, they'll come and kill you during the day
	- [x] Indicator for villager's anger ?
- [ ] Something to do with the money robbed
	- [x] Hire someone to reduce the villager's anger
	- [x] Hire someone to kill a villager for you (so villagers don't get hint for you when a villager dies)

## To-do

- [x] Change the way cards are displayed to be relative to the canvas size
	- For now, the x and y values are hardcoded
- [x] Add a Death screen that sums up all the money you gained / how many villagers you killed and how many nights you survived before getting killed by the villagers
	- [x] Killed villagers count
	- [x] "you have been killed by angry villagers" text
- [x] Animate the cards when choosing left / right / up instead of just switching to the new one
	- Not the best animation but it's an animation
- [x] Display a notification when you buy an item in shop
- [x] Display a notification when you use an item
- [x] Display inventory properly when in invetory state
	- Will not do that, will do a hotbar instead
- [x] Display a kind of hotbar in playing state to display how much of each items you have
- [x] Display texts in a more readable way and all
- [x] Chance to get a random item instead of money when robbing a villager
- [x] Some villagers are richer so you can get more money by robbing them but the anger level goes up quicker
- [x] Add texts to the help page as well as the controls

- [x] Change the way cards are displayed and created
	- [x] Create a new random card each time instead of filling a number of cards from the beginning
	- [x] Each time you choose what to do with a villager, it should create a new card with a random name / image / etc

- [x] Add support for touch screen
	- [x] Swipe up to leave villager
	- [x] Touch / click on the up arrow to leave villager
	- [x] Swipe left to kill villager
	- [x] Touch / click on the left arrow to kill villager
	- [x] Swipe right to rob villager
	- [x] Touch / click on the right arrow to rob villager
	- [x] Swipe down to get to shop
	- [x] Add a shop button
		- [x] Tap / click on the shop button opens the shop
	- [x] Add a help button
		- [x] Tap / click on the help button switches to help state
	- [x] Touching on an item image in the shop buys the item
	- [x] Touching on an item image in the hotbar uses the item
- [x] Add a hunger bar that you have to keep up not to die
	- [x] Change the "Kill villager" by "Eat villager"
	- [x] Eating a villager fills up your hunger bar, that way you can't just leave every villager go without a sort of penalty
- [x] Randomly generated names for villagers
	- [x] Prefix name with *Sir* or *Baron* or other terms like this for richer villagers
- [x] Add an energy bar item to fill up the hunger bar by 35 (cost:150)
- [x] Add ambience music
	- [x] Add ambience music that is always playing
	- [x] Add the ability to mute and resume ambience music
- [x] Display a different text on the death page wether you died of hunger or if the villagers came and killed you