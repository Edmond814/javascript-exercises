const palindromes = function (str) {
    arr = str.toLowerCase().split('') 
    arr = arr.filter(char=>char.match(/[a-z]/i))
    for (let i=0;i<arr.length;i++){
      if(arr[arr.length-1-i]!=arr[i])
        return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
