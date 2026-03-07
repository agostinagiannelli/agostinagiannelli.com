document.addEventListener("astro:page-load", () => {
    const items = document.querySelectorAll(".portfolio");
    const buttons = document.querySelectorAll(".category-button");

    function filterItems(category) {
        items.forEach((item) => {
            if (category === "All" || item.classList.contains(category)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }

    function hideInitiatives(evt) {
        const category = evt.currentTarget.dataset.type;

        filterItems(category);

        sessionStorage.setItem("category", category);

        buttons.forEach((button) => button.classList.remove("active"));
        evt.currentTarget.classList.add("active");
    }

    const savedCategory = sessionStorage.getItem("category");

    if (savedCategory) {
        filterItems(savedCategory);

        buttons.forEach((button) => {
            if (button.dataset.type === savedCategory) {
                button.classList.add("active");
            }
        });
    }

    buttons.forEach((button) => {
        button.addEventListener("click", hideInitiatives);
    });
});