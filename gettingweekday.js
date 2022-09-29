
var readline=require("readline-sync");

var n=readline.question("Enter Question\n");


switch(n)
{
    case `1`: console.log("Monday");
    break;
    case `2`: console.log("Tuesday");
    break;
    case `3`: console.log("Wednesday");
    break;
    case `4`: console.log("Thursday");
    break;
    case `5`: console.log("Friday");
    break;
    case `6`: console.log("Saturday");
    break;
    case `7`: console.log("Sunday");
    break;
    
    default: console.log("enter correct value from 1 to 7");break;
}



