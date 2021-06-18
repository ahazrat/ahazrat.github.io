const sounds = [
    {
        'filepath': './assets/sounds/zenbell.mp3',
        'color': '#777',
    },
    {
        'filepath': './assets/sounds/zen-gong.wav',
        'color': '#888',
    },
    {
        'filepath': './assets/sounds/tibetan-chant.aifc',
        'color': '#999',
    },
]

function createSoundTiles(containerDiv) {

    const soundRow = containerDiv
        .append('div')
        .classed('sound-row', true)
    soundRow.style('display', 'flex')

    const soundTiles = soundRow.selectAll('div').data(sounds).enter()
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

function setBackgroundMusic(containerDiv) {
    const bassAndDrums = containerDiv
        .append('audio')
        .attr('id', 'bass-and-drums-audio')
        .attr('src', './assets/sounds/572205__josefpres__bass-loops-008-with-drums-short-loop-120-bpm.wav')
        .attr('loop', true)
    bassAndDrums.node().volume = 0.1
    
    window.addEventListener('click', e => {
        console.log('playing music')
        bassAndDrums.node().play()
    })
}

export { createSoundTiles, setBackgroundMusic }
