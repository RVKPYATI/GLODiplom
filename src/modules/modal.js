import { animate } from './helpers';

export const modal = () => {

    const buttons = document.querySelectorAll('.callback-btn');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalCallback = document.querySelector('.modal-callback');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            modalCallback.style.display = 'block';
            modalOverlay.style.display = 'block';
            if (document.documentElement.clientWidth > 768) {
                animate({
                    duration: 300,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        modalCallback.style.left = progress * 50 + '%';
                    }
                });
            }
        });
    });

    document.addEventListener('click', ({ target }) => {
        if (target.closest('.modal-close') || target.closest('.modal-overlay')) {
            modalCallback.style.display = 'none';
            modalOverlay.style.display = 'none';
        }
    });



};

