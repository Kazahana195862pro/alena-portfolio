// 1. СМЕНА ЯЗЫКОВ (RU / ENG)
const langOptions = document.querySelectorAll('.header_option');
const translatableElements = document.querySelectorAll('[data-en]');

langOptions.forEach(option => {
    option.addEventListener('click', function() {
        if (this.classList.contains('header_option_active')) return;

        langOptions.forEach(opt => opt.classList.remove('header_option_active'));
        this.classList.add('header_option_active');

        const currentLang = this.getAttribute('data-lang');

        translatableElements.forEach(element => {
            // Используем innerHTML вместо textContent, чтобы сохранять теги <br>
            if (currentLang === 'ru') {
                element.innerHTML = element.getAttribute('data-ru');
            } else {
                element.innerHTML = element.getAttribute('data-en');
            }
        });
    });
});

// 2. АВТОМАТИЧЕСКАЯ ПОДСВЕТКА МЕНЮ ПРИ ПРОКРУТКЕ
const sections = document.querySelectorAll('header, section');
const navLinks = document.querySelectorAll('.navigation_link');

window.addEventListener('scroll', () => {
    let currentSectionId = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Проверяем, находится ли экран пользователя в области текущей секции
        if (window.scrollY >= sectionTop - 150) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('navigation_link_active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('navigation_link_active');
        }
    });
});

