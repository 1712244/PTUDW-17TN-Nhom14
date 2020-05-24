console.log("Test");

function drawMostBorrowed() {
    var myChart = echarts.init(document.getElementById('most-borrowed-book-chart'));

    // specify chart configuration item and data
    var option = {
        tooltip: {},
        legend: {
            data:['Sales']
        },
        xAxis: {
            data: bookBorrowData.books,
            type: 'category',
            axisLabel: {
                interval: 0,
            },
            axisTick: {
                show: false,
            },
        },
        yAxis: {},
        series: [{
            name: 'Lượt mượn',
            type: 'bar',
            data: bookBorrowData.counts,
        }],

        itemStyle: {
            color: "#99bfff",
        },
    };

    // use configuration item and data specified to show chart
    myChart.setOption(option);
}


function drawMostBorrowing() {
    var myChart = echarts.init(document.getElementById('most-borrowing-reader-chart'));

    // specify chart configuration item and data
    var option = {
        tooltip: {},
        legend: {
            data:['Sales']
        },
        xAxis: {
            data: readerBorrowData.usernames,
            type: 'category',
            axisLabel: {
                interval: 0,
            },
            axisTick: {
                show: false,
            },
        },
        yAxis: {},
        series: [{
            name: 'Lượt mượn',
            type: 'bar',
            data: readerBorrowData.counts,
        }],

        itemStyle: {
            color: "#99bfff",
        },
    };

    // use configuration item and data specified to show chart
    myChart.setOption(option);
}

function drawBorrowReturn() {
    var myChart = echarts.init(document.getElementById('borrow-return-chart'));

    // specify chart configuration item and data
    var 
    option = {
        xAxis: {
            type: 'time',
            boundaryGap: false
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '30%']
        },
        legend: {
            show: true,
        },
        series: [
            {
                name: 'Lượt mượn',
                type: 'line',
                symbol: 'none',
                lineStyle: {
                    color: 'green',
                    width: 3
                },
                data: borrowReturnData.time.map(function(e,i) {
                    return [e, borrowReturnData.borrowCounts[i]];
                })
            },
            {
                name: 'Lượt trả',
                type: 'line',
                symbol: 'none',
                lineStyle: {
                    color: 'blue',
                    width: 3
                },
                data: borrowReturnData.time.map(function(e,i) {
                    return [e, borrowReturnData.returnCounts[i]];
                })
            }
        ]
    };
    

    // use configuration item and data specified to show chart
    myChart.setOption(option);
}

function drawGenre() {
    var myChart = echarts.init(document.getElementById('most-borrowed-genre-chart'));

    // specify chart configuration item and data
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 'right',
            data: genreBorrowData.genre,
        },
        series: [
            {
                name: 'Lượt mượn',
                type: 'pie',
                radius: '55%',
                center: ['40%', '50%'],
                data:
                    genreBorrowData.genre.map(function(e,i) {
                        return {name: e, value: genreBorrowData.counts[i]};
                    }),
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    
    // use configuration item and data specified to show chart
    myChart.setOption(option);
}

function drawStatus() {
    var myChart = echarts.init(document.getElementById('status-chart'));

    // specify chart configuration item and data
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 'right',
            data: statusData.state,
        },
        series: [
            {
                name: 'Lượt sách',
                type: 'pie',
                radius: '55%',
                center: ['40%', '50%'],
                data:
                    statusData.state.map(function(e,i) {
                        return {name: e, value: statusData.counts[i]};
                    }),
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    
    // use configuration item and data specified to show chart
    myChart.setOption(option);
}


drawMostBorrowed();
drawMostBorrowing();
drawBorrowReturn();
drawGenre();
drawStatus();