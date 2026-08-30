document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    if (!hamburger) return;


    const openBtn = document.querySelector('.mobile-only .header .header__button--circle img[src*="icon-hamburger"]')?.closest('a');

    const closeBtn = document.querySelector('.hamburger .header__button--circle img[src*="icon-close"]')?.closest('a');

    if (openBtn) {
        openBtn.addEventListener('click', function (e) {
            e.preventDefault();
            hamburger.classList.add('hamburger--active');
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function (e) {
            e.preventDefault();
            hamburger.classList.remove('hamburger--active');
        });
    }
});