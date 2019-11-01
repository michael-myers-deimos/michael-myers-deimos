// Write a JavaScript function to calculate the sum of values in an array.

function sumOfArray(input){

    if (toString.call(input) !== "[object Array]")
        return false;

    var total =  0;
    for(var i=0;i<input.length;i++)
    {
        if(isNaN(input[i])){
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}
console.log(sumOfArray([30,59,43]));
console.log(sumOfArray([120,-254,3]));
console.log(sumOfArray([1,2,3]));
console.log(sumOfArray([3,7,3,568,2,5]));
console.log(sumOfArray([234,-400,2,87]));
