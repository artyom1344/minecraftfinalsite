document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const slideInfo = document.getElementById('slide-info');
    const totalSlides = slides.length;
  
    // Функция для обновления слайда
    function updateSlide() {
      const offset = -currentIndex * 100;
      document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
      slideInfo.textContent = `${currentIndex + 1} слайд из ${totalSlides}`;
    }
  
    // Переход на следующий слайд
    document.querySelector('.next').addEventListener('click', function() {
      if (currentIndex < totalSlides - 1) {
        currentIndex++;
        updateSlide();
      }
    });
  
    // Переход на предыдущий слайд
    document.querySelector('.prev').addEventListener('click', function() {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlide();
      }
    });
  
    // Инициализация первого слайда
    updateSlide();
  });