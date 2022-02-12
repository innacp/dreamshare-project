const body = document.querySelector("body")
const button = document.querySelector(".dark-btn")

button.addEventListener('click', () => {
    body.classList.toggle('dark-mode')
})


