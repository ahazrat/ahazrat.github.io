
// create a table with this data
moreData = {
    "movies": ["The Matrix", "Braveheart", "Pulp Fiction"],
    "books": ["Seveneves", "Diamond Age", "Cryptonomicon"]
}

function createMajorTiles() {
    dataMajorTiles = [
        {
            'title': 'for Recruiters',
            'text': 'Common details related to career opportunities',
            'image': 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.rdVXxZSvmtgv2dEmlwYZygHaEL%26pid%3DApi&f=1',
        },
        {
            'title': 'for Students',
            'text': 'Options to help you on your learning journey',
            'image': 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JgC3I2Z476tESI-G08DShgHaEL%26pid%3DApi&f=1',
        },
        {
            'title': 'for Founders',
            'text': 'Opportunities for collaboration on long-term projects',
            'image': 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fak0.picdn.net%2Fshutterstock%2Fvideos%2F4055320%2Fthumb%2F1.jpg%3Fi10c%3Dimg.resize(height%3A160)&f=1&nofb=1',
        },
    ]
    tileCards = divBodyContainer
        .append('div').classed('row', true)
            .attr('id', 'major-tiles')
            .style('background-color', '#888')
            .style('padding', '20px')
        .selectAll('div').data(dataMajorTiles).enter()
        .append('div').classed('col', true) //.attr('align', 'center')
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
        .attr('href', '#') // replace with new pages for each
        .text(d => `Click here ${d.title}`)
}

function createSocialLinks() {
    socialLinksData = [
        {
            'text': '🏄‍♂️ LinkedIn',
            'link': 'https://www.linkedin.com/in/asifhazrat/'
        },
        {
            'text': '🎻 Github',
            'link': 'https://github.com/ahazrat'
        },
        {
            'text': '🎭 Twitter',
            'link': 'https://twitter.com/ahazrat'
        },
    ]
    divSocialLinks = d3.select('.container-fluid')
        .append('div')
        .attr('id', 'social-links')
    divSocialLinks
        .append('ul')
        .selectAll('li')
        .data(socialLinksData)
        .enter()
        .append('li')
        .append('a')
        .attr('href', d => d.link)
        .text(d => d.text)
}

function initPageHome() {
    divBodyContainer = d3.select('body')
        .append('div')
        .classed('container-fluid', true)
    createMajorTiles()
    createSocialLinks()
}

initPageHome()
