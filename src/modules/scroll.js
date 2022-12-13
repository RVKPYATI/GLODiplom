import smoothscroll from 'smoothscroll-polyfill';
export const scrollBy = () => {
    const topMenu = document.querySelector('.top-menu');

    topMenu.addEventListener('click', (e) => {
        e.preventDefault();

        if(e.target.closest('a')) {
            smoothscroll.polyfill();
            document.getElementById(e.target.hash.slice(1)).scrollIntoView({behavior: "smooth"})
        }
        
    })

};