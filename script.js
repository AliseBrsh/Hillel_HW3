//ЗАДАЧА 1

let quantityOfNumber = prompt('Enter a number');
let q = 1;
let w = 1;

for (let i = 1; i <= 1; i++) {
    console.log(i - 1);
   for (let k = 1; k<=1; k++) {
    console.log(k);
    for (let j = 1; j <= 1; j++){
        console.log(j);
        for (let l = 3; l <= quantityOfNumber; l++){
            let e = q + w;
            q = w;
            w = e;
            console.log(w);
        }
    }
   }
};

//ЗАДАЧА 2

let lengthOfNumbers = prompt('Enter lenght of numbers');

for (let i = 1; i<= lengthOfNumbers; i++) {
    document.write('');
    for (let j = 1; j <= i; j++) {
        document.write(`${j} `); 
    }
    document.write(`<br>`);
};