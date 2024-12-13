   let lastScrollTop = 0; // A posição da rolagem da última vez
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        if (currentScroll > lastScrollTop) {
            // Rolou para baixo
            navbar.classList.add('navbar-hidden');
        } else {
            // Rolou para cima
            navbar.classList.remove('navbar-hidden');
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para evitar valores negativos
    });

    