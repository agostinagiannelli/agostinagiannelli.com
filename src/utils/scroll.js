document.addEventListener("astro:page-load", () => {
    document.addEventListener("astro:before-swap", () => {
        if (window.location.pathname.includes("case-studies")) {
            const scroll = window.scrollY;
            if (scroll > 0) {
                sessionStorage.setItem("position", scroll.toString());
            }
        }
    });

    document.addEventListener("astro:after-swap", () => {
        if (window.location.pathname.includes("case-studies")) {
            const position = sessionStorage.getItem("position");
            if (position !== null) {
                setTimeout(() => {
                    window.scrollTo(0, parseInt(position, 10));
                    sessionStorage.removeItem("position");
                }, 50);
            }
        }
    });
});
