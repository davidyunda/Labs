function isMinnesotaZip(code) {
    // All MN zip are between these: 55001 and 56763
    if (code >= 55001 && code <= 56763) {
    return true
    } else {
        return false
    }
}

console.log(isMinnesotaZip(55403))

function validGPA(gpa) {
 return gpa >= 0 && gpa <=4
}
 console.log(validGPA(3))
 console.log(validGPA(5))

 function cityStateAddress(city, state) {
     let address = city + ', ' + state.toUpperCase()        // wi to WI
     return address
 }
 console.log(cityStateAddress('Minneapolis', 'mn'))
 let address = cityStateAddress('Seattle', 'WA')
 console.log(address)