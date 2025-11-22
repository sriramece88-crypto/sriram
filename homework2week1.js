

function categorizeNumber(num){
//if num is greater than zero
if(num>0)
{
    return "the num is positive";
}
else if(num<0)
{
    return "the num is negative";
}

else
{
    return "the number is zero";
}
}
//declare a variabke
let num=5;
console.log(categorizeNumber(num));
