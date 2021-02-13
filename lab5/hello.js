console.log('Hello World!')

// three ways to create variables
let color = 'blue'
var size = 'medium' //not recommended
const language = 'C#'       //can change thsi value
// language = 'C#'

let quantity = 5
let distance = 4.5

let text = 'Hello World'
let message = 'Hi programmers'

console.log('Ther are ' + quantity + ' programmers')

let todayTemp = 75
console.log('Today\s temperature is ' + todayTemp + 'F')

let tempC = (todayTemp -32) *5 / 9
console.log('Today\'s temperature is ' + tempC.toFixed(2) + 'C')
console.log(`Today's temperature is ${tempC.toFixed(2)}C Which is ${todayTemp}F`)

let className = 'Web programming'
let classCode = 2560
let department = 'ITEC'
console.log(`This class is ${department} ${classCode} ${className}`)