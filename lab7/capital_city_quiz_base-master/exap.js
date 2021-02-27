let randomCountryElement = document.querySelector('#random-country')
let userAnswerElement = document.querySelector("#user-answer")
let submitButton = document.querySelector("#submit-answer")
let resultTextElement = document.querySelector('#result')

// TODO finish the script to challenge the user about their knowledge of capital cities.
// An array of country codes is provided in the countries.js file. 
// Your browser treats all JavaScript files as one big file, o
// organized in the order of the script tags so the countriesAndCodes array is available to this script.

let countries = countriesAndCodes.filter( country => country["alpha-2"] ).map(country => country["alpha-2"])
console.log(countries)

console.log(countriesAndCodes)  // You don't need to log countriesAndCodes - just proving it is available 


// TODO when the page loads, select an element at random from the countriesAndCodes array
randomCountry = countriesAndCodes[Math.floor(Math.random() * countriesAndCodes.length)]
console.log(randomCountry)
// TODO display the country's name in the randomCountryElement 
randomCountryElement.innerHTML = randomCountry.name
// TODO add a click event handler to the submitButton.  When the user clicks the button,
submitButton.addEventListener('click', function() {
    let answerInput = userAnswerElement.value
    console.log(answerInput)
    // let url = `http://api.worldbank.org/v2/country/${answer}?format=json`
    // fetch(url).then( (res) => {
    //     return res.json()
    // }).then( (issData) => {
    //     console.log(issData)
    // })

})

//  * read the text from the userAnswerElement 
//  * Use fetch() to make a call to the World Bank API with the two-letter country code (from countriesAndCodes, example 'CN' or 'AF')
// let code = randomCountry.filter( country => country["alpha-2"] ).map(country => country["alpha-2"])
// console.log(code)

let code = randomCountry["alpha-2"]
console.log(code)

// let url = 'http://api.worldbank.org/v2/country/br?format=json'
let url = `http://api.worldbank.org/v2/country/${code}?format=json`



fetch(url).then( (res) => {
    return res.json()
}).then( (issData) => {
    console.log(issData)
    let capital = issData[1][0].capitalCity
    console.log(capital)
    if (answerInput == capital) {
        alert('good answer')
    }
})


// let maxFailedAttempts = 3

// guessCapital(maxFailedAttempts)     //call function

// function guessCapital(attempts) {

//     if (attempts <= 0) {
//         alert('Failed to contact server')
//     }







// }
