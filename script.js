// Mode Sombre/Clair
const themeToggle = document.getElementById('theme-toggle');
let isDarkMode = false;

themeToggle.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark-mode');

  // Changer l'icône selon le mode
  if (isDarkMode) {
    themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>'; // Icône pour le mode clair
  } else {
    themeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>'; // Icône pour le mode sombre
  }
});

// Menu déroulant pour petits écrans
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('#nav-links li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    // Fermer le menu déroulant après clic sur un lien
    navLinks.classList.remove('active');

    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

// Scroll Reveal Animation
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('section').forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
  });
});

// Formulaire de Contact
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Validation des champs
  const name = this.querySelector('input[type="text"]').value.trim();
  const email = this.querySelector('input[type="email"]').value.trim();
  const message = this.querySelector('textarea').value.trim();

  if (!name || !email || !message) {
    alert('Veuillez remplir tous les champs.');
    return;
  }

  // Vérification du format de l'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Veuillez entrer une adresse email valide.');
    return;
  }

  // Simulation d'envoi avec un loader
  const button = this.querySelector('button');
  button.textContent = 'Envoi en cours...';

  setTimeout(() => {
    alert(`Merci ${name} ! Votre message a été envoyé avec succès.`);
    this.reset();
    button.textContent = 'Envoyer';
  }, 2000);
});

// Sélectionnez les éléments nécessaires
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Vérifiez si un mode est déjà défini dans le localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  body.classList.add('dark-mode');
}

// Ajoutez un écouteur d'événements au bouton
toggleButton.addEventListener('click', () => {
  // Basculez la classe 'dark-mode' sur le body
  body.classList.toggle('dark-mode');

  // Sauvegardez l'état actuel dans le localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});