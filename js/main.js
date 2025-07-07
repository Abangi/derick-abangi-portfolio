// DOM Elements
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');
const currentYear = document.getElementById('current-year');
const contactForm = document.getElementById('contact-form');
const scrollToTopBtn = document.getElementById('scrollToTop');
const loadingAnimation = document.querySelector('.loading-animation');

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        once: true,
        duration: 800,
        easing: 'ease-in-out',
        mirror: false
    });

    // Initialize Typed.js for typing animation
    if (document.querySelector('.typed-text')) {
        new Typed('.typed-text', {
            strings: ['Data Scientist', 'Python Developer', 'ML Enthusiast', 'Problem Solver'],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true
        });
    }

    // Initialize particles.js
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim() },
                shape: { type: 'circle' },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim(),
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'grab' },
                    onclick: { enable: true, mode: 'push' },
                    resize: true
                },
                modes: {
                    grab: { distance: 140, line_linked: { opacity: 0.5 } },
                    push: { particles_nb: 1 }
                }
            },
            retina_detect: true
        });
    }
});

// Data Visualization Projects with Web Scraping Components
const projects = [
    {
        title: 'Real Estate Market Analyzer',
        description: 'Interactive dashboard showing real estate price trends, inventory levels, and market conditions by neighborhood. Scrapes data from Zillow and Redfin.',
        tags: ['Python', 'BeautifulSoup', 'Pandas', 'Plotly', 'Flask'],
        github: '#',
        demo: '#',
        icon: 'fa-home',
        dataSource: 'Zillow, Redfin, local MLS'
    },
    {
        title: 'Tech Job Market Dashboard',
        description: 'Analysis of job postings to track in-demand skills, salary trends, and hiring patterns in the tech industry.',
        tags: ['Python', 'Selenium', 'D3.js', 'MongoDB', 'Node.js'],
        github: '#',
        demo: '#',
        icon: 'fa-briefcase',
        dataSource: 'LinkedIn, Indeed, Stack Overflow Jobs'
    },
    {
        title: 'Crypto Market Sentiment Tracker',
        description: 'Real-time sentiment analysis of social media and news to predict cryptocurrency price movements.',
        tags: ['Python', 'NLTK', 'BeautifulSoup', 'TensorFlow', 'Streamlit'],
        github: '#',
        demo: '#',
        icon: 'fa-coins',
        dataSource: 'Twitter, Reddit, Crypto News APIs'
    },
    {
        title: 'Global Air Quality Dashboard',
        description: 'Interactive map showing real-time and historical air quality data from cities worldwide.',
        tags: ['Python', 'Scrapy', 'Folium', 'Dash', 'PostgreSQL'],
        github: '#',
        demo: '#',
        icon: 'fa-wind',
        dataSource: 'AirVisual, OpenAQ, government APIs'
    },
    {
        title: 'Smart Shopping Assistant',
        description: 'Price comparison and tracking tool that scrapes e-commerce sites to find the best deals and price drop alerts.',
        tags: ['Python', 'Scrapy', 'BeautifulSoup', 'FastAPI', 'React'],
        github: '#',
        demo: '#',
        icon: 'fa-shopping-cart',
        dataSource: 'Amazon, Best Buy, Walmart'
    },
    {
        title: 'Viral Content Predictor',
        description: 'Analyzes social media posts to identify trending topics and predict viral content with network graph visualizations.',
        tags: ['Python', 'Tweepy', 'NetworkX', 'D3.js', 'Flask'],
        github: '#',
        demo: '#',
        icon: 'fa-chart-line',
        dataSource: 'Twitter, Reddit, Instagram'
    }
];

// Set current year in footer
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// Theme Toggle with smooth transition
function toggleTheme() {
    const isDark = body.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    
    // Smooth transition
    body.style.transition = 'background-color 0.5s ease, color 0.5s ease';
    
    // Update theme
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(isDark);
    
    // Update particles color if they exist
    if (window.pJSDom && window.pJSDom.length > 0) {
        const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
        window.pJSDom[0].pJS.particles.color.value = primaryColor;
        window.pJSDom[0].pJS.particles.line_linked.color = primaryColor;
        window.pJSDom[0].pJS.fn.particlesRefresh();
    }
    
    // Remove transition after animation completes
    setTimeout(() => {
        body.style.transition = '';
    }, 500);
}

function updateThemeIcon(isDark) {
    const icon = themeToggle.querySelector('i');
    if (icon) {
        icon.className = isDark ? 'fas fa-moon' : 'fas fa-sun';
    }
}

// Apply saved theme preference
function applyThemePreference() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme === 'dark');
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
}

// Close mobile menu when clicking on a nav link
function closeMobileMenu() {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
}

// Navbar scroll effect
function handleScroll() {
    // Navbar background on scroll
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Scroll to top button visibility
    toggleScrollToTopButton();
    
    // Active section highlighting in navbar
    highlightActiveSection();
}

// Toggle scroll to top button
function toggleScrollToTopButton() {
    if (!scrollToTopBtn) return;
    
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
}

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Highlight active section in navbar
function highlightActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

// Setup scroll animations for elements
function setupScrollAnimations() {
    const animateOnScroll = (elements, className) => {
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add(className);
            }
        });
    };
    
    // Animate project cards
    const projectCards = document.querySelectorAll('.project-card');
    window.addEventListener('scroll', () => {
        animateOnScroll(projectCards, 'visible');
    });
    
    // Initial check in case elements are already in view
    animateOnScroll(projectCards, 'visible');
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            closeMobileMenu();
        }
    });
});

// Render projects with staggered animation
function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;
    
    // Clear existing content
    projectsGrid.innerHTML = '';
    
    // Create project cards with staggered animation
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.style.animationDelay = `${index * 0.1}s`;
        
        projectCard.innerHTML = `
            <div class="project-header">
                <div class="project-icon">
                    <i class="fas ${project.icon || 'fa-project-diagram'}"></i>
                </div>
                <h3 class="project-title">${project.title}</h3>
            </div>
            <div class="project-image">
                <i class="fas ${project.icon || 'fa-project-diagram'}"></i>
            </div>
            <div class="project-content">
                <p class="project-description">${project.description}</p>
                ${project.dataSource ? `
                <div class="project-data-source">
                    <span class="data-source-label">Data Source:</span>
                    <span class="data-source-value">${project.dataSource}</span>
                </div>` : ''}
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag" data-tag="${tag.toLowerCase()}">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" class="btn btn-outline" aria-label="View code on GitHub">
                        <i class="fab fa-github"></i> Code
                    </a>
                    ${project.demo !== '#' ? `
                    <a href="${project.demo}" target="_blank" class="btn btn-primary" aria-label="View live demo">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>` : ''}
                </div>
            </div>
        `;
        
        // Add hover effect for 3D tilt
        projectCard.addEventListener('mousemove', (e) => {
            const rect = projectCard.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;
            
            projectCard.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-10px) scale(1.02)`;
            projectCard.style.boxShadow = `
                ${-angleY * 2}px ${angleX * 2}px 30px rgba(0, 0, 0, 0.15),
                0 10px 25px -5px rgba(0, 0, 0, 0.1)
            `;
        });
        
        projectCard.addEventListener('mouseleave', () => {
            projectCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
            projectCard.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
        });
        
        projectsGrid.appendChild(projectCard);
        
        // Add animation after a short delay to allow for initial render
        setTimeout(() => {
            projectCard.classList.add('visible');
        }, 100 + (index * 100));
    });
    
    // Add filter functionality
    setupProjectFilters();
}

// Setup project filters
function setupProjectFilters() {
    const filterContainer = document.createElement('div');
    filterContainer.className = 'project-filters';
    filterContainer.innerHTML = `
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="python">Python</button>
        <button class="filter-btn" data-filter="javascript">JavaScript</button>
        <button class="filter-btn" data-filter="machine-learning">Machine Learning</button>
        <button class="filter-btn" data-filter="web">Web</button>
    `;
    
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid && projectsGrid.parentNode) {
        projectsGrid.parentNode.insertBefore(filterContainer, projectsGrid);
        
        // Add filter button event listeners
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Filter projects
                const filter = button.getAttribute('data-filter');
                const projectCards = document.querySelectorAll('.project-card');
                
                projectCards.forEach(card => {
                    if (filter === 'all') {
                        card.style.display = 'block';
                    } else {
                        const hasTag = card.querySelector(`.tag[data-tag="${filter}"]`);
                        card.style.display = hasTag ? 'block' : 'none';
                    }
                });
            });
        });
    }
}

// Form validation setup
function setupFormValidation() {
    const form = document.getElementById('contact-form');
    const inputs = form.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        // Add focus and blur event listeners
        input.addEventListener('focus', (e) => {
            const formGroup = e.target.closest('.form-group');
            if (formGroup) {
                formGroup.classList.add('focused');
            }
        });
        
        input.addEventListener('blur', (e) => {
            const formGroup = e.target.closest('.form-group');
            if (formGroup) {
                formGroup.classList.remove('focused');
                validateField(e.target);
            }
        });
        
        // Add input event for real-time validation
        input.addEventListener('input', (e) => {
            validateField(e.target);
        });
    });
    
    // Form submission
    form.addEventListener('submit', handleContactFormSubmit);
}

// Validate individual form field
function validateField(field) {
    const formGroup = field.closest('.form-group');
    if (!formGroup) return;
    
    // Reset validation state
    formGroup.classList.remove('success', 'error');
    
    // Skip validation if field is empty and not required
    if (!field.value.trim() && !field.required) return;
    
    // Validate email
    if (field.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value.trim())) {
            setError(formGroup, 'Please enter a valid email address');
            return false;
        }
    }
    
    // Validate required fields
    if (field.required && !field.value.trim()) {
        setError(formGroup, 'This field is required');
        return false;
    }
    
    // If we get here, validation passed
    setSuccess(formGroup);
    return true;
}

// Set error state for form group
function setError(formGroup, message) {
    formGroup.classList.add('error');
    formGroup.classList.remove('success');
    
    let messageElement = formGroup.querySelector('.form-message');
    if (!messageElement) {
        messageElement = document.createElement('div');
        messageElement.className = 'form-message error';
        formGroup.appendChild(messageElement);
    }
    
    messageElement.textContent = message;
}

// Set success state for form group
function setSuccess(formGroup) {
    formGroup.classList.add('success');
    formGroup.classList.remove('error');
    
    const messageElement = formGroup.querySelector('.form-message');
    if (messageElement) {
        messageElement.textContent = '';
    }
}

// Handle contact form submission
function handleContactFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData.entries());
    
    // Validate all fields
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    if (!isValid) {
        // Add shake animation to form
        form.classList.add('shake');
        setTimeout(() => form.classList.remove('shake'), 500);
        return;
    }
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formValues);
    
    // Show success message with animation
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    
    // Simulate API call
    setTimeout(() => {
        // Show success message
        submitButton.innerHTML = '<i class="fas fa-check"></i> Sent!';
        submitButton.classList.add('success');
        
        // Reset form after delay
        setTimeout(() => {
            form.reset();
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;
            submitButton.classList.remove('success');
            
            // Reset all form groups
            form.querySelectorAll('.form-group').forEach(group => {
                group.classList.remove('success');
            });
        }, 2000);
    }, 1500);
}

// Download resume
function handleResumeDownload(e) {
    e.preventDefault();
    // You can replace this with the actual resume download link
    alert('Resume download will be available soon!');
}

// Initialize
function init() {
    // Apply saved theme
    applyThemePreference();
    
    // Theme toggle event listener
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }
    
    // Close mobile menu when clicking outside or on a nav link
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-links') && !e.target.closest('.hamburger')) {
            closeMobileMenu();
        }
        
        // Close menu when clicking on a nav link
        if (e.target.closest('.nav-links a')) {
            closeMobileMenu();
        }
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    // Scroll to top button
    if (scrollToTopBtn) {
        window.addEventListener('scroll', toggleScrollToTopButton);
        scrollToTopBtn.addEventListener('click', scrollToTop);
    }
    
    // Render projects
    renderProjects();
    
    // Contact form submission with validation
    if (contactForm) {
        setupFormValidation();
    }
    
    // Resume download
    const resumeDownloadBtns = document.querySelectorAll('#resume-download, #download-resume');
    resumeDownloadBtns.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', handleResumeDownload);
        }
    });
    
    // Add animation to project cards when they come into view
    setupScrollAnimations();
    
    // Hide loading animation when page is fully loaded
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.body.classList.add('loaded');
            
            // Add pulse animation to CTA buttons after load
            const ctaButtons = document.querySelectorAll('.btn-primary');
            ctaButtons.forEach(btn => {
                btn.classList.add('pulse-animation');
            });
        }, 1000);
    });
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
