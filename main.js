
var typed = new Typed(".text", {
  strings: ["Forntend Developer", "Web Developer", " Web Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});
window.addEventListener("scroll", function () {
  const fills = document.querySelectorAll(".progress-fill");
  fills.forEach(fill => {
    const fillPosition = fill.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (fillPosition < screenHeight - 50) {
      const percent = fill.getAttribute("data-percent");
      fill.style.width = percent + "%";
    }
  });
});

window.addEventListener("scroll", function () {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach(card => {
    const cardPosition = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;
    if (cardPosition < screenPosition) {
      card.classList.add("visible");
    }
  });
});

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("formStatus");

  if (name === "" || email === "" || message === "") {
    status.style.color = "red";
    status.textContent = "⚠️ Please fill in all fields.";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    status.style.color = "red";
    status.textContent = "⚠️ Please enter a valid email.";
    return;
  }


  status.style.color = "green";
  status.textContent = "✅ Message sent successfully!";


  document.getElementById("contactForm").reset();
});

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
