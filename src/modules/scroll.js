import smoothscroll from 'smoothscroll-polyfill';
export const scrollBy = () => {
    const topMenu = document.querySelector('.top-menu');
    const upArrow = document.querySelector('.up');

    const scrollTo = () => {
        if (window.scrollY > 400) {
            upArrow.style.opacity = 1;
        } else {
            upArrow.style.opacity = 0;
        }
    };
    const scrollUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    };


    topMenu.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target.closest('a')) {
            smoothscroll.polyfill();
            document.getElementById(e.target.hash.slice(1)).scrollIntoView({ behavior: "smooth" })
        }

    })

    window.addEventListener('scroll', scrollTo);
    upArrow.addEventListener('click', scrollUp);

};