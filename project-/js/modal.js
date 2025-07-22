// Get DOM elements
const cartBtn = document.querySelector('.fa-shopping-cart'); // Target the Cart icon in the navigation
const cartModal = document.getElementById('cartModal'); // Cart modal
const closeCartModalBtn = document.getElementById('closeCartModalBtn'); // Close cart modal button

const requestDishBtn = document.querySelector('.request-dish-btn'); // Request Dish button
const requestDishModal = document.getElementById('requestDishModal'); // Request Dish modal
const body = document.body;

// Utility function to toggle modals
function showModal(modal) {
    modal.classList.add('visible');
    body.classList.add('no-scroll'); // Disable background scroll
}

function closeModal(modal) {
    modal.classList.remove('visible');
    body.classList.remove('no-scroll'); // Re-enable scrolling
}

// Cart modal events
cartBtn.addEventListener('click', () => showModal(cartModal));
closeCartModalBtn.addEventListener('click', () => closeModal(cartModal));

cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        closeModal(cartModal);
    }
});

// Request Dish modal events
requestDishBtn.addEventListener('click', () => showModal(requestDishModal));

requestDishModal.addEventListener('click', (e) => {
    if (e.target === requestDishModal) {
        closeModal(requestDishModal);
    }
});

requestDishModal.querySelector('.cancel-btn').addEventListener('click', () => {
    closeModal(requestDishModal);
});

// Form submission (optional alert)
requestDishModal.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Dish request submitted successfully!');
    e.target.reset(); // Reset the form
    closeModal(requestDishModal); // Close the modal
});
