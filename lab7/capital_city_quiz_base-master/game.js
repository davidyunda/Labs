let randomCountryElement = document.querySelector('#random-country')
let userAnswerElement = document.querySelector("#user-answer")
let submitButton = document.querySelector("#submit-answer")
let resultTextElement = document.querySelector('#result')
let playButton = document.querySelector('#play-button')

// TODO finish the script to challenge the user about their knowledge of capital cities.
// An array of country codes is provided in the countries.js file. 
// Your browser treats all JavaScript files as one big file, o
// organized in the order of the script tags so the countriesAndCodes array is available to this script.
console.log(countriesAndCodes)  // You don't need to log countriesAndCodes - just proving it is available 
  
// TODO when the page loads, select an element at random from the countriesAndCodes array

// TODO display the country's name in the randomCountryElement 

//  * read the text from the userAnswerElement 
//  * Use fetch() to make a call to the World Bank API with the two-letter country code (from countriesAndCodes, example 'CN' or 'AF')
//  * Verify no errors were encountered in the API call. If an error occurs, display an alert message. 
//  * If the API call was successful, extract the capital city from the World Bank API response.
//  * Compare it to the user's answer. 
//      You can decide how correct you require the user to be. At the minimum, the user's answer should be the same
//      as the World Bank data - make the comparison case insensitive.
//      If you want to be more flexible, include and use a string similarity library such as https://github.com/hiddentao/fast-levenshtein 
//  * Finally, display an appropriate message in the resultTextElement to tell the user if they are right or wrong. 
//      For example "Correct! The capital of Germany is Berlin" or "Wrong - the capital of Germany is not G, it is Berlin"


// TODO finally, connect the play again button. Clear the user's answer, select a new random country, 
// display the country's name, handle the user's guess. If you didn't use functions in the code you've 
// already written, you should refactor your code to use functions to avoid writing very similar code twice. 


randomCountry = countriesAndCodes[Math.floor(Math.random() * countriesAndCodes.length)]
console.log(randomCountry)
randomCountryElement.innerHTML = randomCountry.name

let code = randomCountry["alpha-2"]
console.log(code)

let maxFailedAttempts = 3


guessCapital(maxFailedAttempts)     //call function

function guessCapital(attempts) {
    
    submitButton.addEventListener('click', function() {
        
        
        if (attempts <= 0) {
            alert('Failed to contact server')
            return
        }
        
        let answerInput = userAnswerElement.value
        // console.log(answerInput)

        let url = `https://api.worldbank.org/v2/country/${code}?format=json`

        fetch(url).then( (res) => {
            return res.json()
        }).then( (issData) => {
        console.log(issData)
        let capital = issData[1][0].capitalCity
        console.log(capital)
            if (answerInput.toUpperCase() == capital.toUpperCase()) {
                resultTextElement.innerHTML = `Correct! The capital city of ${randomCountry.name} is ${capital}`
            } else {
                resultTextElement.innerHTML = `Wrong - The capital city of ${randomCountry.name} is not ${answerInput}. It is ${capital}`
            }
        }).catch( (err) => {
            attempts = attempts -1
            console.log('ERROR!', err)
        })
            
        })
        
}
    
    
playButton.addEventListener('click', function(){
    userAnswerElement.value = ''
    resultTextElement.innerHTML = ''
    randomCountry = countriesAndCodes[Math.floor(Math.random() * countriesAndCodes.length)]
    randomCountryElement.innerHTML = randomCountry.name
    code = randomCountry["alpha-2"]
    guessCapital(maxFailedAttempts)
    
    
})


