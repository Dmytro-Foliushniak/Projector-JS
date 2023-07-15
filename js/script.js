//1. Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку:
const userNamesFIO = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];

let result = '';

const strArr = userNamesFIO.join(',')
const upperStrArr = strArr.toUpperCase()
for (let i = 0; i < strArr.length; i++){
    if (upperStrArr[i] === strArr[i]){
        result += strArr[i].split( ' ' ).join('.')
    }
}

const initials = result.split(",").sort((a,b)=>a.localeCompare(b)).map((item, index, arr) => arr[index] += '.')

console.log(initials)

//2. Задача на фільтрування масиву. Реалізуйте фільтрування імен які починаються з голосної двома способами:
// 1) через умовну конструкцію
// 2) через вбудований метод масивів

let userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];

// 1) через умовну конструкцію
let filteredNamesNew = [];

let literalStr = 'а о и е у ї є і у ю я';

for (let i=0; i<userNames.length;i++){
    if (literalStr.includes(userNames[i][0].toLowerCase())){
        filteredNamesNew.push(userNames[i])
    }
}
console.log(filteredNamesNew)
// 2) через вбудований метод масивів
let literal= ['а', 'о', 'и', 'е', 'ї', 'є', 'і', 'у', 'ю', 'я'];

let filteredNames = userNames.filter(item => {return literal.includes(item[0].toLowerCase())})
console.log(filteredNames);


// 3. Задача на розворот числа:
const currentMaxValue = 4589;

let reverseMaxValue = Number(currentMaxValue.toString().split('').reverse().join(''))
// reverseMaxValue
console.log(reverseMaxValue)
console.log(typeof reverseMaxValue);

//Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності:
let sum = 1
const resultsArray = [1, 2, [3, [4]]];
let productOfArray = 1;
resultsArray.flat(2).forEach(item => productOfArray *= item)

console.log(productOfArray); // 24