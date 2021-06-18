function setBackgroundColor(h, m, s) {
    const condainerDiv = document.getElementsByClassName('gradient')[0]
    const r = h / 24 * 255
    const g = m / 60 * 255
    const b = s / 60 * 255
    const a = 0.4
    const backgroundColor1 = `rgba(${r}, ${g}, ${b}, ${a})`
    const backgroundColor2 = `rgba(${b}, ${r}, ${g}, ${a})`
    const style = `background-image: linear-gradient(to bottom right, ${backgroundColor1}, ${backgroundColor2});`
    condainerDiv.setAttribute('style', style)
}

export { setBackgroundColor }
