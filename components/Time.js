function setClock(h, m, s) {
    let ampm = ' am'
    if (h > 12) {
        h = h - 12
        ampm = ' pm'
    }
    const clock = document.getElementById('clock')
    clock.textContent = 
        ("0" + h).substr(-2) + ":" + 
        ("0" + m).substr(-2) + ":" + 
        ("0" + s).substr(-2) + ampm
}

export { setClock }
