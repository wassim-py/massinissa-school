let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
}

document.addEventListener("DOMContentLoaded", function() {
    const loadMoreBtn = document.querySelector('.btn-load');
    const hiddenImages = document.querySelectorAll('.gallery-container .box:nth-child(n+4)');
    
    loadMoreBtn.addEventListener('click', function(event) {
        event.preventDefault();  // Prevent default action of the anchor tag
        hiddenImages.forEach(function(image) {
            image.style.display = 'inline-block';
        });
        loadMoreBtn.style.display = 'none';  // Hide the load more button after clicking
    });
});

window.onscroll = () =>{
    navbar.classList.remove('active');
}