const getThemePreference = () => localStorage.getItem("theme") || "auto";

const applyTheme = () => {
    const theme = getThemePreference();
    const isDark =
        theme === "dark" ||
        (theme === "auto" &&
            window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", isDark);
    document.querySelectorAll(".theme-toggle-icon").forEach((icon) => {
        icon.style.scale = icon.id === theme ? "1" : "0";
    });
};

const toggleMenu = () => {
    const themesMenu = document.getElementById("themes-menu");
    themesMenu.classList.toggle("open");
};

document.addEventListener("astro:page-load", () => {
    applyTheme();

    const toggleBtn = document.getElementById("theme-toggle-btn");
    const themesMenu = document.getElementById("themes-menu");

    document.addEventListener("click", (e) => {
        if (!themesMenu.contains(e.target) && e.target !== toggleBtn) {
            themesMenu.classList.remove("open");
        }
    });

    toggleBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    document.querySelectorAll(".themes-menu-option").forEach((option) => {
        option.addEventListener("click", (e) => {
            const selectedTheme = e.target.innerText.toLowerCase().trim();
            localStorage.setItem("theme", selectedTheme);
            applyTheme();
            themesMenu.classList.remove("open");
        });
    });

    window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", applyTheme);
});