const removeFromArray = function(arr, ...elems) {
    let red_arr = arr;
    for (let i=elems.length; i>=0; i--){
        red_arr = red_arr.filter(item => item !== elems[i]);
    }
    return red_arr;  
};

// Do not edit below this line
module.exports = removeFromArray;
