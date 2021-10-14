const removeFromArray = function(arr) {
    for (let i = 0;i<arguments.length;i++){
        for(let j=0;j<arr.length;j++){
            if (arguments[i]===arr[j]){
                arr.splice(j,1)
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
