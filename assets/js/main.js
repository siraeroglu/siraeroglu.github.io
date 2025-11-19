document.addEventListener("DOMContentLoaded", () => {
    // yıl
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // butonlar
    const buttons = document.querySelectorAll(".lang-switch button");
    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const lang = btn.dataset.lang;
            if (window.setLanguage) {
                window.setLanguage(lang);
            }
        });
    });

    const savedLang = localStorage.getItem("siteLang") || "en";
    if (window.setLanguage) {
        window.setLanguage(savedLang);
    }
});
