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
        longDescription: 'This project involved building a comprehensive real estate analytics platform that aggregates and analyzes property data from multiple sources. The system includes automated web scrapers, a data processing pipeline, and an interactive dashboard. Key features include price trend analysis, neighborhood comparisons, and predictive modeling for property valuations.',
        tags: ['Python', 'BeautifulSoup', 'Pandas', 'Plotly', 'Flask', 'Data Visualization', 'Web Scraping'],
        github: '#',
        demo: '#',
        icon: 'fa-home',
        dataSource: 'Zillow, Redfin, local MLS',
        technologies: ['Python', 'BeautifulSoup', 'Pandas', 'Plotly', 'Flask', 'PostgreSQL', 'Docker'],
        features: [
            'Automated data collection from multiple real estate platforms',
            'Interactive dashboards with filtering and comparison tools',
            'Predictive modeling for property valuations',
            'Email alerts for price drops and new listings'
        ]
    },
    {
        title: 'Tech Job Market Dashboard',
        description: 'Analysis of job postings to track in-demand skills, salary trends, and hiring patterns in the tech industry.',
        longDescription: 'A data analytics platform that aggregates and analyzes job postings from various tech job boards. The system provides insights into the most in-demand skills, salary trends, and hiring patterns across different regions and industries. The dashboard helps job seekers identify skill gaps and employers understand market trends.',
        tags: ['Python', 'Selenium', 'D3.js', 'MongoDB', 'Node.js', 'Data Analysis', 'Web Scraping'],
        github: '#',
        demo: '#',
        icon: 'fa-briefcase',
        dataSource: 'LinkedIn, Indeed, Stack Overflow Jobs',
        technologies: ['Python', 'Selenium', 'MongoDB', 'Node.js', 'D3.js', 'Express'],
        features: [
            'Automated job posting collection and processing',
            'Interactive visualizations of job market trends',
            'Skill gap analysis and recommendations',
            'Customizable alerts for new job postings'
        ]
    },
    {
        title: 'Crypto Market Sentiment Tracker',
        description: 'Real-time sentiment analysis of social media and news to predict cryptocurrency price movements.',
        longDescription: 'A real-time sentiment analysis platform that monitors social media and news sources to gauge market sentiment around various cryptocurrencies. The system uses natural language processing to analyze text data and generate trading signals based on sentiment trends.',
        tags: ['Python', 'NLTK', 'BeautifulSoup', 'TensorFlow', 'Streamlit', 'Machine Learning', 'NLP'],
        github: '#',
        demo: '#',
        icon: 'fa-chart-line',
        dataSource: 'Twitter, Reddit, Crypto News APIs',
        technologies: ['Python', 'TensorFlow', 'NLTK', 'Streamlit', 'Docker', 'AWS'],
        features: [
            'Real-time sentiment analysis from multiple sources',
            'Price movement prediction models',
            'Customizable alerts for sentiment shifts',
            'Interactive dashboards with historical data'
        ]
    },
    {
        title: 'Smart Shopping Assistant',
        description: 'Browser extension that finds the best deals and price history across multiple e-commerce platforms.',
        longDescription: 'A browser extension that helps users find the best deals by comparing prices across multiple e-commerce platforms. The tool also provides price history charts, price drop alerts, and product availability notifications.',
        tags: ['JavaScript', 'Chrome Extension', 'Python', 'Flask', 'BeautifulSoup', 'Web Scraping'],
        github: '#',
        demo: '#',
        icon: 'fa-shopping-cart',
        dataSource: 'Amazon, eBay, Walmart, and other e-commerce sites',
        technologies: ['JavaScript', 'Chrome Extension', 'Python', 'Flask', 'BeautifulSoup', 'PostgreSQL'],
        features: [
            'Price comparison across multiple retailers',
            'Price history tracking and alerts',
            'Browser extension for easy access',
            'Wishlist and price drop notifications'
        ]
    },
    {
        title: 'Global Air Quality Dashboard',
        description: 'Interactive map showing real-time air quality index (AQI) data from around the world with historical trends.',
        longDescription: 'A comprehensive air quality monitoring platform that aggregates data from thousands of monitoring stations worldwide. The dashboard provides real-time air quality indices, pollution forecasts, and health recommendations based on current conditions.',
        tags: ['Python', 'Dash', 'Pandas', 'GeoPandas', 'Folium', 'Data Visualization'],
        github: '#',
        demo: '#',
        icon: 'fa-wind',
        dataSource: 'OpenAQ, World Air Quality Index',
        technologies: ['Python', 'Dash', 'Pandas', 'GeoPandas', 'Folium', 'Docker', 'AWS'],
        features: [
            'Real-time air quality monitoring',
            'Interactive global and local maps',
            'Historical data analysis',
            'Health recommendations based on AQI'
        ]
    },
    {
        title: 'Viral Content Predictor',
        description: 'Machine learning model that predicts the virality potential of social media content based on historical data.',
        longDescription: 'A machine learning platform that analyzes social media content to predict its potential to go viral. The system considers various factors including content type, timing, engagement metrics, and historical performance to provide virality scores and recommendations.',
        tags: ['Python', 'Scikit-learn', 'TensorFlow', 'Flask', 'D3.js', 'Machine Learning', 'NLP'],
        github: '#',
        demo: '#',
        icon: 'fa-viruses',
        dataSource: 'Twitter, Instagram, and YouTube APIs',
        technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Flask', 'D3.js', 'Docker'],
        features: [
            'Virality prediction scoring',
            'Content optimization suggestions',
            'Performance tracking and analytics',
            'Multi-platform support (Twitter, Instagram, YouTube)'
        ]
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

// Mobile menu toggle
document.querySelector('.hamburger').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    this.classList.toggle('active');
    
    // Toggle overflow on body when mobile menu is open
    if (navLinks.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) { // Only for mobile
            document.querySelector('.nav-links').classList.remove('active');
            document.querySelector('.hamburger').classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

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

// Initialize project filters and modal
function initProjectFeatures() {
    const projectsGrid = document.querySelector('.projects-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const modal = document.getElementById('project-modal');
    const modalContent = modal.querySelector('.modal-body');
    const closeModal = modal.querySelector('.close-modal');
    
    if (!projectsGrid) return;
    
    // Filter projects by tag
    function filterProjects(filter) {
        const allProjects = document.querySelectorAll('.project-card');
        const activeBtn = document.querySelector('.filter-btn.active');
        
        if (activeBtn) {
            activeBtn.classList.remove('active');
        }
        
        // Update active button
        const currentBtn = Array.from(filterButtons).find(btn => btn.dataset.filter === filter);
        if (currentBtn) {
            currentBtn.classList.add('active');
        }
        
        allProjects.forEach(project => {
            const tags = project.dataset.tags ? project.dataset.tags.split(' ') : [];
            
            if (filter === 'all' || tags.some(tag => tag === filter)) {
                project.style.display = 'flex';
            } else {
                project.style.display = 'none';
            }
        });
    }
    
    // Open project modal
    function openModal(project) {
        modalContent.innerHTML = `
            <h3>${project.title}</h3>
            <div class="project-meta">
                <div class="project-icon">
                    <i class="fas ${project.icon || 'fa-project-diagram'}"></i>
                </div>
                <div class="project-details">
                    <p class="project-description">${project.longDescription || project.description}</p>
                    ${project.dataSource ? `
                    <div class="project-data-source">
                        <span class="data-source-label">Data Source:</span>
                        <span class="data-source-value">${project.dataSource}</span>
                    </div>` : ''}
                </div>
            </div>
            
            ${project.features && project.features.length > 0 ? `
            <div class="project-features">
                <h4>Key Features</h4>
                <ul>
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>` : ''}
            
            <div class="project-technologies">
                <h4>Technologies Used</h4>
                <div class="tech-tags">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
            
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="tag" data-tag="${tag.toLowerCase()}">${tag}</span>`).join('')}
            </div>
            
            <div class="project-links">
                ${project.github ? `
                <a href="${project.github}" target="_blank" class="btn btn-outline" aria-label="View on GitHub">
                    <i class="fab fa-github"></i> View Code
                </a>` : ''}
                ${project.demo ? `
                <a href="${project.demo}" target="_blank" class="btn btn-primary" aria-label="View live demo">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                </a>` : ''}
            </div>
        `;
        
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
    
    // Close modal
    function closeModalHandler() {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
    
    // Close modal when clicking outside content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalHandler();
        }
    });
    
    // Close modal with escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModalHandler();
        }
    });
    
    closeModal.addEventListener('click', closeModalHandler);
    
    // Add filter button event listeners
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            filterProjects(filter);
        });
    });
    
    // Initial filter
    filterProjects('all');
    
    return { filterProjects, openModal };
}

// Render projects with staggered animation
function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    if (!projectsGrid) return;
    
    // Clear existing projects
    projectsGrid.innerHTML = '';
    
    // Create project cards
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.style.animationDelay = `${index * 0.1}s`;
        projectCard.dataset.tags = project.tags.map(tag => tag.toLowerCase().replace(/\s+/g, '-')).join(' ');
        
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
                    ${project.tags.slice(0, 4).map(tag => `<span class="tag" data-tag="${tag.toLowerCase()}">${tag}</span>`).join('')}
                    ${project.tags.length > 4 ? `<span class="tag more-tag">+${project.tags.length - 4} more</span>` : ''}
                </div>
                <div class="project-links">
                    <button class="btn btn-outline view-details" aria-label="View project details">
                        <i class="fas fa-info-circle"></i> Details
                    </button>
                    ${project.github ? `
                    <a href="${project.github}" target="_blank" class="btn btn-outline" aria-label="View on GitHub">
                        <i class="fab fa-github"></i> Code
                    </a>` : ''}
                </div>
            </div>
        `;
        
        // Add click event to open modal
        const viewDetailsBtn = projectCard.querySelector('.view-details');
        if (viewDetailsBtn) {
            viewDetailsBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const { openModal } = initProjectFeatures();
                openModal(project);
            });
        }
        
        // Also make the whole card clickable to view details
        projectCard.addEventListener('click', () => {
            const { openModal } = initProjectFeatures();
            openModal(project);
        });
        
        projectsGrid.appendChild(projectCard);
    });
    
    // Initialize project features after rendering
    initProjectFeatures();
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
    // Set current year in footer
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
    
    // Initialize theme toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
        applyThemePreference();
    }
    
    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }
    
    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', handleScroll);
    
    // Scroll to top button
    if (scrollToTopBtn) {
        window.addEventListener('scroll', toggleScrollToTopButton);
        scrollToTopBtn.addEventListener('click', scrollToTop);
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without scrolling
                if (history.pushState) {
                    history.pushState(null, null, targetId);
                } else {
                    location.hash = targetId;
                }
            }
        });
    });
    
    // Render projects and initialize features
    renderProjects();
    
    // Setup form validation
    setupFormValidation();
    
    // Handle contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
    
    // Initialize animations
    setupScrollAnimations();
    
    // Hide loading animation when everything is loaded
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.body.classList.add('loaded');
            if (loadingAnimation) {
                loadingAnimation.style.display = 'none';
            }
        }, 500);
    });
    
    // Add touch support for project cards on mobile
    document.addEventListener('touchstart', function() {}, true);
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
