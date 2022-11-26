# Rock Paper Scissors Game

Rock Paper Scissors game is the original game we all know and love from when we were kids. This is a web based game that was built using HTML, CSS and Javascript. 

Players will need to pick the correct option to win a round and then reach 5 wins to beat the computer. It includes a Dark & Light mode theme option and is fun for anyone looking to revisit such a nostalgic game. 

There is an intentional delay built into the game, after you choose an option the computers option & results will be displayed after 500ms. 

![Responsive Design](https://garys007.github.io/Project-2/assets/images/responsive.png)

Visit the deployed website - [Live link to website](https://garys007.github.io/Project-2/)

## Features

### Existing Features

**Header**

![Header Image](https://garys007.github.io/Project-2/assets/images/header.png)

- Located at the top of the page containing the name 'Rock Paper Scissors Game'.
- Using the main website colour #39FF14.

**Light & Dark Mode Themes**

![Darkmode](https://garys007.github.io/Project-2/assets/images/header.png)
![Lightmode](https://garys007.github.io/Project-2/assets/images/header2.png)

- Light & Dark Mode options are also featured as a part of the header. 
- It is a simple toggle button that changes the font awesome icon depending on what mode is selected.
- I implemented this by having 2 separate stylesheets and using Javascript to switch between them. 
- There are plenty of other methods to achieve this, for larger projects I wouldn't use the 2 stylesheet method.

**Player & Computer Score**

![Score Image](https://garys007.github.io/Project-2/assets/images/scores.png)

- Player and Computer score is displayed here. 
- Score is updated after the computers option is displayed.
- This section is designed to reset everytime the player chooses to 'Play Again' after winning or losing.

**Game Area**

![Game Area](https://garys007.github.io/Project-2/assets/images/game-area.png)

- Player and Computer choices will be displayed here to offer a more visual element to the game.
- Once player has selected an option, the computer choice will display 500ms later to build an element of suspense.
- Computers Choice is randomly decided using JavaScript.
- I used placeholder '?' icons to make use of space in the absence of a player choice at the start of a game.
- All Icons were provided by [Font Awesome](https://fontawesome.com/icons).

**Results**

![Results](https://garys007.github.io/Project-2/assets/images/results.png)

- The result of each turn is displayed here.
- The result being displayed is sharing the same timeout function as the computer choice being displayed. 
- I created a removeResults function to remove the results each time an option is selected.

**Player Choices**

![Player Choices](https://garys007.github.io/Project-2/assets/images/options.png)

- 3 Buttons to enable the player to pick Rock, Paper or Scissors. 
- All buttons share the same retro styling.

**Window Modals**

![Modal Window](https://garys007.github.io/Project-2/assets/images/modal.png)

- Main Modal Window - This modal window will launch when the player visits the website. It displays the rules of the game and includes a Play Game button that closes the modal window.
- Win Modal Window - This modal window will launch when the player wins 5 rounds. It provides a congratulations message as well as the ability to play again.
- Lose Modal Window - This modal window will launch when the player loses 5 rounds. It notifies the player of their defeat and allows them to play again.

**Results/Computer Choice/Button Delays**

- I implemented a 500ms timeout to all 3 player options as well as a 500ms delay on the computer choice and results section.
- When player chooses Rock and Computer randomly generates Rock 2 times in a row, it felt like nothing happened or changed. So adding in a delay was a fun way to fix that.
- The buttons also get disabled to prevent spamming the player choices, allowing players to spam also created a bug which the delay fixed nicely.
- The delay can be removed or increased by changing the Javascript variable created for the timeout.

### Future Implementations

- Add game difficulties that changes the computer logic and increases the computer chance to win by allowing the computer to roll twice to defeat the player.
- Add sound options for click sounds when buttons are pressed and when win/lose modal appears.
- Add an Array of random win/lose messages so each win or loss feels more unique.

## Tecnologies Used

- Gitpod
- Github
- HTML5
- CSS3
- Font Awesome - All Icons came from here.
- Gimp 2 - Used for resizing, cropping and compression of imagery.
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

![Mock Design](https://garys007.github.io/Project-2/assets/images/mock.png)

My subscription to Balsamiq expired so I used MSPaint to create a simple wireframe for my game. I made some alterations to the design during the build but this helped build the foundation of my game. While this might not be the best designed mock, it really helped me visualize a layout.


## Testing

I tested my website throughout the build using dev tools. All buttons and modal windows were tested extensively on various browsers. Responsiveness was also tested using dev tools. 

All player option buttons were tested to check:

- Every button is functioning as expected and displaying the appropriate value.
- That the computers response provides a random value every turn.
- That the computer response is displayed 500ms after player turn.
- That the result message is displaying the correct value depending on who won that round and also shares the 500ms delay.
- Each button shares a 500ms delay and will disable after a click. This is intentional and the buttons will turn to grey to indicate that.

All Modal Buttons were tested to ensure:

- Modal window must close when the player clicks the appropriate button.
- The scores reset when the modal window is closed.
- The result section resets when the modal window is closed.
- The Icons are reset back the original '?' icons.

Light & Dark Mode themes:

- Tested to ensure the correct theme is applied.
- Tested to ensure scores are not affected in the middle of a game when theme is changed.
- Tested to ensure the toggle button icon changes on click.

**Responsiveness**

I ensured that the website is responsive by using Dev tools and testing each individual device. I also tested on various mobile devices directly.

The website was also tested on various browsers, operating systems and mobile devices:

- Google Chrome
- Opera
- Firefox
- Microsoft Edge
- Safari
- iPhone SE
- iPhone XR
- iPhone 12 Pro
- Pixel 5
- Samsung Galaxy S8+
- Samsung Galaxy S20 Ultra
- iPad Air
- iPad Mini
- Surface Pro 7
- Surface Duo
- Galaxy Fold
- Samsung Galaxy a51/71
- Nest Hub
- Nest Hub Max

### Validator Testing

- HTML - No errors were returned passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fgarys007.github.io%2FProject-2%2F)
- CSS - No errors were found when passing through the official [Jigsaw Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fgarys007.github.io%2FProject-2%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- JavaScript - I used JSHint to test my Javascript. It helped me spot and resolve some minor issues like missing semicolons.

## Deployment

I deployed my website on day 1 as this allows me to test on my mobile device straight away. Doing regular commits and pushes daily, but being able to see my code on local vs live website was great. 
 
- The site was deployed to GitHub pages. The steps to deploy are as follows:
    - In the GitHub repository, navigate to the Settings tab
    - From the source section drop-down menu, select the Master Branch
    - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

- When using GitPod I keep my repository updated everytime I make changes.
    - In GitPod Terminal I would type 'git add .' to add my changes.
    - I would then type 'git commit -m "And put a relevant message here so I understand what the update was in relation to".
    - To then final push my changes to my repository I would type 'git push'.
    - This process was repeated each time I wanted to push changes. Doing it at regular intervals making it easy to back up if I made any serious mistakes.

    The live link can be found here - https://garys007.github.io/Portfolio-1-Gary/index.html



## Credits 

- I used a button design from this example - https://getcssscan.com/css-buttons-examples - I really liked this design.
- I watched multiple videos to help me implement and remember ways to utilize JavaScript - https://www.youtube.com/@coderlipi3421
- FontAwesome was used for all Icons used in my game.
- Thanks to my mentor Sandeep Aggarwal for all his help.
- Thanks to our slack group for keeping me motivated.