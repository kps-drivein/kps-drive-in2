

document.querySelectorAll('.poster').forEach(poster => {
    poster.addEventListener('click', function () {
        const movie = this.parentElement; // Get the parent container
        movie.classList.toggle('open');  // Toggle the "open" class
    });
});
