# Commute Game

Commute is a game in which the user will try to reach the goal of commuting to work. The user will be presented with different choices along the way. Each choice will have a result that will affect the effectiveness of his route to work. If wrong choices are made the user may face negative consequences that will prevent him from achieving the goal(work). The user will win the game by choosing the correct choices that result in a successfull path to work.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Wireframe

![alt text](https://raw.githubusercontent.com/omarclzd/commute-game/images/commute-wireframe.png)

## Pseudocode

Come up with path that will successfully win game. 

Create array of objects to store possible paths.

Display initial message [game purpose, goal, and instructions] along with start button.

Make button init the game. (init button will also serve as reset button to start over)

Render first message.

Set event listener to parent element that will hold all choices. 

Display correct choice. Use function that will set the event handler  for the event.target.

After correct choice has been clicked. Display new text message with new choices. 

Repeat until user has completed the winning path. 

Display winning message. 

Come up with path for wrong choices. 

Use function with if statement to render outcome of wrong choices. 

Repeat until user has reached the end of wrong paths, which will display a message stating the user has failed. 


## Authors

* **Omar Calzada** - [omarclzd](https://github.com/omarclzd)

## Acknowledgments