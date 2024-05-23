const backBtn = document.getElementById('backButton')
const themeSwitch = document.getElementById('themeSwitcher')

backBtn.addEventListener('click', goBack)

function goBack() {
    window.location.href = './form.html'
}

let mode = 'light'
themeSwitch.addEventListener('click', function() {
    if (mode === 'light') {
        document.body.setAttribute('class', 'dark')
        themeSwitch.textContent = '🌑'
        mode = 'dark'
    } else {
        document.body.setAttribute('class', 'light')
        themeSwitch.textContent = '☀️'
        mode = 'light'
    }
})


const parsedBlog = JSON.parse(localStorage.getItem('localBlogs'))
console.log(parsedBlog)