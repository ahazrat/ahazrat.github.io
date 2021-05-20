
// create a table with this data
moreData = {
    "movies": ["The Matrix", "Braveheart", "Pulp Fiction"],
    "books": ["Seveneves", "Diamond Age", "Cryptonomicon"]
}

function createMajorTiles() {
    dataMajorTiles = [
        {'text': 'For recruiters'},
        {'text': 'For students'},
        {'text': 'For founders'},
    ]
    selMajorTiles = divBodyContainer
        .append('div')
        .classed('row', true)
        .attr('id', 'major-tiles')
        .style('background-color', 'green')
    selMajorTiles
        .selectAll('div')
        .data(dataMajorTiles)
        .enter()
        .append('div')
        .classed('col-sm', true)
        .append('div')
        .classed('card', true)
        .style('margin', '10px')
        .style('height', '100px')
        .style("width", "18rem")
        .text(d => d.text)
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
