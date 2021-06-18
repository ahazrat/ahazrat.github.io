const socialLinksData = [
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

function createSocialLinks(containerDiv) {
    const socialLinksRow = containerDiv
        .append('div')
        .classed('row', true)
        .attr('id', 'social-links-row')
        .style('padding', '50px')

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

export { createSocialLinks }
