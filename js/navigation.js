// Navigation functionality for Aya Mouallem website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinksContainer = document.getElementById('navLinks');
    
    if (mobileMenuBtn && navLinksContainer) {
        // Mobile menu toggle
        mobileMenuBtn.addEventListener('click', function() {
            navLinksContainer.classList.toggle('active');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navLinksContainer.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                navLinksContainer.classList.remove('active');
            }
        });
    }
    
    // Set active navigation item based on current page
    setActiveNavItem();
    
    // Keyboard navigation accessibility
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.location.href = link.getAttribute('href');
            }
        });
    });
});

// Function to set active navigation item
function setActiveNavItem() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Remove active class from all links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to current page link
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // Handle different page cases
        if (
            (currentPage === 'index.html' && href === 'index.html') ||
            (currentPage === '' && href === 'index.html') ||
            (currentPage === 'research.html' && href === 'research.html') ||
            (currentPage === 'teaching.html' && href === 'teaching.html') ||
            (currentPage === 'media.html' && href === 'media.html') 
        ) {
            link.classList.add('active');
        }
    });
}

// Smooth scroll to top for page transitions (optional enhancement)
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}