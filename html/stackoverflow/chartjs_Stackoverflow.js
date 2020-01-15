var ctx = document.getElementById('myChart1').getContext('2d');

var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        labels: ['Tech mahindra Solutions Technologies Applied sciences', 'IBM Technologies Ltd.', 'Infosys Technologies Ltd.', 'MSC Petroleum Operations', 'tech Systems & Solutions'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ["#669911", "#119966", "#6ee221", "#f5f222", "#FCCE56"],
            data: [10, 9, 8, 6, 4]
        }]
    },
    // Configuration options go here
    options: {
        responsive: true,
        legend: {
            display: false,
            position: 'top'
        },
        title: {
            display: true,
            text: 'Top 5 Companies',
            fontSize: '20',
            fontFamily: 'Roboto'
        },
        tooltips: {
            enabled: false
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    beginAtZero: true,
                    min: 0,
                    max: 12,
                    stepSize: 2,
                    callback: function (tick) {
                        return tick.toString() + 'B';
                    }
                }
            }],
            yAxes: [{
                //categoryPercentage: .8,
                barPercentage: 0.2,
                gridLines: {
                    borderColor: '#ccc',
                    fill: false,
                    pointRadius: 0,
                    borderDash: [10, 4]
                },
            }]
        },
        plugins: {
            datalabels: {
                align: 'end',
                anchor: 'end',
                borderRadius: 4,
                color: 'black',
                formatter: Math.round
            }
        }
    },
    plugins: [{
        beforeInit: function (chart) {
            chart.data.labels.forEach(function (e, i, a) {
                if (/\n/.test(e)) {
                    a[i] = e.split(/\n/);
                }
            });
        }
    }]
});