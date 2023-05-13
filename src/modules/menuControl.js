import { gsap } from "gsap";

export const menuControl = () => {
    const navigationBtn = document.querySelector('.navigation__button');
    const navigationList = document.querySelector('.navigation__list');
    const navigationItems = document.querySelectorAll('.navigation__item');

    const timeLine = gsap.timeline({ paused: true });

    timeLine.fromTo(navigationList, 
        { opacity: 0, display: 'none' }, 
        { opacity: 1, display: 'block' }
    );

    navigationItems.forEach((elem, i) => {
        const x = i % 2 ? 500 : -500;
        timeLine.from(elem, { opacity: 0, x: x, duration: 1 }, '-=1')
    });

    const openMenu = () => {
        navigationBtn.classList.add('navigation__button_active');
        timeLine.play();
    }

    const closeMenu = () => {
        navigationBtn.classList.remove('navigation__button_active');
        timeLine.reverse();
    }

    

    
    navigationBtn.addEventListener('click', () => {
        if (navigationBtn.classList.contains('navigation__button_active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    const checkScreenSize = (e) => {
        if (e.matches) {
            gsap.set(navigationList, { opacity: 1, display: 'flex' });

            navigationItems.forEach((elem, i) => {
                gsap.set(elem, { opacity: 1, x: 0 });
            });
        } else {
            gsap.set(navigationList, { opacity: 0, display: 'none' });

            navigationItems.forEach((elem, i) => {
                const x = i % 2 ? 500 : -500;
                gsap.set(elem, { opacity: 0, x: x, duration: 1 });
            });
        }
        
    }

    const mediaGuery = window.matchMedia('(min-width: 1240px)');

    mediaGuery.addEventListener('change', checkScreenSize);
    checkScreenSize(mediaGuery);
}