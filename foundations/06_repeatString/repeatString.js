const repeatString = function(str, num) {
    if (num >= 0){
        let new_str = []
        while (num >0){
            new_str=new_str.concat(str);
            num--;
        }
        return new_str.join('');
    } else if (num<0){
        return('ERROR')
    } 
};

// Do not edit below this line
module.exports = repeatString;
