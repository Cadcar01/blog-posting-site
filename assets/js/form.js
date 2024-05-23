const submitButton = document.getElementById('submit')

submitButton.addEventListener('click', function() {
if (userEl.value === '' || titleEl.value === '' || contentEl.value === '') {
    alert('all fields must be filled')
} else {
    
    localStorageConversion()
   window.location.href = './blog.html'
}
})
