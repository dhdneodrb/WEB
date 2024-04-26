    let currentSlide = 0;

    function showSlide(index) {
        const slider = document.querySelector('.slider');
        const slideWidth = document.querySelector('.slider-item').offsetWidth;
        slider.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % document.querySelectorAll('.slider-item').length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + document.querySelectorAll('.slider-item').length) % document.querySelectorAll('.slider-item').length;
        showSlide(currentSlide);
    }
    function goToSlide(index) {
        currentSlide = index;
        showSlide(currentSlide);
    }

    // 자동 슬라이딩 설정
    setInterval(nextSlide, 5000); // 5초마다 다음 슬라이드로 이동/