// Concentration Game: The object of the game is to collect as many matching pairs as possible.

// Start with a standard deck (grid) of playing cards.

// The player can chooses a card and turn it over.
// The player then selects another card and turns it over.

// If the two cards are a matching pair for example two sixes then they take the two cards and start their stack.
// If the cards are not a match they are turned back over and resume playing.

// Play continues in this fashion until all the cards are played or time runs out.

// A players turn is not over until they are unsuccessfully at matching a pair.

var grid = $("#memory-grid"), // Create grid variable
gridCards = []; // Create card array

  grid.on("click", "li.card", function() { // Add Click Listener for list items .card in #memory-grid
    var self = $(this);

    gridCards.push(self.addClass("check")); // Set class 'check' to see if card has been clicked and push to array
    console.log("The card has been clicked")
});
