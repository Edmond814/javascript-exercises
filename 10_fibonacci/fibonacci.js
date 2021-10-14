const fibonacci = function(a) {
    if (a<0){
        return "OOPS"
    }
    
    const arr = [1,1]
    for (let index = 2; index < a; index++) {
        numb = arr[index-1] + arr [index-2]
        arr.push(numb)
    }
    return arr[a-1]
};

// Do not edit below this line
module.exports = fibonacci;
