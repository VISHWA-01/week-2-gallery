// Get all the grid items
const gridItems = document.querySelectorAll('.grid-item');

// Get the lightbox and close button
const lightbox = document.getElementById('lightbox');
const closeLightbox = document.getElementById('close-lightbox');

// Get the lightbox image
const lightboxImage = document.getElementById('lightbox-image');

// Add a click event listener to each grid item
gridItems.forEach(item => {
    item.addEventListener('click', () => {
        // Display the clicked image in the lightbox
        lightboxImage.src = item.querySelector('img').src;
        lightbox.style.display = 'block';
    });
});

// Close the lightbox when the close button is clicked
closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close the lightbox when the user clicks outside of it
window.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
