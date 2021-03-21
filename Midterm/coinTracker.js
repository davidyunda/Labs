let priceElement = document.querySelector('#price')



let url = 'https://api.coindesk.com/v1/bpi/currentprice.json'

fetch(url).then( (res) => {
    return res.json()
} ).then( (issData) => {
    console.log(issData)
    let price = issData.bpi.USD.rate_float
    console.log(price)
    let symbol = issData.bpi.USD.symbol
    console.log(symbol)
    priceElement.innerHTML = `${price.toFixed(2)}${symbol}`
})

/////////////////////////////////////////////////////
let canvas = document.querySelector('#coin-chart')
// canvas.width = window.innerWidth
// canvas.height = window.innerHeight

let ctx = canvas.getContext('2d')
ctx.width = 400
ctx.height = 300

let url2 = 'https://api.coindesk.com/v1/bpi/historical/close.json'

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
                //  fill: 'origin',
                backgroundColor: 'rgb(133,187,101, 0.6)',
                // fillColor: 'rgb(124,252,0)'
                lineTension: 0.3,
                borderWidth: 2

				//  backgroundColor: values.chartColors.red,
                // backgroundColor: ['red', 'yellow', 'green', 'blue', 'orange'],
            } ]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                // text: 'Bitcoin Chart'
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


})