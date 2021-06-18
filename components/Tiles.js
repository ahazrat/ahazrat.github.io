const dataMajorTiles = [
    {
        'title': 'for Recruiters',
        'text': 'Common details related to career opportunities',
        'image': 'https://i.imgur.com/48m644R.png',
        'url': 'recruiters.html',
    },
    {
        'title': 'for Students',
        'text': 'Options to help you on your learning journey',
        'image': 'https://i.imgur.com/qCYYtY6.png',
        'url': 'students.html',
    },
    {
        'title': 'for Founders',
        'text': 'Opportunities for collaboration on long-term projects',
        'image': 'https://i.imgur.com/xqzlgJ6.png',
        'url': 'founders.html',
    },
]

function createMajorTiles(containerDiv) {
    const majorTilesRow = containerDiv
        .append('div')
        .classed('row', true)
        .attr('id', 'major-tiles-row')
        .style('padding', '50px')
        .style('background-color', 'rgba(220, 220, 220, 0.3)')
    
    const cardGroup = majorTilesRow
        .append('div')
        .classed('card-group', true)

    const tileCards = cardGroup
        .selectAll('div')
        .data(dataMajorTiles)
        .enter()
        .append('div')
        .classed('card', true)

    // card images
    tileCards
        .append('img')
        .classed('card-img-top', true)
        .attr('src', d => d.image)
        // .attr('width', '300px')
        // .attr('height', '300px')

    const tileCardBodies = tileCards
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

export { createMajorTiles }
