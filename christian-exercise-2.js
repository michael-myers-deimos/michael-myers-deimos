"use strict";
// Write a JavaScript function to merge two arrays and removes any duplicate elements in your array.
function merge_array(array1, array2) {
    var result_array = [];
    var arr = array1.concat(array2);
    var len = arr.length;
    var assoc = {};

    while(len--) {
        var item = arr[len];

        if(!assoc[item])
        {
            result_array.unshift(item);
            assoc[item] = true;
        }
    }

    return result_array;
}


var array1 = [1, 2, 3, 4, 5,];

var array2 = [1, 2, 10, 12, 15];

console.log(merge_array(array1, array2));
