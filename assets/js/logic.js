const userEl = document.getElementById('username')
const titleEl = document.getElementById('blogTitle')
const contentEl = document.getElementById('blogContent')
const themeSwitch = document.getElementById('themeSwitcher')

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

function localStorageConversion() {
    const blog = {
        user: userEl.value,
        title: titleEl.value,
        content: contentEl.value
    }

    const blogArray = JSON.parse(localStorage.getItem('localBlogs')) || []
    blogArray.push(blog)
    localStorage.setItem('localBlogs', JSON.stringify(blogArray))
}
