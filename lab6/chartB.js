let canvas = document.querySelector('#bridge-chart')
let ctx = canvas.getContext('2d')

let chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Verrazano-Narrows Bridge','Golden Gare Bridge','Mackinac Bridge','George Washington Bridge','Tacoma Narrows Bridge'],
        datasets: [ {
            label: 'Span (meters)',
            data: [1298.4,1280.2,1158.0,1067.0,853.44],
            backgroundColor: ['red', 'yellow', 'green', 'blue', 'orange'],
        } ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})

