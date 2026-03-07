document.addEventListener("astro:page-load", () => {
    const form = document.getElementById("form");
    const result = document.getElementById("result");

    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const password = document.getElementById("password").value;

        const res = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ password }),
        });

        if (res.ok) {
            window.location.href = "/portfolio";
        } else {
            result.classList.add("text-red-400");
            result.innerHTML = "Incorrect password. Please try again.";
        }
    });
});