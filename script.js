const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

function switchForm(hideForm, showForm) {
    hideForm.classList.add("hide-animation");

    setTimeout(() => {
        hideForm.classList.remove("active", "hide-animation");

        showForm.classList.add("active", "show-animation");

        setTimeout(() => {
            showForm.classList.remove("show-animation");
        }, 500);

    }, 300);
}

document.getElementById("showSignup").addEventListener("click", () => {
    switchForm(loginForm, signupForm);
});

document.getElementById("showLogin").addEventListener("click", () => {
    switchForm(signupForm, loginForm);
});

/* Password Toggle */
document.querySelectorAll(".toggle").forEach(icon => {
    icon.onclick = () => {
        const input = icon.previousElementSibling;

        if (input.type === "password") {
            input.type = "text";
            icon.classList.replace("fa-eye", "fa-eye-slash");
        } else {
            input.type = "password";
            icon.classList.replace("fa-eye-slash", "fa-eye");
        }
    };
});

/* Button Click Animation */
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.add("clicked");

        setTimeout(() => {
            btn.classList.remove("clicked");
        }, 300);
    });
});