const repeatString = function(strings, number) {
    if(number<0)
        return "ERROR";
    let sentence='';
    for(let i=0;i<number;i++){
        sentence += strings;
    }
    return sentence;
};


// Do not edit below this line
module.exports = repeatString;
