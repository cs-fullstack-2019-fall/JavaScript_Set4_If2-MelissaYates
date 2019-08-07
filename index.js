// Create a new file for each exercise
// Exercise 10
// Ask the user for 3 cards.
// If the sum equals 21 print BLACKJACK!
// If the sum is greater than 21 print BUST!
// If the sum is less than 21 print “The total is [TOTAL]”

var userCard1 = parseInt(prompt("Give me card number"));
var userCard2 = parseInt(prompt("Give me a second card number"));
var userCard3 = parseInt(prompt("Give me a third card number"));
var sum = (userCard1 + userCard2 + userCard3);

var total = sum;

if(sum === 21){
    alert("BLACKJACK");
}
else if(sum > 21){
    alert("BUST!");
}
else{
    alert("The total is " + total);
}