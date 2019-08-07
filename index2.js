//Exercise 12
// Ask the user to enter their age.
// Check if they entered a value between 0 and 125.
// If valid, print "REAL AGE". If invalid print “NOT A REAL AGE!!!”
var userAge = parseInt(prompt("Please enter your age."));
if(userAge > 0 && userAge <= 125){
    alert("REAL AGE");
}
else{
    alert("NOT A REAL AGE!!!");
}

