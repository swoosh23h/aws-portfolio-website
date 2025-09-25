// Mobile menu toggle document.addEventListener('DOMContentLoaded', function() {
const hamburger = document.querySelector('.hamburger'); const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', function() { hamburger.classList.toggle('active'); navMenu.classList.toggle('active');
});
// Close menu when clicking on a link document.querySelectorAll('.nav-menu a').forEach(link => {
link.addEventListener('click', () => {
hamburger.classList.remove('active');
navMenu.classList.remove('active'); });
});
// Smooth scrolling for navigation links document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute('href')); if (target) {
target.scrollIntoView({ behavior: 'smooth', block: 'start'
}); }
}); });
// Add navbar background on scroll window.addEventListener('scroll', function() {
const header = document.querySelector('.header'); if (window.scrollY > 100) {
header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
header.style.backdropFilter = 'blur(10px)'; } else {

header.style.backgroundColor = '#fff';
header.style.backdropFilter = 'none'; }
}); });
// Add animation on scroll const observerOptions = {
threshold: 0.1,
rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver(function(entries) { entries.forEach(entry => {
if (entry.isIntersecting) { entry.target.style.opacity = '1'; entry.target.style.transform = 'translateY(0)';
} });
}, observerOptions);
// Observe all sections for animation document.addEventListener('DOMContentLoaded', function() {
const sections = document.querySelectorAll('section'); sections.forEach(section => {
section.style.opacity = '0';

section.style.transform = 'translateY(30px)'; section.style.transition = 'opacity 0.6s ease, transform 0.6s ease'; observer.observe(section);
}); });
