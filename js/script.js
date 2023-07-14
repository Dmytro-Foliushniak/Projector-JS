const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];

let result = '';

const strArr = userNames.join(",")
const upperStrArr = strArr.toUpperCase()
for (let i = 0; i < strArr.length; i++){
    if (upperStrArr[i] === strArr[i]){
        result += strArr[i].split( ' ' ).join('.')
    }
}

let initials = result.split(",")
initials.forEach((item, index, arr) => {
    arr[index] += '.'
} )

console.log(strArr)
console.log(initials)
