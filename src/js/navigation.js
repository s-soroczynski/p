(function(){
    const hamburgerWrapper = document.getElementById("hamburger-wrapper");
    const navigationWrapper = document.getElementById("navigation-wrapper");
    const navigationClassName = 'menu-open';

    hamburgerWrapper.addEventListener('click', (e) => {
        e.preventDefault();

        navigationWrapper.classList.toggle(navigationClassName);
    });
}());