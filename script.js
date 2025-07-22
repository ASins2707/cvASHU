 

// Initialize EmailJS (replace with your credentials)
emailjs.init('YOUR_EMAILJS_USER_ID');

// DOM Elements
const burgerMenu = document.getElementById('burgerMenu');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('#navMenu a');
const header = document.getElementById('mainHeader');
const skillBars = document.querySelectorAll('.skill-level');
const contactForm = document.getElementById('contactForm');
const sendBtn = document.getElementById('sendBtn');
const downloadBtn = document.getElementById('downloadBtn');

// Burger Menu Toggle
burgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    burgerMenu.classList.toggle('toggle');
    document.body.classList.toggle('no-scroll');
});

// Close menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        burgerMenu.classList.remove('toggle');
        document.body.classList.remove('no-scroll');
    });
});

// Sticky Header
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate Skill Bars
function animateSkillBars() {
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
    });
}

// Contact Form Submission
 document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const message = document.getElementById('userMessage').value;
    
    // Format WhatsApp message
    const whatsappMessage = `New Contact Inquiry:%0A%0A` +
                          `*Name:* ${name}%0A` +
                          `*Email:* ${email}%0A` +
                          `*Message:* ${message}`;
    
    // Your WhatsApp number (include country code, remove any spaces or special characters)
    const whatsappNumber = "919783680892"; // Example: 91 for India + 9876543210
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    this.reset();
});

// CV Download Button
downloadBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.open(' https://drive.google.com/file/d/1HESU2aqYHUbOU9voBMU4iL-J97pYs0ve/view?usp=sharing');
});

// Set Current Year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Animate skills when section is in view
const skillsSection = document.getElementById('skills');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
        }
    });
}, { threshold: 0.5 });

observer.observe(skillsSection);

// Responsive check
function checkResponsive() {
    if (window.innerWidth <= 768) {
        burgerMenu.style.display = 'block';
    } else {
        burgerMenu.style.display = 'none';
        navMenu.classList.remove('active');
        burgerMenu.classList.remove('toggle');
        document.body.classList.remove('no-scroll');
    }
}

window.addEventListener('resize', checkResponsive);
checkResponsive(); // Initial check












