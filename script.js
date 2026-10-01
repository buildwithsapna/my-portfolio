// ================= NAVBAR AUTO CLOSE =================

const navLinks = document.querySelectorAll(".nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        if (navbarCollapse.classList.contains("show")) {

            const bsCollapse =
                bootstrap.Collapse.getInstance(navbarCollapse);

            if (bsCollapse) {
                bsCollapse.hide();
            }

        }

    });

});


// ================= SCROLL ANIMATION =================

const animatedElements =
    document.querySelectorAll(
        ".skill-card, .hobby-card, .project-card, .profile-card"
    );


const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.1
    }
);


animatedElements.forEach(function(element) {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "all 0.6s ease";

    observer.observe(element);

});