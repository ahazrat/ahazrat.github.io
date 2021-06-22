import { createJumbotron } from './components/Jumbotron.js'
import { resume } from './components/Resume.js'
import { createSoundTiles, setBackgroundMusic } from './components/Sound.js'
import { createMajorTiles } from './components/Tiles.js'
import { createSocialLinks } from './components/Social.js'
import { setClock } from './components/Time.js'
import { setBackgroundColor } from './components/Color.js'
import { slideText } from './components/Animation.js'

window.addEventListener('load', () => {
    const body = document.getElementsByTagName('body')[0]
    const bodyContainerDiv = d3.select('body')
        .append('div')
        .classed('container-fluid gradient', true)

    if (body.id === 'index') {
        createJumbotron(bodyContainerDiv, body.id)
        resume(bodyContainerDiv)
        createSoundTiles(bodyContainerDiv)
        createMajorTiles(bodyContainerDiv)
        createSocialLinks(bodyContainerDiv)
        slideText()
        setBackgroundMusic(bodyContainerDiv)
        setInterval(() => {
            const d = new Date()
            const h = d.getHours()
            const m = d.getMinutes()
            const s = d.getSeconds()
            setClock(h, m, s)
            setBackgroundColor(h, m, s)
        }, 1000)
        // pullIpData()
    } else if (body.id === 'recruiters') {
        createJumbotron(body.id)
        setInterval(() => {
            d = new Date()
            h = d.getHours()
            m = d.getMinutes()
            s = d.getSeconds()
            setBackgroundColor(h, m, s)
        }, 1000)
    } else {
        console.log(`body.id: ${body.id}`)
    }
})
