var option=require("readline-sync");
var select=option("Select \n1)FeetToInch\n2)InchToFeet\n3)FeetToMeter\n4)MeterToFeet");

switch(select)
{
    case "1":
        var feet=option.question("enter feet");
        var FeetToInch=12*feet;
        console.log("Feet to inches: "+FeetToInch);
        break;
    case "2":
        var inch=option.question("enter inch");
        var InchToFeet=feet/12;
        console.log(" inches to Feet : "+InchToFeet);
        break;
    case "3":
        var feet=option.question("Enter Feet Value");
        var FeetToMeter=feet/3.281;
        console.log("Feet to meter "+FeetToMeter);
        break;
    case "4":
        var meter=option.question("Enter meter Value");
        var MeterToFeet=feet*3.281;
        console.log("Feet to meter "+MeterToFeet);
        break;
    default:
        console.log("choosen wrong option");
}