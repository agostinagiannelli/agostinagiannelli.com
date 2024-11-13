document.addEventListener("astro:page-load", () => {
    function hideCases(evt) {
        const selectedCategory = evt.currentTarget.getAttribute("data-type");

        const allCases = document.querySelectorAll(".case");
        allCases.forEach((element) => {
            element.style.display = "block";
        });

        if (selectedCategory !== "All") {
            const filteredCases = document.querySelectorAll(`.case:not(.${selectedCategory})`);
            filteredCases.forEach((element) => {
                element.style.display = "none";
            });
        }

        sessionStorage.setItem("selectedCategory", selectedCategory);
    }

    const selectedCategory = sessionStorage.getItem("selectedCategory");
    if (selectedCategory) {
        const buttons = document.querySelectorAll(".category-button");
        buttons.forEach((button) => {
            if (button.getAttribute("data-type") === selectedCategory) {
                button.classList.add("active");
            }
        });

        const allCases = document.querySelectorAll(".case");
        allCases.forEach((element) => {
            element.style.display = "block";
        });

        if (selectedCategory !== "All") {
            const filteredCases = document.querySelectorAll(`.case:not(.${selectedCategory})`);
            filteredCases.forEach((element) => {
                element.style.display = "none";
            });
        }
    }

    const buttons = document.querySelectorAll(".category-button");
    buttons.forEach((button) => {
        button.addEventListener("click", hideCases);
    });
});
