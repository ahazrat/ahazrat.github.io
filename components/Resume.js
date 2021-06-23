const years = [2017, 2018, 2019, 2020]

function resume(bodyContainerDiv) {
    const resumeRow = bodyContainerDiv
        .append('div')
        .style('height', '300px')

    const svg = resumeRow
        .append('svg')
        .attr('height', '300px')
        .attr('width', '100%')
        .style('background-color', 'skyblue')

    const width = window.innerWidth * 0.5
    console.log('width: ', width)
    const xScale = d3.scaleTime()
        .range([0, window.innerWidth])
        .domain(d3.extent(years, d => d))
    
    svg.append('g')
        .attr('transform', 'translate(100, 200)')
        .call(d3.axisBottom(xScale)) 
}

export { resume }
