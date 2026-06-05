document.addEventListener('DOMContentLoaded', () => {
    const langOptions = document.querySelectorAll('.header_option');
    const translatableElements = document.querySelectorAll('[data-en][data-ru]');

    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Убираем активный класс у всех переключателей и добавляем кликнутому
            langOptions.forEach(opt => opt.classList.remove('header_option_active'));
            option.classList.add('header_option_active');

            const selectedLang = option.getAttribute('data-lang');

            // Меняем текст на выбранный язык с поддержкой переносов строк <br>
            translatableElements.forEach(elem => {
                const translation = elem.getAttribute(`data-${selectedLang}`);
                if (translation) {
                    // innerHTML бережно обрабатывает тег <br>, который мы добавили в HTML
                    elem.innerHTML = translation; 
                }
            });
        });
    });
});



