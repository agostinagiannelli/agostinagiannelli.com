document.addEventListener("astro:page-load", () => {
    const authorized = sessionStorage.getItem("authorized") === "true";
    const authorizedDiv = document.getElementById("authorized");
    const unauthorizedDiv = document.getElementById("unauthorized");

    if (authorized) {
        authorizedDiv.classList.remove("hidden");
        unauthorizedDiv.classList.add("hidden");
    } else {
        authorizedDiv.classList.add("hidden");
        unauthorizedDiv.classList.remove("hidden");
    }
});