document.addEventListener("astro:page-load", () => {
    function hideCases(evt) {
        const selectedCategory = evt.currentTarget.getAttribute("data-type");

        const allCases = document.querySelectorAll(".case");
        allCases.forEach((element) => {
            element.style.display = "block";
        });

        if (selectedCategory !== "all") {
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