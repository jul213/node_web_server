function createPost() {
    const postInput = document.getElementById('postInput');
    const postsContainer = document.getElementById('posts');
    
    if (postInput.value.trim() !== "") {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `<p>${postInput.value}</p>`;
        
        postsContainer.prepend(postElement);
        postInput.value = ""; // Clear the input field
    } else {
        alert("Por favor escribe algo para publicar.");
    }
}
