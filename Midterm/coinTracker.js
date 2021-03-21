let priceElement = document.querySelector('#price')

let USDButton = document.querySelector('#buttonUSD')
let GBPButton = document.querySelector('#buttonGBP')
let EURButton = document.querySelector('#buttonEUR')

let url = 'https://api.coindesk.com/v1/bpi/currentprice.json'
maxFailedAttempts = 3

bitcoinData(maxFailedAttempts)

function bitcoinData (attempts) {
    if (attempts <= 0) {
        alert('Failed to contact bitcoin server')
        return
    }

    fetch(url).then( (res) => {
        return res.json()
    }).then( (issData) => {
        console.log(issData)
        USDButton.addEventListener( 'click', function() {
            let priceUSD = issData.bpi.USD.rate_float
            console.log(price)
            let symbolUSD = issData.bpi.USD.symbol
            console.log(symbolUSD)
            priceElement.innerHTML = `${priceUSD.toFixed(2)}${symbolUSD}`
        })
        
        GBPButton.addEventListener( 'click', function() {
            let priceGBP = issData.bpi.GBP.rate_float
            console.log(priceGBP)
            let symbolGBP = issData.bpi.GBP.symbol
            console.log(symbolGBP)
            priceElement.innerHTML = `${priceGBP.toFixed(2)}${symbolGBP}`
        })
        
        EURButton.addEventListener( 'click', function() {
            let priceEUR = issData.bpi.EUR.rate_float
            console.log(priceEUR)
            let symbolEUR = issData.bpi.EUR.symbol
            console.log(symbolEUR)
            priceElement.innerHTML = `${priceEUR.toFixed(2)}${symbolEUR}`
        })
            
            
    }).catch( (err) => {
            attempts = attempts -1
            console.log('ERROR', err)
    })
}

/////////////////////////////////////////////////////

let canvas = document.querySelector('#coin-chart')

let ctx = canvas.getContext('2d')
ctx.width = 400
ctx.height = 300

let url2 = 'https://api.coindesk.com/v1/bpi/historical/close.json'


bitcoinChart(maxFailedAttempts)

function bitcoinChart (attempts) {
    if (attempts <= 0) {
        alert('Failed to contact bitcoin server')
        return
    }
    fetch(url2).then( (res) => {
        return res.json()
    }).then( (issData) => {
        console.log(issData)
        let dayPrice = issData.bpi

        keys = []       //
        for(var k in dayPrice){
            keys.push(k)
        }

        values = []
        for (var k in dayPrice){
            values.push(dayPrice[k])
        }

        console.log(keys)
        console.log(values)

        let chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: keys,
                datasets: [ {
                    label: 'Price (USD)',
                    data: values,
                    borderColor: 'rgb(0, 0, 0)',
                    pointBackgroundColor: 'rgb(255,153,0)',
                    backgroundColor: 'rgb(133,187,101, 0.6)',
                    lineTension: 0.3,
                    borderWidth: 2
                } ]
            },
            options: {
                responsive: true,
                title: {
                    display: true,
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
            }
        })
    }).catch( (err) => {
        attempts = attempts -1
        console.log('ERROR', err)
    })  
}