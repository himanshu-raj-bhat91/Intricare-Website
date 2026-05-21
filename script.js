/* =========================
   MOBILE SIDEBAR TOGGLE
========================= */

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const menuIcon = menuToggle.querySelector("i");

/* TOGGLE SIDEBAR */

menuToggle.addEventListener("click", (e) => {

    e.stopPropagation();

    sidebar.classList.toggle("active");

    /* CHANGE ICON */

    if (sidebar.classList.contains("active")) {

        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");

        document.body.style.overflow = "hidden";

    } else {

        closeSidebar();

    }

});

/* CLOSE FUNCTION */

function closeSidebar() {

    sidebar.classList.remove("active");

    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");

    document.body.style.overflow = "";

}

/* CLOSE SIDEBAR WHEN CLICK OUTSIDE */

document.addEventListener("click", (e) => {

    if (
        window.innerWidth <= 768 &&
        !sidebar.contains(e.target) &&
        !menuToggle.contains(e.target)
    ) {

        closeSidebar();

    }

});

/* RESET ON DESKTOP */

window.addEventListener("resize", () => {

    if (window.innerWidth > 768) {

        closeSidebar();

    }

});