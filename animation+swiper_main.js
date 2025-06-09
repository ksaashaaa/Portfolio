  /* Анимация при прокрутке */
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.fade-in:not(.swiper-slide .fade-in)');
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.setProperty('--delay', `${index * 300}ms`);
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  elements.forEach(el => observer.observe(el));

  /* Swiper главная страница */
  const swiper = new Swiper('.main_swiper .swiper', {
    loop: true,
    autoHeight: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
    slidesPerView: 1,
    centeredSlides: true,
    grabCursor: true,
    on: {
      init: function () {
        const activeSlide = this.slides[this.activeIndex];
        activeSlide.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
      },
      slideChangeTransitionStart: function () {
        document.querySelectorAll('.swiper-slide .fade-in').forEach(el => el.classList.remove('visible'));
        const activeSlide = this.slides[this.activeIndex];
        activeSlide.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
      }
    }
  });
});

/*Мобильное меню */
const toggleButton = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

toggleButton.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show');
  });
});
