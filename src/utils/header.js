document.addEventListener("astro:page-load", () => {
    const items = document.querySelectorAll("header nav a");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                items.forEach((item) => {
                    const isActive = item.getAttribute("aria-label") === entry.target.id;
                    item.classList.toggle("text-purple-400", isActive);
                    item.classList.toggle("dark:text-purple-200", isActive);
                });
            });
        },
        { threshold: 0.3 }
    );

    document.querySelectorAll("section").forEach((section) => observer.observe(section));
});