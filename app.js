
// create a table with this data
moreData = {
    "movies": ["The Matrix", "Braveheart", "Pulp Fiction"],
    "books": ["Seveneves", "Diamond Age", "Cryptonomicon"]
}

function createBodyContainer() {
    bodyContainerDiv = d3.select('body')
        .append('div')
        .classed('container-fluid gradient', true)
    return bodyContainerDiv
}

function setBackgroundMusic() {
    bassAndDrums = bodyContainerDiv
        .append('audio')
        .attr('id', 'bass-and-drums-audio')
        .attr('src', '572205__josefpres__bass-loops-008-with-drums-short-loop-120-bpm.wav')
        .attr('loop', true)
    bassAndDrums.node().volume = 0.1
    window.addEventListener('click', e => {
        console.log('playing music')
        bassAndDrums.node().play()
    })
}

function createRow(rowId) {
    newRow = bodyContainerDiv
        .append('div')
        .classed('row', true)
        .attr('id', rowId)
        .style('padding', '20px')
    return newRow
}

function createJumbotron() {
    // jumbotronRow = createRow('jumbotron-row').style('width', '100%')
    jumbotron = bodyContainerDiv
        .append('div').classed('jumbotron', true)
        .style('background-color', 'rgba(255, 255, 255, 0.2)')
    jumbotron.append('h1').classed('display-4', true).html('jello, world')
    jumbotron.append('h3').html('The time now is <span id="clock"><span>')
    jumbotron.append('p').classed('lead', true).html(`This is a simple simulation.`)
    jumbotron.append('hr').classed('my-4', true)
    jumbotron.append('p').text('We recommend using the latest tools which are optimized for the current situation. These tools run in the cloud while scaling intelligently.')
    jumbotron
        .append('a').classed('btn btn-primary btn-lg', true)
        .attr('href', '#')
        .attr('role', 'button')
        .html('Learn more')
}

function createMajorTiles() {
    dataMajorTiles = [
        {
            'title': 'for Recruiters',
            'text': 'Common details related to career opportunities',
            'image': 'https://i.imgur.com/lZWj9he.png',
            'url': 'recruiters.html',
        },
        {
            'title': 'for Students',
            'text': 'Options to help you on your learning journey',
            'image': 'https://i.imgur.com/jkoK975.png',
            'url': 'students.html',
        },
        {
            'title': 'for Founders',
            'text': 'Opportunities for collaboration on long-term projects',
            'image': 'https://i.imgur.com/24GWSmY.png',
            'url': 'founders.html',
        },
    ]
    majorTilesRow = createRow('major-tiles-row')
    tileCards = majorTilesRow
            .style('background-color', 'rgba(220, 220, 220, 0.3)')
        .selectAll('div').data(dataMajorTiles).enter()
        .append('div').classed('col', true)
        .append('div').classed('card', true)
    // card images
    tileCards
        .append('img')
        .classed('card-img-top', true)
        .attr('src', d => d.image)
    tileCardBodies = tileCards
        .append('div')
        .classed('card-body', true)
    // card titles
    tileCardBodies
        .append('h5')
        .classed('card-title', true)
        .text(d => d.title)
    // card main text
    tileCardBodies
        .append('p')
        .classed('card-text', true)
        .text(d => d.text)
    // card buttons
    tileCardBodies
        .append('a')
        .classed('btn btn-primary', true)
        .attr('href', d => d.url) // replace with new pages for each
        .text(d => `Click here ${d.title}`)
}

function createSocialLinks() {
    socialLinksData = [
        {
            'text': '🏄‍♂️ LinkedIn',
            'link': 'https://www.linkedin.com/in/asifhazrat/',
            'imgUrl': 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.v3ChK_hz_r6OabSrj8xV6gHaHa%26pid%3DApi&f=1',
        },
        {
            'text': '🎻 Github',
            'link': 'https://github.com/ahazrat',
            'imgUrl': 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.aWe4uk00hCCgGY_kieUvswHaHa%26pid%3DApi&f=1',
        },
        {
            'text': '🎭 Twitter',
            'link': 'https://twitter.com/ahazrat',
            'imgUrl': 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F2016%2F07%2FTwitter-High-Quality-PNG.png&f=1&nofb=1',
        },
    ]
    socialLinksRow = createRow('social-links-row')
    socialLinksRow
        .selectAll('div').data(socialLinksData).enter()
        .append('div').classed('col', true)
        .attr('align', 'center')
        .append('a').attr('href', d => d.link)
        .attr('target', '_blank')
        .append('img')
        .attr('src', d => d.imgUrl)
        .attr('height', '300px')
        .style('border-radius', '10px')
}

function slideText() {
    anime({
        targets: '.display-4',
        translateX: 250,
        delay: 100,
        duration: 3000
    })
}

function pullIpData() {
    // function getIPFromAmazon() {
    //     fetch("https://checkip.amazonaws.com/").then(res => res.text()).then(data => console.log(data))
    //   } // This will give you: 178.25.55.75
    ipdataApiKey = 'f77263ea63f529376e96c50e52e12b8190056aea0ca9eb4b2395c5c2'
    url = `https://api.ipdata.co?api-key=${ipdataApiKey}`
    d3.json(url).then(response => {
        console.log('pullIpData',
            response.ip,
            response.latitude,
            response.longitude,
            response.country,
            response.time_zone.name,
            response.city,
            response.flag
        )
        ipAddress = response.ip
        // pullWeather(ipAddress)
        weatherApiIpLookup(ipAddress)
    })
}

function weatherApiIpLookup(ipAddress) {
    weatherApiIpLookup = `https://api.weatherapi.com/v1/ip.json?key=${weatherApiKey}&q=${ipAddress}`
    d3.json(weatherApiIpLookup).then(response => {
        city = response.city
        console.log('weatherApiIpLookup', city, response)
        pullWeatherApiCurrentByCity(city)
    })
}

function pullWeatherApiCurrentByCity(city) {
    city = 'chicago'
    url = `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${city}&aqi=no`
    weatherRow = createRow('weather-row')
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

function createCardFromTuple(t) {
    return `<h3>${t[0]}</h3><p>${t[1]}</p>`
}

function createWeatherColumn(row, weatherData) {
    row
        .append('div').classed('col', true)
        .style('flex-direction', 'column')
        .selectAll('div').data(weatherData).enter()
        .append('div').classed('card weather-card', true)
        .html(d => createCardFromTuple(d))
}

function createSoundTiles() {
    sounds = [
        {
            'filepath': 'zenbell.mp3',
            'color': '#777',
        },
        {
            'filepath': 'zen-gong.wav',
            'color': '#888',
        },
        {
            'filepath': 'tibetan-chant.aifc',
            'color': '#999',
        },
    ]
    soundRow = bodyContainerDiv
        .append('div')
        .classed('sound-row', true)
    soundRow.style('display', 'flex')
    soundTiles = soundRow.selectAll('div').data(sounds).enter()
        .append('div')
        .style('flex', '1')
        .style('height', '100px')
        .style('width', '100px')
        .style('background-color', d => d.color)
        .append('audio').attr('src', d => d.filepath)
    soundRow.selectAll('div').on('click', e => {
        e.target.children[0].play()
    })
}

function setClock(h, m, s) {
    ampm = ' am'
    if (h > 12) {
        h = h - 12
        ampm = ' pm'
    }
    clock = document.getElementById('clock')
    clock.textContent = 
        ("0" + h).substr(-2) + ":" + 
        ("0" + m).substr(-2) + ":" + 
        ("0" + s).substr(-2) + ampm
}

function setBackgroundColor(h, m, s) {
    condainerDiv = document.getElementsByClassName('gradient')[0]
    r = h / 24 * 255
    g = m / 60 * 255
    b = s / 60 * 255
    a = 0.4
    backgroundColor1 = `rgba(${r}, ${g}, ${b}, ${a})`
    backgroundColor2 = `rgba(${b}, ${r}, ${g}, ${a})`
    style = `background-image: linear-gradient(to bottom right, ${backgroundColor1}, ${backgroundColor2});`
    condainerDiv.setAttribute('style', style)
}

window.addEventListener('load', () => {
    weatherApiKey = 'b9cf02917e304aaf876170457212105'
    bodyContainerDiv = createBodyContainer()
    createJumbotron()
    setBackgroundColor()
    createSoundTiles()
    createMajorTiles()
    createSocialLinks()
    slideText()
    setBackgroundMusic()
    setInterval(() => {
        d = new Date()
        h = d.getHours()
        m = d.getMinutes()
        s = d.getSeconds()
        setClock(h, m, s)
        setBackgroundColor(h, m, s)
    }, 1000)
    // pullIpData()
})
