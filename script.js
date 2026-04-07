// ===== MOBILE NAVIGATION =====
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close nav when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ===== NAVBAR SCROLL SHADOW =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)';
  } else {
    navbar.style.boxShadow = '0 2px 12px rgba(0,0,0,0.25)';
  }
});

// ===== SCROLL REVEAL =====
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
const successMsg  = document.getElementById('formSuccess');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Build a mailto link with the form contents
    const name    = document.getElementById('fname').value;
    const email   = document.getElementById('femail').value;
    const phone   = document.getElementById('fphone').value;
    const service = document.getElementById('fservice').value;
    const message = document.getElementById('fmessage').value;

    const subject = encodeURIComponent(`Quote Request – ${service}`);
    const body    = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService Needed: ${service}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:Risenhandyman@gmail.com?subject=${subject}&body=${body}`;

    contactForm.reset();
    successMsg.style.display = 'block';
    setTimeout(() => { successMsg.style.display = 'none'; }, 6000);
  });
}
