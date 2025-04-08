document.addEventListener("DOMContentLoaded", () => {
    // Agrega desplazamiento suave a los enlaces de navegación
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            const sectionId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(sectionId);

            if (targetSection) {
                event.preventDefault();
                targetSection.scrollIntoView({ behavior: "smooth" });
            } else {
                console.warn(`No se encontró la sección con ID: ${sectionId}, redirigiendo...`);
            }
        });
    });

    // Configuración del carrusel
    
    const images = document.querySelectorAll(".carousel img");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let currentIndex = 0;

    function showImage(index) {
        images.forEach(img => img.style.display = "none");
        images[index].style.display = "block";
    }

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }, 4000); // Cambio cada 4 segundos

    showImage(currentIndex);
});

    const videos = document.querySelectorAll(".video-card video");
    const fullscreenButtons = document.querySelectorAll(".fullscreen-btn");

    videos.forEach((video, index) => {
        video.addEventListener("mouseenter", () => {
            video.play();
        });

        video.addEventListener("mouseleave", () => {
            video.pause();
            video.currentTime = 0;
        });

        // Opción: click directo en video (opcional, puedes quitarlo si usas solo el botón)
        video.addEventListener("click", () => {
            openFullscreen(video);
        });

        fullscreenButtons[index].addEventListener("click", () => {
            openFullscreen(video);
        });
    });

    function openFullscreen(element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    };

        const reserveButtons = document.querySelectorAll(".reserve-btn");
        const modal = document.getElementById("reservation-modal");
        const trainingTitle = document.getElementById("training-title");
        const closeBtn = document.querySelector(".close-btn");
    
        reserveButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                const training = btn.getAttribute("data-training");
                trainingTitle.textContent = `Estás reservando: ${training}`;
                modal.style.display = "block";
            });
        });
    
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    
        window.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    
