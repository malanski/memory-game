This code is a memory game where the player has to match pairs of cards. The game consists of 12 cards, with 6 pairs of matching cards.

The `cards` variable selects all elements with the class `.card` and stores them in a NodeList. The `main` variable selects the first element with the class `.memory-game`.

The `hasFlippedCard` variable is a boolean that keeps track of whether the player has flipped a card. The `blockBoard` variable is a boolean that prevents the player from flipping cards while the board is blocked. The `firstCard` and `secondCard` variables store the first and second cards that the player flips. The `qtdAcertos` variable keeps track of the number of pairs that the player has matched, and the `tentativas` variable keeps track of the number of attempts the player has made.

The `flipCard` function is called when a card is clicked. It checks if the board is blocked or if the clicked card is the same as the first card, and returns early if either condition is true. It then adds the class `.card-flip` to the clicked card to flip it over. If this is the first card that has been flipped, it sets `hasFlippedCard` to true and stores the clicked card in `firstCard`. Otherwise, it stores the clicked card in `secondCard`, sets `hasFlippedCard` to false, and calls the `checkCardSame` function.

The `checkCardSame` function increments the `tentativas` variable by 1 and checks if the data attribute `data-card` of both cards is equal. If they are equal, it calls the `disabledCard` function. Otherwise, it calls the `unflipCards` function.

The `disabledCard` function removes the click event listener from both cards so that they can no longer be flipped. It increments the `qtdAcertos` variable by 1 and logs its value to the console. If all 6 pairs have been matched, it calls the `newHtmlWhenWin` function. It then calls the `resetBoard` function.

The `unflipCards` function sets `blockBoard` to true to prevent further clicks while unflipping cards. It uses a setTimeout function to wait for 700 milliseconds before removing the `.card-flip` class from both cards and calling the resetBoard function.

The `resetBoard` function resets all variables to their initial values.

The code also includes several other functions such as `showAllCards`, which flips all cards over for 1.5 seconds at the start of the game, and `newHtmlWhenWin`, which changes the HTML on the page when all pairs have been matched.

At the end of the code, an immediately invoked function expression (IIFE) named shuffle is called to randomize the order of cards on page load. An event listener is added to each card so that when it is clicked, it calls flipCard function.
Finally, showAllCards function is called to show all cards at start.
