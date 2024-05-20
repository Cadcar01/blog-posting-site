const userEl = document.getElementById('username')
const titleEl = document.getElementById('blogTitle')
const contentEl = document.getElementById('blogContent')
const submitButton = document.getElementById('submit')

submitButton.addEventListener('click', function() {
if (userEl.value === '' || titleEl.value === '' || contentEl.value === '') {
    alert('all fields must be filled')
} else {
    window.location.href = './blog.html'
}
})