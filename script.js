// GSAP Animations
gsap.from(".about-container", {x:-50, opacity:0, duration:1});
gsap.from(".glass", {y:30, opacity:0, duration:0.8, stagger:0.2});
gsap.from(".project", {y:20, opacity:0, duration:0.5, stagger:0.2});

// Bottom nav highlight
const navLinks = document.querySelectorAll(".bottom-nav li a");
navLinks.forEach(link => { if(link.href === window.location.href){ link.classList.add("active"); } });

// Portfolio modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const closeBtn = document.querySelector(".modal-close");

document.querySelectorAll(".project").forEach(project => {
  project.addEventListener("click", () => {
    modal.classList.add("active");
    modalImg.src = project.dataset.img;
    modalTitle.textContent = project.dataset.title;
    modalDesc.textContent = project.dataset.desc;
  });
});

closeBtn.addEventListener("click", () => { modal.classList.remove("active"); });
modal.addEventListener("click", e => { if(e.target === modal){ modal.classList.remove("active"); } });
