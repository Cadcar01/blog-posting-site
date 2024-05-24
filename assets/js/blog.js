const backBtn = document.getElementById('backButton')
const blogContainer = document.getElementById('blogs')
const blogDiv = document.getElementById('blogPost')

backBtn.addEventListener('click', goBack)

function goBack() {
    window.location.href = './form.html'
}

const parsedBlog = JSON.parse(localStorage.getItem('localBlogs'))
console.log(parsedBlog[0])

for (let i=0; i<parsedBlog.length; i++) {
    const newEl = document.createElement('div')
    newEl.setAttribute('class', 'card')
    newEl.setAttribute('id', 'blogPost')
    blogContainer.appendChild(newEl)

    const titleEl = document.createElement('h2')
    const titleContent = document.createTextNode(parsedBlog[i].title)
    titleEl.appendChild(titleContent)
    newEl.appendChild(titleEl)
    
    const contentEl = document.createElement('p')
    const Content = document.createTextNode(parsedBlog[i].content)
    contentEl.appendChild(Content)
    newEl.appendChild(contentEl)
    
    const userEl = document.createElement('h3')
    const userContent = document.createTextNode(`post made by ${parsedBlog[i].title}`)
    userEl.appendChild(userContent)
    newEl.appendChild(userEl)
}
console.log(blogContainer)