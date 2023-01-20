const body = document.querySelector("body")
const button = document.querySelector(".dark-btn")

button.addEventListener('click', () => {
    body.classList.toggle('dark-mode')
    changeBtnText()
})

function changeBtnText() {
    const hasBodyDarkMode = body.classList.contains('dark-mode')
    if( hasBodyDarkMode ) {
        button.innerHTML = 'To Light Theme'
    } else {
        button.innerHTML = 'To Dark Theme'
    }
}

