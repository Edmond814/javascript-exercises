const reverseString = function(str) {
    let arr=str.split('');
    let j=arr.length-1;
    
    const reverse_arr=[];
    for (let i=0;i<arr.length;i++){
      reverse_arr[j] = arr[i];
      j--;
    }
    reversed = reverse_arr.join('');
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
