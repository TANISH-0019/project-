import { homeKitchenData } from './data.js';

const container = document.getElementById('home-kitchen-container');

// Create cards dynamically
let cardsHTML = '';
homeKitchenData.forEach((item, index) => {
    if (index > 1) {
        cardsHTML += `
            <div class="card">
                <img src="${item.url}" alt="${item.alt}" class="card-image">
                ${item.discount ? `<div class="discount-badge">${item.discount}</div>` : ''}
                <div class="card-content">
                    <h3 class="card-title">${item.title}</h3>
                    <p class="card-price">${item.price}</p>
                </div>
                <div class="card-details">
                    <div>
                        <span class="card-rating"><i class="fas fa-star"></i>4.7</span>
                        <span class="card-time">50-70 min</span>
                    </div>
                    <div>
                        <span class="card-add"><i class="fas fa-plus"></i></span>
                    </div>
                </div>
            </div>
        `;
    }
});

// Insert all cards at once
container.innerHTML = cardsHTML;

$(document).ready(function () {
    const carouselContainer = $('#home-kitchen-carousel');

    // Dynamically render carousel cards with the updated class name
    homeKitchenData.forEach((item, index) => {
        const cardHTML = `
            <div class="carousel-card">
                ${item.discount ? `<div class="carousel-discount-badge">${item.discount}</div>` : ''}
                <img src="${item.url}" alt="${item.alt}" class="carousel-card-image">
                <div class="carousel-card-content">
                    <h3 class="carousel-card-title">${item.title}</h3>
                    <p class="carousel-card-price">${item.price}</p>
                </div>
                <div class="carousel-card-details">
                    <div id="carousel-card-details-flex">
                        <span class="carousel-card-rating"><i class="fas fa-star"></i>4.7</span>
                        <span class="carousel-card-time">50-70 min</span>
                    </div>
                    <div id="carousel-card-add-width">
                        <span class="carousel-card-add"><i class="fas fa-plus"></i></span>
                    </div>
                </div>
            </div>
        `;
        if (index < 5) carouselContainer.append(cardHTML);
    });

    // Initialize Slick Carousel
    carouselContainer.slick({
        slidesToShow: 3, // Display 3 slides at a time
        slidesToScroll: 1, // Scroll one slide at a time
        arrows: false, // Disable default arrows
        dots: false, // Enable dots for navigation
        infinite: false, // Enable infinite scrolling
        accessibility: true, // Enable keyboard navigation
        responsive: [
            {
                breakpoint: 900, // For screen sizes below 768px
                settings: {
                    slidesToShow: 2, // Show 1 slide
                    slidesToScroll: 1, // Scroll one slide
                }
            },
            {
                breakpoint: 768, // For screen sizes below 768px
                settings: {
                    slidesToShow: 1, // Show 1 slide
                    slidesToScroll: 1, // Scroll one slide
                }
            }
        ]
    });

    // Custom previous button
    $('#prev-button').click(function () {
        carouselContainer.slick('slickPrev'); // Go to previous slide
    });

    // Custom next button
    $('#next-button').click(function () {
        carouselContainer.slick('slickNext'); // Go to next slide
    });

    // Add keyboard navigation functionality
    $(document).keydown(function (e) {
        if (e.key === "ArrowRight" || e.key === "ArrowDown") {
            // Right or Down arrow key, go to next slide
            carouselContainer.slick('slickNext');
        } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
            // Left or Up arrow key, go to previous slide
            carouselContainer.slick('slickPrev');
        }
    });
});
