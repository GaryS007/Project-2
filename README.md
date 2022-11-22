# Rock Paper Scissors Game

Rock Paper Scissors game is the original game we all know and love from when we were kids. This is a web based game that was built using HTML, CSS and Javascript. 

Players will need to pick the correct option to win a round and then reach 5 wins to beat the computer. It includes a Dark & Light mode theme option and is fun for anyone looking to revisit such a nostalgic game.

## Features

### Existing Features

**Header**

- Located at the top of the page containing the name 'Rock Paper Scissors Game'.
- Using the main website colour #39FF14.
- Light & Dark Mode options are also featured as a part of the header.

**Player & Computer Score**

- Player and Computer score is displayed here. 
- Score is updated after the computers option is displayed.
- This section is designed to reset after the player chooses to start a new game.

**Game Area**

- Player and Computer choices will be displayed here to offer a more visual element to the game.
- Once player has selected an option, the computer choice will display 500ms later to build an element of suspense.
- Computers Choice is randomly decided using JavaScript.
- I used placeholder '?' icons to make use of space in the absence of a player choice at the start of a game.
- All Icons were provided by [Font Awesome](https://fontawesome.com/icons).

**Results**

- The result of each turn is displayed here.
- The result being displayed is sharing the same timeout function as the computer choice being displayed. 
- I created a removeResults function to remove the results each time an option is selected.

**Player Choices**

- 3 Buttons to enable the player to pick Rock, Paper or Scissors. 
- All buttons share the same retro styling.

**Window Modals**

- Main Modal Window - This modal window will launch when the player visits the website. It displays the rules of the game and includes a Start Game button that closes the modal window.
- Win Modal Window - This modal window will launch when the player wins 5 rounds. It provides a congratulations message as well as the ability to play again.
- Lose Modal Window - This modal window will launch when the player loses 5 rounds. It notifies the player of their defeat and allows them to play again.

### Future Implementations

- Add game difficulties that changes the computer logic and increases the computer chance to win by allowing the computer to roll twice to defeat the player.
- Add sound options for click sounds when buttons are pressed and when win/lose modal appears.

## Tecnologies Used

- Gitpod
- Github
- HTML5
- CSS3
- Font Awesome - All Icons came from here
- Gimp 2 - Used for resizing, cropping and compression of imagery
- MSPaint - Used to create wireframes instead of Balsamiq.

## Fonts & Colours

### Fonts

- Ubuntu, sans-serif

### Colours

I used Neon Green as the primary colour and a dark grey/black as a secondary. I then inverted my colours to see how it would look. I couldn't choose which I preferred so decided to make a light/dark mode themed options.

- Neon Green - #39FF14
- Dark Grey - #424242
- Black was used for button shadows and general shading.

## Mock Design

My subscription to Balsamiq expired so I used MSPaint to create a simple wireframe for my game. I made some alterations to the design during the build but this helped build the foundation of my game.

## Testing

I tested my website throughout the build using dev tools. All buttons and modal windows were tested extensively on various browsers. Responsiveness was also tested using dev tools. 

All player option buttons were tested to check:

- Every button is functioning as expected and displaying the appropriate value.
- That the computers response provides a random value every turn.
- That the computer response is done using the 500ms timeout.
- That the result message is displaying the correct value depending on who won that round.

All Modal Buttons were tested to ensure:

- Modal window must close when the player clicks the appropriate button.
- The scores reset when the modal window is closed.

Light & Dark Mode themes:

- Tested to ensure the correct theme is applied.
- Tested to ensure scores are not affected in the middle of a game when theme is changed.



### Validator Testing

- HTML - No errors were returned passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fgarys007.github.io%2FProject-2%2F)
- CSS - No errors were found when passing through the official [Jigsaw Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fgarys007.github.io%2FProject-2%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- JavaScript - 