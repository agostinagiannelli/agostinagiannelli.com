document.addEventListener("astro:page-load", () => {
    const form = document.getElementById("form");
    const result = document.getElementById("result");

    form.addEventListener("submit", async function (e) {
        e.preventDefault();
        form.classList.add("was-validated");

        if (!form.checkValidity()) {
            form.querySelectorAll(":invalid")[0].focus();
            return;
        }

        const password = document.getElementById("password").value;

        if (password === "hello") {
            sessionStorage.setItem("authorized", "true");
            window.location.href = "/portfolio";
        } else {
            result.classList.add("text-red-400");
            result.innerHTML = "Incorrect password. Please try again.";
        }

        setTimeout(() => {
            form.reset();
            form.classList.remove("was-validated");
            result.innerHTML = "";
        }, 3000);
    });
});
