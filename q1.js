number = 12345;
k = 3;
for(i=0; i<k-1; i++){
  number = parseInt(number % 10);
 }
 temp = parsetInt(number % 10);
 console.log("Digit: "+ temp);