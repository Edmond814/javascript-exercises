const sumAll = function(num1,num2) {
    let sum = 0; 
     if((typeof(num1)=='number')&&(typeof(num2)=='number')&&(num2>0&&num1>0)){
        if (num1>num2){
            let x = num1;
            num1=num2;
            num2=x;
        } 
        let sum1=num2*(num2+1)/2;
         let sum2=(num1-1)*((num1-1)+1)/2;
         sum = sum1-sum2;
     }
     else {
       return"ERROR";
     }
     return sum;
   };
// Do not edit below this line
module.exports = sumAll;
