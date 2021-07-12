import { firebase } from '../assets/dbs/Firebase.js'

function createJumbotron(containerDiv, bodyId) {
    const jumbotron = containerDiv
        .append('div').classed('jumbotron', true)
        .style('background-color', 'rgba(255, 255, 255, 0.2)')
    const user = 'world'
    if (bodyId === 'recruiters') {
        user = bodyId
    }
    jumbotron.append('h1').classed('display-4', true).html(`hello, ${user}`)
    if (bodyId === 'index') {
        jumbotron.append('h3').html('The time now is <span id="clock"><span>')
        jumbotron.append('p').classed('lead', true).html(`This is a simple simulation.`)
        jumbotron.append('hr').classed('my-4', true)
        jumbotron.append('p').text('We recommend using the latest tools which are optimized for the current situation. These tools run in the cloud while scaling intelligently.')
        jumbotron
            .append('a').classed('btn btn-primary btn-lg', true)
            .attr('href', '#')
            .attr('role', 'button')
            .html('Learn more')
        jumbotron.append('p').text('Firebase Data: ')
    }
}

export { createJumbotron }
