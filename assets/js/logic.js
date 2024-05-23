const userEl = document.getElementById('username')
const titleEl = document.getElementById('blogTitle')
const contentEl = document.getElementById('blogContent')

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

