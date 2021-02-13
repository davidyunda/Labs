// pre-requisites for android programming - c# or java

let takenCCharp = false
let takenJava = true

if (takenCCharp || takenJava) {
    console.log('You meet the pre-requisites for android')
} else {
    console.log('You must take C# or Java')
}

//Be a senator

let age = 30
let usCitizenTime = 35
let stateOfResidence = 'Wisconsin'
let stateWantToRepresent = 'Minnesota'

if (age >= 30 && usCitizenTime >= 9 && stateOfResidence == stateWantToRepresent) {
    console.log(' You are eligeible to be a senator')
} else {
    console.log('Sorry, you are not eligeble')
}

// falsy values - undifined, null, empty lists, empty objects, 0, false
if ('' == 0) {
    console.log('the same!')
} else {
    console.log('not the same!')
}

