const left = document.querySelector('.left')
const right = document.querySelector('.right')
const slider = document.querySelector('.slider')
const images = document.querySelectorAll('.image')
const bottom = document.querySelector('.bottom')

let count = 1
const length = images.length

// RIGHT ARROW
const nextSlide = () => {
    slider.style.transform = `translateX(-${800 * count}px)`
    count++
    changeBg() 
}

const toStartSlide = () => {
    slider.style.transform = 'translateX(0px)'
    count = 1
    changeBg()
}

right.addEventListener('click', () => {
    count === length ? toStartSlide() : nextSlide()
})

// LEFT ARROW
const leftNextSlide = () => {
    count--
    slider.style.transform = `translateX(-${(800 * count) - 800}px)`
    changeBg()
}

const toLastSlide = () => {
    count = length
    slider.style.transform = `translateX(-${800 * (count - 1)}px)`
    changeBg()
}

left.addEventListener('click', () => {
    count > 1 ? leftNextSlide() : toLastSlide()
})

// BOTTOM BUTTONS
for(let i = 0; i < length; i++) {
    const div = document.createElement('div')
    div.className = 'button'
    bottom.appendChild(div)
}

const buttons = document.querySelectorAll('.button')
buttons[0].style.backgroundColor = 'white'


const resetBg = () => {
    buttons.forEach(button => {
        button.style.backgroundColor = 'transparent'
    })
}

const changeBg = () => {
    resetBg()
    buttons[count - 1].style.backgroundColor = 'white'
}

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        resetBg()
        button.style.backgroundColor = 'white'
        slider.style.transform = `translateX(-${800 * index}px)`
        count = index + 1
    })
})

