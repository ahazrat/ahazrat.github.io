
// function createTable(d) {
//     table = d3.select('#table')
//     thead = table.append('thead')
//     tbody = table.append('tbody')
//     thead.append
//     console.log(thead)
// }

// d3.json('data.json').then(data => {

//     console.log(data)
//     createTable(data)
// })

moreData = {
    "movies": ["The Matrix", "Braveheart", "Pulp Fiction"],
    "books": ["Seveneves", "Diamond Age", "Cryptonomicon"]
}

leftContent = [
    {
        'text': '🏄‍♂️ LinkedIn',
        'link': 'https://www.linkedin.com/in/asifhazrat/'
    }
    // <!-- <li><a href='https://www.linkedin.com/in/asifhazrat/'>🏄‍♂️ LinkedIn</a></li>
    // <li><a href='https://github.com/ahazrat'>🎻 Github</a></li>
    // <li><a href='https://twitter.com/ahazrat'>🎭 Twitter</a></li> -->

]

function initPageHome() {
    console.log(leftContent.length)
    console.log(leftContent[0].text)
    
    var socialLinks = d3.select('#socialLinks')
        .selectAll('li')
        .data(leftContent)

    console.log(socialLinks)

    socialLinks.append('li')
    console.log('test')

    socialLinks
        .enter()
        .append('li')
        .text('fghf')
}

initPageHome()
console.log('done')
