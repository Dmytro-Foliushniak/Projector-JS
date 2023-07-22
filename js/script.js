//Task 1

const durationBetweenDates = function (startDate = '12 June 2023', endDate = '13 June 2023', type = 'minutes'){
    const start = Date.parse(startDate)
    const end = Date.parse(endDate)
    let result = end - start
    const typeOfMeasure = {
        days: Math.floor(result / (1000 * 60 * 60 * 24)),
        hours: Math.floor((result / 1000 / 60 / 60)),
        minutes: Math.floor((result / 1000 / 60)),
        seconds: Math.floor((result / 1000))
    }
    for (let key in typeOfMeasure){
        if (type === key){
            result = `${typeOfMeasure[key]} ${key}`
            return result
        }
    }
}

console.log(durationBetweenDates('21 Jul 2023', '22 Jul 2023', 'days'))

// Task 2

const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
}

function optimizer(data) {
    let arrPriceData = Object.entries(data).map(item => [item[0].toLowerCase(), Number(item[1]).toFixed(2)])
    return Object.fromEntries(arrPriceData)

}

let updatedPriceData = optimizer(priceData);

console.log(updatedPriceData)

// Task 3

function recursiveOddSumTo(number){
    let value = 0
    if (number === 1){
        return number
    }
    if (number % 2 ===1){
        value = number
    }

    return  value + recursiveOddSumTo(number - 1)

}
console.log(recursiveOddSumTo(1))
console.log(recursiveOddSumTo(10))

//Task 4
function iterativeOddSumTo(number){
    let value = 0
    for (let i = 0; i <= number; i++ ){
        if (i % 2 === 1){
            value += i
        }

    }
    return value
}
console.log(iterativeOddSumTo(1))
console.log(iterativeOddSumTo(10))