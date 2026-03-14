const sumAll = function(a, b) {
    if (a>=0 && b>=0 && typeof a == typeof b && typeof a == typeof 42 && Number.isInteger(a) && Number.isInteger(b)){
        let start = a<=b ? a : b;
        let end = a<=b ? b : a;
        let arr = [start, ];
        for (i=1;i<=end-start;i++){
            arr.push(start+i);
        }
        let result = arr.reduce((sum, current) => sum + current, 0);
        return result;
    } else
        return("ERROR");
};

// Do not edit below this line
module.exports = sumAll;
