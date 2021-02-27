let url = 'https://api.wheretheiss.at/v1/satellites/25544'

let issLat = document.querySelector('#iss-lat')
let issLong = document.querySelector('#iss-long')
let timeIssLocation = document.querySelector('#time')

let update = 10000
let issMarker
let maxFailedAttempts = 3

let issIcon = L.icon({
    iconUrl : 'iss_noun.png',
    iconSize: [50,50],
    iconAnchor: [25,25]
})

let map = L.map('iss-map').setView([0, 0], 1)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

iss(maxFailedAttempts)       //call function
// setInterval(iss, update)        //10 seconds

function iss(attempts) {

    if (attempts <= 0) {
        alert('Failed to contact ISS server after several attemps.')
        return
    }

    fetch(url).then( (res) => {
        return res.json()
    }).then( (issData)  => {
        console.log(issData)        // display data on the web page
        let lat = issData.latitude
        let long = issData.longitude
        issLat.innerHTML = lat
        issLong.innerHTML = long

        //create marker if it doesn't exist
        //move marker if it doesn't exist

        if (!issMarker) {
            issMarker = L.marker([lat, long], {icon: issIcon}).addTo(map)
        }else {
            issMarker.setLatLng([lat, long])
        }

        let now = Date()
        timeIssLocation.innerHTML = `This data was fetched at ${now}`
    }).catch( (err) => {
        attempts = attempts - 1 
        console.log('ERROR!', err)
    }).finally(() => {
        setTimeout(iss, update, attempts)
    })
}