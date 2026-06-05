document.addEventListener('DOMContentLoaded', () => {
    const langOptions = document.querySelectorAll('.header_option');
    const translatableElements = document.querySelectorAll('[data-en][data-ru]');

    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Убираем активный класс у всех и добавляем кликнутому
            langOptions.forEach(opt => opt.classList.remove('header_option_active'));
            option.classList.add('header_option_active');

            const selectedLang = option.getAttribute('data-lang');

            // Меняем текст на выбранный язык
            translatableElements.forEach(elem => {
                const translation = elem.getAttribute(`data-${selectedLang}`);
                if (translation) {
                    elem.textContent = translation;
                }
            });
        });
    });
});


