//ЗАДАЧА 1

let quantityOfNumber = prompt('Enter a number');
let q = 0;
let w = 1;
let stringNumber = `${q}, ${w}, `;



for (let l = 3; l <= quantityOfNumber; l++){
    let e = q + w;
    stringNumber += `${e}, ` //последнюю запятую так и не получилось убрать ) 
    q = w;
    w = e;
}
console.log(stringNumber);

//ЗАДАЧА 2

let lengthOfNumbers = prompt('Enter lenght of numbers');

for (let i = 1; i<= lengthOfNumbers; i++) {
    document.write('');
    for (let j = 1; j <= i; j++) {
        document.write(`${j} `); 
    }
    document.write(`<br>`);
};