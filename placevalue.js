var readline=require("readline-sync");

var n=readline.question("Enter 1,10,100,1000,10000,100000\n");

switch(n)
{
    case `1`: console.log("unit");
    break;
    case `10`: console.log("ten");
    break;
    case `100`: console.log("hundred");
    break;
    case `1000`: console.log("Thousand");
    break;
    case `10000`: console.log("ten thousand");
    break;
    case `100000`: console.log("one lakh");
    break;
    
    default: console.log("enter correct value");break;
}