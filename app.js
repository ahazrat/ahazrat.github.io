
function createTable(d) {
    table = d3.select('#table')
    thead = table.append('thead')
    tbody = table.append('tbody')
    thead.append
    console.log(thead)
}

d3.json('data.json').then(data => {

    console.log(data)
    createTable(data)
})