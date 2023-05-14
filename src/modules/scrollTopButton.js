const debounce = (fn, msec) => {
    let lastCall = 0;
    let lastCallTimer = 0;

    return (...arg) => {
        const prevCall = lastCall;
        lastCall = Date.now();

        if (prevCall && (lastCall - prevCall) < msec) {
            clearTimeout(lastCallTimer);
        }

        lastCallTimer = setTimeout(() => fn(...arg), msec);
    }
};

const createArrow = (className = 'arrow-up') => {
    const button = document.createElement('button');

    button.innerHTML = `
        <svg class="${className}__svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.99998 2.94992C8.08887 2.94992 8.17221 2.9637 8.24998 2.99125C8.32776 3.01881 8.39998 3.06614 8.46665 3.13325L12.8667 7.53325C13 7.66659 13.0667 7.82481 13.0667 8.00792C13.0667 8.19103 13 8.34947 12.8667 8.48325C12.7333 8.61659 12.5778 8.68325 12.4 8.68325C12.2222 8.68325 12.0667 8.61659 11.9333 8.48325L8.66665 5.21659V12.6833C8.66665 12.8721 8.60265 13.0277 8.47465 13.1499C8.34665 13.2721 8.18843 13.3333 7.99998 13.3333C7.8111 13.3333 7.65265 13.2693 7.52465 13.1413C7.39665 13.0133 7.33287 12.855 7.33332 12.6666V5.21659L4.06665 8.48325C3.93332 8.61659 3.77776 8.68325 3.59998 8.68325C3.42221 8.68325 3.26665 8.61659 3.13332 8.48325C2.99998 8.34992 2.93332 8.19147 2.93332 8.00792C2.93332 7.82436 2.99998 7.66614 3.13332 7.53325L7.53332 3.13325C7.59998 3.06659 7.67221 3.01925 7.74998 2.99125C7.82776 2.96325 7.9111 2.94947 7.99998 2.94992Z" />
        </svg>
    `;

    button.classList.add(className);

    const style = document.createElement('style');

    style.textContent = `
        .${className} {
            position: fixed;
            justify-content: center;
            align-items: center;
            z-index: 999;
            bottom: 30px;
            right: 30px;
            cursor: pointer;
            padding: 0;
            border: none;
            background-color: #ffffff;
            box-shadow: 0px 4px 4px rgba(49, 33, 1, 0.15);
            border-radius: 50%;
            width: 50px;
            height: 50px;
            display: none;
            color: #000000;
            transition: color .3s ease-in-out, background-color .3s ease-in-out;
        }
        .${className}:hover {
            background-color: #000000;
            color: #ffffff;
        }
    `;

    document?.head.prepend(style);

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    });

    return button;
}

export const initScrollTopButton = (className) => {
    const arrow = createArrow(className);

    document?.body.append(arrow);
   
    const showElemScrollPosition = () => {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;

        arrow.style.display = (scrollPosition > window.innerHeight / 2) ? 'flex' : 'none';    
    }

    window.addEventListener('scroll', debounce(showElemScrollPosition, 100));
}