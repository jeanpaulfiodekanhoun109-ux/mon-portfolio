
// =====================================
// 1. PETIT MESSAGE DE BIENVENUE
// =====================================

const boutonMessage = document.getElementById("message-btn");
const zoneMessage = document.getElementById("message");

if (boutonMessage && zoneMessage) {
    boutonMessage.addEventListener("click", function () {
        zoneMessage.textContent =
            "Merci de visiter mon portfolio ! 😊";
    });
}


// =====================================
// 2. MODE CLAIR / MODE SOMBRE
// =====================================

const boutonTheme = document.getElementById("theme-toggle");
const corpsPage = document.body;

// Le mode clair est activé par défaut
let themeSombre = localStorage.getItem("theme-portfolio") === "sombre";

// Appliquer le thème
function actualiserTheme() {

    corpsPage.classList.toggle("theme-sombre", themeSombre);

    boutonTheme.textContent = themeSombre
        ? "☀️ Mode clair"
        : "🌙 Mode sombre";

    boutonTheme.setAttribute(
        "aria-label",
        themeSombre ? "Activer le mode clair" : "Activer le mode sombre"
    );
}

// Appliquer le thème au chargement
if (boutonTheme) {
    actualiserTheme();

    // Changer de thème au clic
    boutonTheme.addEventListener("click", function () {

        themeSombre = !themeSombre;

        localStorage.setItem(
            "theme-portfolio",
            themeSombre ? "sombre" : "clair"
        );

        actualiserTheme();
    });
}
