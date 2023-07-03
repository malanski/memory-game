# Memory Game Documentation

## Overview
This is a JavaScript-based Memory Game, where the player needs to match pairs of cards with identical images. The game tracks the number of moves (tentativas) taken by the player and displays different messages based on their performance. The game is won when all pairs are matched successfully.

  
## How to Play
1. The game starts with all cards facing down.
2. Click on a card to reveal its image.
3. Click on another card to reveal its image as well.
4. If the two cards have the same image, they will remain facing up.
5. If the two cards have different images, they will be flipped back down.
6. Continue flipping and matching cards until all pairs are matched.
7. The game ends when all pairs are matched, and a congratulatory message is displayed.


![Memory Game print screen](https://github.com/malanski/images/raw/main/memory-game.png)  

## Code Explanation
1. The code selects all the cards with the class `.card` and stores them in the `cards` variable. It also selects the element with the class `.memory-game` and stores it in the `main` variable.

2. The variables `hasFlippedCard`, `blockBoard`, `firstCard`, `secondCard`, `qtdAcertos`, and `tentativas` are declared and initialized to control the game flow and track the number of successful matches and attempts.

3. The `flipCard()` function is triggered when a card is clicked. It flips the clicked card, and if it's the first card in the pair, it stores it in `firstCard`. If it's the second card, it stores it in `secondCard` and calls the `checkCardSame()` function to see if the two cards match.

4. The `checkCardSame()` function increments the `tentativas` variable to count the attempts made by the player. If the two cards have the same image, the `disabledCard()` function is called. Otherwise, the `unflipCards()` function is called to flip the cards back after a short delay.

5. The `disabledCard()` function disables further clicks on the matched cards, increments the `qtdAcertos` variable to track the number of successful matches, and checks if all pairs are matched. If all pairs are matched, the `newHtmlWhenWin()` function is called to display the win message and options to play again.

6. The `unflipCards()` function prevents further clicks on cards during the delay, then flips back the non-matching cards after the delay.

7. The `resetBoard()` function resets the `hasFlippedCard` and `blockBoard` variables, as well as the `firstCard` and `secondCard` variables, after each turn.

8. The `showAllCards()` function briefly shows all the cards at the beginning of the game.

9. The `newHtmlWhenWin()` function removes all cards from the board and displays a congratulatory message based on the player's performance. 
It also provides an option to play again.  
10. The anonymous function `(function shuffle() { ... })()` shuffles the order of the cards at the beginning of the game to randomize their positions.

11. Event listeners are added to each card to call the `flipCard()` function when clicked.

12. Finally, the `showAllCards()` function is called to briefly reveal all the cards before the game starts.

## Game End Messages
The game displays different messages based on the player's performance:
- If the player matches all pairs in 6 moves, it displays an extra congratulatory message.
- If the player matches all pairs in 10 moves or fewer, it displays a congratulatory message.
- If the player matches all pairs in 11 moves or more, it displays a message encouraging them to play again to improve

.
- If the player matches all pairs in 14 moves or more, it suggests that they need to memorize the images and play again to get better.
- If the player matches all pairs in 18 moves or more, it encourages them to try to memorize the images and play again to improve.

## Note
The code snippet provided seems to be part of a larger memory game implementation.  
To ensure the game works correctly, it is important to have the corresponding HTML and CSS components in place, including card elements, images, and styles.
