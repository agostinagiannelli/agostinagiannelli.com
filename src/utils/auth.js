document.addEventListener("astro:page-load", () => {
    const authorized = sessionStorage.getItem("authorized") === "true";
    const authorizedContent = document.getElementById("authorized");
    const unauthorizedContent = document.getElementById("unauthorized");

    if (authorized) {
        authorizedContent.classList.remove("hidden");
        unauthorizedContent.classList.add("hidden");
    } else {
        authorizedContent.classList.add("hidden");
        unauthorizedContent.classList.remove("hidden");
    }
});