const cursor = document.querySelector('.hammer')
const holes = [...document.querySelectorAll('.hole')]
const scoreEl = document.querySelector('.score span')
let score = 0

const sound = new Audio("media/smash.mp3")

function start(){
    runGame()
}

function runGame(){
    const i = Math.floor(Math.random() * holes.length)
    const hole = holes[i]
    let timer = null

    const img = document.createElement('img')
    img.classList.add('pig')
    img.src = 'media/pig.png'

    img.addEventListener('click', () => {
        score += 10
        sound.play()
        scoreEl.textContent = score
        img.src = 'media/pigsmash.png'
        clearTimeout(timer)
        setTimeout(() => {
            hole.removeChild(img)
            runGame()
        }, 500)
    })

    hole.appendChild(img)

    timer = setTimeout(() => {
        hole.removeChild(img)
        runGame()
    }, 1500)
}


window.addEventListener('mousemove', e => {
    cursor.style.top = e.pageY + 'px'
    cursor.style.left = e.pageX + 'px'
})
window.addEventListener('mousedown', () => {
    cursor.classList.add('active')
})
window.addEventListener('mouseup', () => {
    cursor.classList.remove('active')
})