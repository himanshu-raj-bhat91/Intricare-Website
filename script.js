/* =========================
   MOBILE SIDEBAR TOGGLE
========================= */

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const menuIcon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {

    sidebar.classList.toggle("active");

    /* CHANGE ICON */

    if (sidebar.classList.contains("active")) {

        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");

        document.body.style.overflow = "hidden";

    } else {

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

        document.body.style.overflow = "";

    }

});

/* RESET ON DESKTOP */

window.addEventListener("resize", () => {

    if (window.innerWidth > 768) {

        sidebar.classList.remove("active");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

        document.body.style.overflow = "";

    }

});
        /* =========================
   WORKFLOW MODAL
========================= */

        const campaignBtn = document.querySelector(".campaign-btn");
        const workflowModal = document.getElementById("workflowModal");
        const closeModal = document.getElementById("closeModal");
        const secondaryCloseBtn = document.querySelector(".secondary-btn");

        /* OPEN MODAL */

        campaignBtn.addEventListener("click", () => {

            workflowModal.classList.add("active");
            document.body.style.overflow = "hidden";

        });

        /* CLOSE MODAL */

        function closeWorkflowModal() {

            workflowModal.classList.remove("active");
            document.body.style.overflow = "";

        }

        closeModal.addEventListener("click", closeWorkflowModal);

        secondaryCloseBtn.addEventListener("click", closeWorkflowModal);

        /* CLOSE OUTSIDE */

        workflowModal.addEventListener("click", (e) => {

            if (e.target === workflowModal) {
                closeWorkflowModal();
            }

        });

        /* =========================
           WORKFLOW CARD SELECT
        ========================= */

        const workflowCards = document.querySelectorAll(".workflow-card");

        workflowCards.forEach(card => {

            card.addEventListener("click", () => {

                workflowCards.forEach(c => {
                    c.classList.remove("active-workflow");

                    const radio = c.querySelector(".radio");
                    radio.classList.remove("active-radio");
                });

                card.classList.add("active-workflow");

                const activeRadio = card.querySelector(".radio");
                activeRadio.classList.add("active-radio");

            });

        });