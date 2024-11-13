document.addEventListener("astro:page-load", () => {
    function hideInitiatives(evt) {
        const category = evt.currentTarget.getAttribute("data-type");

        const all = document.querySelectorAll(".portfolio");
        all.forEach((element) => {
            element.style.display = "block";
        });

        if (category !== "All") {
            const filtered = document.querySelectorAll(`.portfolio:not(.${category})`);
            filtered.forEach((element) => {
                element.style.display = "none";
            });
        }

        sessionStorage.setItem("category", category);
    }

    const category = sessionStorage.getItem("category");
    if (category) {
        const buttons = document.querySelectorAll(".category-button");
        buttons.forEach((button) => {
            if (button.getAttribute("data-type") === category) {
                button.classList.add("active");
            }
        });

        const all = document.querySelectorAll(".portfolio");
        all.forEach((element) => {
            element.style.display = "block";
        });

        if (category !== "All") {
            const filtered = document.querySelectorAll(`.portfolio:not(.${category})`);
            filtered.forEach((element) => {
                element.style.display = "none";
            });
        }
    }

    const buttons = document.querySelectorAll(".category-button");
    buttons.forEach((button) => {
        button.addEventListener("click", hideInitiatives);
    });
});
