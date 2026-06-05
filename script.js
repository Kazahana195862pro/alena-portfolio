// 1. ПЕРЕКЛЮЧЕНИЕ ССЫЛОК МЕНЮ
const navLinks = document.querySelectorAll('.navigation_link');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(item => item.classList.remove('navigation_link_active'));
        this.classList.add('navigation_link_active');
    });
});

// 2. СМЕНА ЯЗЫКОВ (RU / ENG)
const langOptions = document.querySelectorAll('.header_option');
const translatableElements = document.querySelectorAll('[data-en]');

langOptions.forEach(option => {
    option.addEventListener('click', function() {
        if (this.classList.contains('header_option_active')) return;

        langOptions.forEach(opt => opt.classList.remove('header_option_active'));
        this.classList.add('header_option_active');

        const currentLang = this.getAttribute('data-lang');

        translatableElements.forEach(element => {
            if (currentLang === 'ru') {
                element.textContent = element.getAttribute('data-ru');
            } else {
                element.textContent = element.getAttribute('data-en');
            }
        });
    });
});


