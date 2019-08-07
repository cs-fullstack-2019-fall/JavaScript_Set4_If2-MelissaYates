//Exercise 11
// Ask the user to enter their grade. Print their letter grade:
var grade = parseInt(prompt("Please enter your grade."));
if(grade >= 0 && grade <=59){
    alert("Your grade is F");
}
else if(grade >=60 && grade <= 69) {
    alert("Your grade is D");
}
else if(grade >=70 && grade <= 79) {
    alert("Your grade is C");
}
else if(grade >=80 && grade <= 89) {
    alert("Your grade is B");
}
else if(grade >=90 && grade <= 100){
    alert("Your grade is A");
}
else{
    alert("ERROR!");
}

//
//     A 90 - 100 B 80 - 89 C 70 - 79 D 60 - 69 F 0 - 59
//
// Extra Credit:
//     If it's negative or over 100 print an error.