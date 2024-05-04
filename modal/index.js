document.addEventListener("DOMContentLoaded", function() {
    const modalBtn = document.querySelector(".modal-btn");
    const modalOverlay = document.querySelector(".modal-overlay");
    const closeBtn = document.querySelector(".close");

    // Function to open the modal
    const openModal = () => {
        modalOverlay.style.display = "block";
    };

    // Function to close the modal
    const closeModal = () => {
        modalOverlay.style.display = "none";
    };

    // Event listener for modal button click
    modalBtn.addEventListener("click", openModal);

    // Event listener for close button click
    closeBtn.addEventListener("click", closeModal);

    // Event listener for clicking outside the modal to close it
    window.addEventListener("click", function(event) {
        if (event.target === modalOverlay) {
            closeModal();
        }
    });
});



