document.addEventListener('DOMContentLoaded', () => {
    // --- Main Hero Slider Logic ---
    const heroSliderWrapper = document.querySelector('.slider-wrapper');
    const heroSlides = document.querySelectorAll('.hero-slider .slide'); // More specific selector
    const heroPrevButton = document.querySelector('.prev-slide');
    const heroNextButton = document.querySelector('.next-slide');
    const heroDotsContainer = document.querySelector('.dots-container');

    let currentHeroSlide = 0;
    let heroSlideInterval;
    const heroSlideDuration = 5000; // 5 seconds for auto slide

    // Set widths for hero slider slides and wrapper to prevent empty space
    heroSliderWrapper.style.width = `${heroSlides.length * 100}%`;
    heroSlides.forEach(slide => {
        slide.style.width = `${100 / heroSlides.length}%`;
    });

    // Create dots for hero slider navigation
    heroSlides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => {
            clearInterval(heroSlideInterval);
            showHeroSlide(index);
            startAutoHeroSlide();
        });
        heroDotsContainer.appendChild(dot);
    });

    const heroDots = document.querySelectorAll('.hero-slider .dot'); // More specific selector

    function showHeroSlide(index) {
        if (index >= heroSlides.length) {
            currentHeroSlide = 0;
        } else if (index < 0) {
            currentHeroSlide = heroSlides.length - 1;
        } else {
            currentHeroSlide = index;
        }

        const offset = -currentHeroSlide * (100 / heroSlides.length);
        heroSliderWrapper.style.transition = 'transform 0.8s ease-in-out';
        heroSliderWrapper.style.transform = `translateX(${offset}%)`;

        // Update active dot
        heroDots.forEach(dot => dot.classList.remove('active'));
        heroDots[currentHeroSlide].classList.add('active');
    }

    function nextHeroSlide() {
        showHeroSlide(currentHeroSlide + 1);
    }

    function prevHeroSlide() {
        showHeroSlide(currentHeroSlide - 1);
    }

    function startAutoHeroSlide() {
        heroSlideInterval = setInterval(nextHeroSlide, heroSlideDuration);
    }

    // Event Listeners for hero slider buttons
    heroNextButton.addEventListener('click', () => {
        clearInterval(heroSlideInterval);
        nextHeroSlide();
        startAutoHeroSlide();
    });

    heroPrevButton.addEventListener('click', () => {
        clearInterval(heroSlideInterval);
        prevHeroSlide();
        startAutoHeroSlide();
    });

    showHeroSlide(currentHeroSlide);
    startAutoHeroSlide();



    // --- Designs Slider Logic ---
    const designsSliderWrapper = document.querySelector('.designs-slider-wrapper');
    const designSlides = document.querySelectorAll('.designs-slider-section .design-slide');
    const designsPrevButton = document.querySelector('.designs-prev-slide');
    const designsNextButton = document.querySelector('.designs-next-slide');
    const designsDotsContainer = document.querySelector('.designs-dots-container');

    let currentDesignSlide = 0;
    let designSlideInterval;
    const designSlideDuration = 7000;

    // Set widths for designs slider slides and wrapper to prevent empty space
    designsSliderWrapper.style.width = `${designSlides.length * 100}%`;
    designSlides.forEach(slide => {
        slide.style.width = `${100 / designSlides.length}%`;
    });

    designSlides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('design-dot');
        if (index === 0) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => {
            clearInterval(designSlideInterval);
            showDesignSlide(index);
            startAutoDesignSlide();
        });
        designsDotsContainer.appendChild(dot);
    });

    const designDots = document.querySelectorAll('.designs-slider-section .design-dot');

    function showDesignSlide(index) {
        if (index >= designSlides.length) {
            currentDesignSlide = 0;
        } else if (index < 0) {
            currentDesignSlide = designSlides.length - 1;
        } else {
            currentDesignSlide = index;
        }

        const offset = -currentDesignSlide * (100 / designSlides.length);
        designsSliderWrapper.style.transition = 'transform 0.6s ease-in-out';
        designsSliderWrapper.style.transform = `translateX(${offset}%)`;

        designDots.forEach(dot => dot.classList.remove('active'));
        designDots[currentDesignSlide].classList.add('active');
    }

    function nextDesignSlide() {
        showDesignSlide(currentDesignSlide + 1);
    }

    function prevDesignSlide() {
        showDesignSlide(currentDesignSlide - 1);
    }

    function startAutoDesignSlide() {
        designSlideInterval = setInterval(nextDesignSlide, designSlideDuration);
    }

    designsNextButton.addEventListener('click', () => {
        clearInterval(designSlideInterval);
        nextDesignSlide();
        startAutoDesignSlide();
    });

    designsPrevButton.addEventListener('click', () => {
        clearInterval(designSlideInterval);
        prevDesignSlide();
        startAutoDesignSlide();
    });

    showDesignSlide(currentDesignSlide);
    startAutoDesignSlide();
});
