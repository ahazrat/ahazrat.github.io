function createCardFromTuple(t) {
    return `<h3>${t[0]}</h3><p>${t[1]}</p>`
}

function weatherApiIpLookup(ipAddress) {
    const weatherApiKey = 'b9cf02917e304aaf876170457212105'
    weatherApiIpLookup = `https://api.weatherapi.com/v1/ip.json?key=${weatherApiKey}&q=${ipAddress}`
    d3.json(weatherApiIpLookup).then(response => {
        city = response.city
        console.log('weatherApiIpLookup', city, response)
        pullWeatherApiCurrentByCity(city)
    })
}

function pullWeatherApiCurrentByCity(containerDiv, city) {
    const city = 'chicago'
    const url = `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${city}&aqi=no`
    const weatherRow = containerDiv
        .append('div')
        .classed('row', true)
        .attr('id', 'weather-row')
    d3.json(url).then(data => {
        console.log(pullWeatherApiCurrentByCity, data)
        windData = Object.entries(data.current).filter(d => d[0].indexOf('wind') !== -1)
        pressureData = Object.entries(data.current).filter(d => d[0].indexOf('pressure') !== -1)
        console.log('windData', windData)
        createWeatherColumn(weatherRow, Object.entries(data.location))
        createWeatherColumn(weatherRow, windData)
        createWeatherColumn(weatherRow, pressureData)
        weatherRow
            .selectAll('div').data(Object.entries(data.current)).enter()
            .append('div').classed('col', true)
            .append('div').classed('card weather-card', true)
            .html(d => createCardFromTuple(d))
    })
}

function createWeatherColumn(row, weatherData) {
    row
        .append('div').classed('col', true)
        .style('flex-direction', 'column')
        .selectAll('div').data(weatherData).enter()
        .append('div').classed('card weather-card', true)
        .html(d => createCardFromTuple(d))
}
