// Portfolio interactions: mobile menu and smooth in-page navigation.
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-button");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {
        menuButton.addEventListener("click", () => {
            const open = navLinks.classList.toggle("active");
            menuButton.setAttribute("aria-expanded", String(open));
            menuButton.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
            menuButton.textContent = open ? "×" : "☰";
        });
        navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Open navigation menu");
            menuButton.textContent = "☰";
        }));
    }

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", event => {
            const id = link.getAttribute("href");
            if (!id || id === "#") { event.preventDefault(); return; }
            const target = document.querySelector(id);
            if (target) {
                event.preventDefault();
                target.scrollIntoView({ behavior: "smooth", block: "start" });
                history.replaceState(null, "", id);
            }
        });
    });
});
