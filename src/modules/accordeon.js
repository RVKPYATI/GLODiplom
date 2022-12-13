export const accordeon = () => {
    const accordeon = document.querySelector('.accordeon');

    accordeon.addEventListener('click', ({ target }) => {
        const content = target.parentNode.querySelector('.element-content');

        if (target.closest('.element.active')) {
            target.parentNode.classList.remove('active')
            content.style.display = 'none';
        } else {
            target.parentNode.classList.add('active')
            content.style.display = 'block'
        }

    })
};