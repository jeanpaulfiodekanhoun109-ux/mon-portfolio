
// =====================================
// 1. PETIT MESSAGE DE BIENVENUE
// =====================================

const boutonMessage = document.getElementById("message-btn");
const zoneMessage = document.getElementById("message");

if (boutonMessage && zoneMessage) {
    boutonMessage.addEventListener("click", function () {
        zoneMessage.textContent = "Merci de visiter mon portfolio ! 😊";
    });
}


// =====================================
// 2. MODE CLAIR / MODE SOMBRE
// =====================================

const boutonTheme = document.getElementById("theme-toggle");
let themeSombre = localStorage.getItem("theme-portfolio") === "sombre";

function actualiserTheme() {
    document.body.classList.toggle("theme-sombre", themeSombre);

    if (boutonTheme) {
        boutonTheme.textContent = themeSombre
            ? "☀️ Mode clair"
            : "🌙 Mode sombre";

        boutonTheme.setAttribute(
            "aria-label",
            themeSombre ? "Activer le mode clair" : "Activer le mode sombre"
        );
    }
}

actualiserTheme();

if (boutonTheme) {
    boutonTheme.addEventListener("click", function () {
        themeSombre = !themeSombre;

        localStorage.setItem(
            "theme-portfolio",
            themeSombre ? "sombre" : "clair"
        );

        actualiserTheme();
    });
}


// =====================================
// 3. MENU HAMBURGER
// =====================================

const menuBouton = document.getElementById("menu-toggle");
const menuLiens = document.getElementById("nav-links");

function fermerMenu() {
    if (!menuBouton || !menuLiens) return;

    menuLiens.classList.remove("menu-ouvert");
    menuBouton.textContent = "☰";
    menuBouton.setAttribute("aria-expanded", "false");
    menuBouton.setAttribute("aria-label", "Ouvrir le menu");
}

if (menuBouton && menuLiens) {
    menuBouton.addEventListener("click", function () {
        const ouvert = menuLiens.classList.toggle("menu-ouvert");

        menuBouton.textContent = ouvert ? "✕" : "☰";
        menuBouton.setAttribute("aria-expanded", String(ouvert));
        menuBouton.setAttribute(
            "aria-label",
            ouvert ? "Fermer le menu" : "Ouvrir le menu"
        );
    });
}


// =====================================
// 4. NAVIGATION ENTRE LES SECTIONS
// =====================================

const toutesLesSections = document.querySelectorAll("main > section");

function afficherSection(id) {
    let sectionTrouvee = false;

    toutesLesSections.forEach(function (section) {
        if (section.id === id) {
            section.classList.remove("section-cachee");
            section.classList.add("section-active");
            sectionTrouvee = true;
        } else {
            section.classList.remove("section-active");
            section.classList.add("section-cachee");
        }
    });

    if (sectionTrouvee) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return sectionTrouvee;
}


// Afficher la bonne section au démarrage
const sectionDemandee = window.location.hash.substring(1);

const sectionDepart = Array.from(toutesLesSections).some(function (section) {
    return section.id === sectionDemandee;
})
    ? sectionDemandee
    : "accueil";

afficherSection(sectionDepart);


// Gérer les clics sur les liens du menu et les autres liens internes
document.addEventListener("click", function (e) {
    const lien = e.target.closest('a[href^="#"]');

    if (!lien) return;

    const id = lien.getAttribute("href").substring(1);
    const destination = document.getElementById(id);

    if (!destination || !destination.matches("main > section")) {
        return;
    }

    e.preventDefault();

    if (afficherSection(id)) {
        history.pushState(null, "", "#" + id);
    }

    fermerMenu();
});


// Gérer précédent et suivant dans le navigateur
window.addEventListener("popstate", function () {
    const id = window.location.hash.substring(1) || "accueil";

    if (!afficherSection(id)) {
        afficherSection("accueil");
    }
});


// =====================================
// 5. PIED DE PAGE
// =====================================

const zoneFooter = document.getElementById("zone-footer");
const boutonFooter = document.getElementById("footer-toggle");
const boutonRetour = document.getElementById("retour-section");

if (zoneFooter && boutonFooter && boutonRetour) {

    boutonFooter.addEventListener("click", function () {
        zoneFooter.classList.add("footer-visible");
        boutonFooter.style.display = "none";

        zoneFooter.scrollIntoView({
            behavior: "smooth",
            block: "end"
        });
    });

    boutonRetour.addEventListener("click", function () {
        zoneFooter.classList.remove("footer-visible");
        boutonFooter.style.display = "inline-block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
