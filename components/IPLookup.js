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