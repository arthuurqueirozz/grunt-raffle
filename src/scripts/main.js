document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('draw-form').addEventListener('submit', () => {
        let maxNumber = parseInt(document.getElementById('max-number'))

        let randomNumber = Math.random() * maxNumber
        console.log(randomNumber)
    })
})