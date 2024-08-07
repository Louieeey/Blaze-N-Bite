document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slider'); // Selecting the slider container
    const manualNavButtons = document.querySelectorAll('.manual-btn'); // Selecting all manual navigation buttons
    

    let counter = 0; // Initializing counter for slide index

    // Function to navigate to a specific slide
    function goToSlide(index) {
        counter = index; // Setting the counter to the provided index
        slides.style.transform = `translateX(${-counter * 100}%)`; // Moving the slider to the specified slide
    }

    // Event listeners for manual navigation buttons
    manualNavButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            goToSlide(index); // Navigating to the slide corresponding to the button clicked
        });
    });

    // Function to navigate to the next slide
    function nextSlide() {
        counter++; // Incrementing the counter to move to the next slide
        if (counter === manualNavButtons.length) { // Resetting counter if it exceeds the number of slides
            counter = 0;
        }
        goToSlide(counter); // Navigating to the next slide
    }

    // Automatic slide navigation
    setInterval(nextSlide, 5000); // Setting interval to automatically transition to the next slide every 5 seconds
});

// modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
            modals[i].style.display = "none";
        }
    }
}
