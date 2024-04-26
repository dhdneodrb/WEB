 let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const slideCount = slides.length;
 
        function showSlide(n) {
            slides.forEach(slide => slide.style.display = 'none');
            slides[n].style.display = 'block';
        }
 
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slideCount;
            showSlide(currentSlide);
        }
 
        function prevSlide() {
            currentSlide = (currentSlide - 1 + slideCount) % slideCount;
            showSlide(currentSlide);
        }
 
        document.addEventListener('DOMContentLoaded', () => {
            showSlide(currentSlide);
            setInterval(nextSlide, 3000); // 3초마다 자동 슬라이드
        });
        
        let currentSlide2 = 0;
        const slides2 = document.querySelectorAll('.slide2');
        const slideCount2 = slides2.length;

        function showSlide2(n) {
            slides2.forEach(slide => slide.style.display = 'none');
            slides2[n].style.display = 'block';
        }

        function nextSlide2() {
            currentSlide2 = (currentSlide2 + 1) % slideCount2;
            showSlide2(currentSlide2);
        }

        function prevSlide2() {
            currentSlide2 = (currentSlide2 - 1 + slideCount2) % slideCount2;
            showSlide2(currentSlide2);
        }

        document.addEventListener('DOMContentLoaded', () => {
            showSlide2(currentSlide2);
            setInterval(nextSlide2, 3000); // 3초마다 자동 슬라이드
        });
        
        let currentSlide3 = 0;
        const slides3 = document.querySelectorAll('.slide3');
        const slideCount3 = slides3.length;

        function showSlide3(n) {
            slides3.forEach(slide => slide.style.display = 'none');
            slides3[n].style.display = 'block';
        }

        function nextSlide3() {
            currentSlide3 = (currentSlide3 + 1) % slideCount3;
            showSlide3(currentSlide3);
        }

        function prevSlide3() {
            currentSlide3 = (currentSlide3 - 1 + slideCount3) % slideCount3;
            showSlide3(currentSlide3);
        }

        document.addEventListener('DOMContentLoaded', () => {
            showSlide3(currentSlide3);
            setInterval(nextSlide3, 3000); // 3초마다 자동 슬라이드
        });
        
         function zoomIn(element) {
        element.style.transform = "scale(1.1)";
        element.style.transition = "transform 0.3s ease";
   	 }

    function zoomOut(element) {
        element.style.transform = "scale(1)";
        element.style.transition = "transform 0.3s ease";
   	 }
        
        
      