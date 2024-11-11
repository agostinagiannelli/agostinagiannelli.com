document.addEventListener("astro:page-load", () => {
    const form = document.getElementById("form");
    const result = document.getElementById("result");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        form.classList.add("was-validated");

        if (!form.checkValidity()) {
            form.querySelectorAll(":invalid")[0].focus();
            return;
        }

        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        result.classList.add("dark:text-white");
        result.innerHTML = "Sending message...";

        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    result.innerHTML = "Thanks for your message! I'll reply shortly.";
                } else {
                    console.error(response);
                    result.innerHTML = "Something went wrong. Please try again.";
                }
            })
            .catch((error) => {
                console.error(error);
                result.innerHTML = "Something went wrong. Please try again.";
            })
            .then(() => {
                form.reset();
                form.classList.remove("was-validated");
                setTimeout(() => {
                    result.innerHTML = "";
                }, 3000);
            });
    });
});