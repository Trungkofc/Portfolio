/**
 * Nguyen Huu Trung - Personal Portfolio Application Logic
 * Vanilla JavaScript (ES6+) - Clean, modular, responsive interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all application modules
  initThemeToggle();
  initScrollProgress();
  initMobileNav();
  initTypingEffect();
  initScrollSpy();
  initSkillsFilter();
  initProjectModals();
  initContactForm();
  initCopyClipboard();
  initBackToTop();
  initScrollAnimations();
  initGuideModal();
  updateCurrentYear();
});

/* ==========================================================================
   1. THEME TOGGLE (LIGHT / DARK MODE)
   ========================================================================== */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (!themeToggleBtn) return;

  // Check saved theme in localStorage or default to 'light'
  const savedTheme = localStorage.getItem('trung_portfolio_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('trung_portfolio_theme', newTheme);

    showToast(`Switched to ${newTheme.toUpperCase()} theme`, 'info');
  });
}

/* ==========================================================================
   2. READING PROGRESS BAR & STICKY HEADER
   ========================================================================== */
function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress');
  const header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    // Scroll progress
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    if (progressBar) {
      progressBar.style.width = `${Math.min(scrollPercent, 100)}%`;
    }

    // Sticky header shadow
    if (header) {
      if (scrollTop > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });
}

/* ==========================================================================
   3. MOBILE NAVIGATION HAMBURGER MENU
   ========================================================================== */
function initMobileNav() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!hamburgerBtn || !navMenu) return;

  function toggleMenu() {
    const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
    hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
    hamburgerBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
  }

  hamburgerBtn.addEventListener('click', toggleMenu);

  // Close mobile menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        toggleMenu();
      }
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        !hamburgerBtn.contains(e.target)) {
      toggleMenu();
    }
  });
}

/* ==========================================================================
   4. TYPING EFFECT FOR HERO SUBTITLE
   ========================================================================== */
function initTypingEffect() {
  const typingElement = document.getElementById('typing-text');
  if (!typingElement) return;

  const titles = [
    'Java Backend Developer',
    'Software Engineering Student',
    'Relational Database Enthusiast',
    'Spring Boot & Servlet Developer'
  ];

  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
      typingElement.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 40;
    } else {
      typingElement.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 90;
    }

    if (!isDeleting && charIndex === currentTitle.length) {
      typingSpeed = 2200; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      typingSpeed = 400; // Pause before new word
    }

    setTimeout(type, typingSpeed);
  }

  // Start typing
  setTimeout(type, 800);
}

/* ==========================================================================
   5. SCROLLSPY (ACTIVE NAV HIGHLIGHT)
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveLink() {
    const scrollY = window.scrollY;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink);
}

/* ==========================================================================
   6. SKILLS CATEGORY FILTER
   ========================================================================== */
function initSkillsFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all filter buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const categories = card.getAttribute('data-category').split(' ');

        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.classList.remove('hide');
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.classList.add('hide');
        }
      });
    });
  });
}

/* ==========================================================================
   7. PROJECT MODAL DATA & DIALOG HANDLER
   ========================================================================== */
const projectData = {
  cinema: {
    title: 'Cinema Booking System',
    subtitle: 'Java EE Web Application with MVC Architecture',
    bannerClass: 'project-banner-cinema',
    technologies: ['Java Servlet', 'JSP', 'JDBC', 'Microsoft SQL Server', 'HTML5', 'CSS3', 'JavaScript'],
    description: `
      A comprehensive web application engineered to digitize cinema operations and customer ticket booking. 
      Designed using clean Model-View-Controller (MVC) architectural principles with Java EE technologies.
    `,
    features: [
      'Multi-Role Authentication & Security: Dedicated portals for Customer, Cinema Staff, Manager, and Administrator.',
      'Movie & Showtime Management: Dynamic scheduling of movie catalogs, screening rooms, showtimes, and ticket pricing.',
      'Interactive Seat Map & Reservation: Real-time visual seat layout allowing customers to select available seats and prevent double-booking.',
      'Ticket Check-In & POS Concessions: Digital QR/ticket validation engine for cinema staff and integrated snack & beverage sales tracking.',
      'Database Architecture: Designed normalized SQL Server database schemas with primary/foreign key constraints and SQL transactions.'
    ],
    githubUrl: 'https://github.com/Trungkofc/CinemaManagementSystem'
  },
  library: {
    title: 'Online Library Management System',
    subtitle: 'Enterprise Backend Application with Spring Boot',
    bannerClass: 'project-banner-library',
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'Microsoft SQL Server', 'REST API', 'ThymeLeaf/HTML'],
    description: `
      An enterprise-grade web application developed with Spring Boot to streamline library administration, book catalog search, and automated book borrowing workflows.
    `,
    features: [
      'Spring Security RBAC: Custom login flow with role-based access control (Librarian/Admin vs. Student Borrower).',
      'Inventory & Book Catalog: Search and filtering by ISBN, title, author, category, and real-time inventory count.',
      'Borrowing Pipeline: Automated student borrow request queue, approval status tracking, due date calculation, and return validation.',
      'Member Dashboard: Personal user portal displaying current active loans, borrowing history, and overdue status alerts.',
      'Clean Code & Layered Architecture: Strict separation between Controller, Service, and Repository data access layers.'
    ],
    githubUrl: 'https://github.com/Trungkofc/OnlineLibraryManagement'
  },
  git: {
    title: 'Git Assignment & Collaborative Workflow',
    subtitle: 'Version Control & Enterprise Git Practice',
    bannerClass: 'project-banner-git',
    technologies: ['Git CLI', 'GitHub', 'Markdown', 'Version Control Workflows'],
    description: `
      A practical software engineering assignment demonstrating mastery of distributed version control concepts, clean commit practices, and conflict resolution techniques.
    `,
    features: [
      'Repository Structure: Initialized local and remote Git repositories with structured directory hierarchies and clean .gitignore configuration.',
      'Branching Strategy: Executed Git Flow principles utilizing feature branches (main, dev, feature/auth, feature/booking).',
      'Commit Formatting: Practiced atomic, descriptive commit messages adhering to standard conventional commit guidelines.',
      'Merge Conflict Resolution: Artificially generated concurrent branch conflicts and successfully resolved them using Git CLI rebase/merge tools.'
    ],
    githubUrl: 'https://github.com/Trungkofc/Git-Assignment'
  }
};

function initProjectModals() {
  const modal = document.getElementById('project-modal');
  const modalOverlay = document.getElementById('modal-overlay');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalContent = document.getElementById('modal-content');
  const openModalBtns = document.querySelectorAll('.open-modal-btn');

  if (!modal || !modalContent) return;

  function openModal(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    modalContent.innerHTML = `
      <div class="modal-header">
        <span class="modal-subtitle">${data.subtitle}</span>
        <h2 class="modal-title">${data.title}</h2>
      </div>

      <div class="modal-section-heading">Technologies Used</div>
      <div class="modal-tech-list">
        ${data.technologies.map(tech => `<span class="project-tech-badge">${tech}</span>`).join('')}
      </div>

      <div class="modal-section-heading">Overview</div>
      <p style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem;">${data.description}</p>

      <div class="modal-section-heading">Key Features & Technical Implementation</div>
      <ul class="modal-bullets">
        ${data.features.map(feat => `<li><i class="fa-solid fa-square-check"></i> <span>${feat}</span></li>`).join('')}
      </ul>

      <div style="margin-top: 2rem; display: flex; gap: 1rem;">
        <a href="${data.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          <i class="fa-brands fa-github"></i> View GitHub Repository
        </a>
        <button class="btn btn-ghost btn-sm" id="modal-inner-close">Close</button>
      </div>
    `;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Add inner close event
    const innerClose = document.getElementById('modal-inner-close');
    if (innerClose) innerClose.addEventListener('click', closeModal);
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
  }

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-modal');
      openModal(projectId);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   8. GUIDE / PLACEHOLDERS MODAL
   ========================================================================== */
function initGuideModal() {
  const guideModal = document.getElementById('guide-modal');
  const openGuideBtn = document.getElementById('open-placeholders-guide');
  const guideCloseBtn = document.getElementById('guide-close-btn');
  const guideOverlay = document.getElementById('guide-modal-overlay');
  const guideOkBtn = document.getElementById('guide-modal-ok');

  if (!guideModal) return;

  function openGuide() {
    guideModal.classList.add('active');
    guideModal.setAttribute('aria-hidden', 'false');
  }

  function closeGuide() {
    guideModal.classList.remove('active');
    guideModal.setAttribute('aria-hidden', 'true');
  }

  if (openGuideBtn) openGuideBtn.addEventListener('click', openGuide);
  if (guideCloseBtn) guideCloseBtn.addEventListener('click', closeGuide);
  if (guideOverlay) guideOverlay.addEventListener('click', closeGuide);
  if (guideOkBtn) guideOkBtn.addEventListener('click', closeGuide);
}

/* ==========================================================================
   9. CONTACT FORM VALIDATION & HANDLING
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const nameInput = document.getElementById('user-name');
  const emailInput = document.getElementById('user-email');
  const messageInput = document.getElementById('user-message');

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function setError(input, isError) {
    const parent = input.closest('.form-group');
    if (isError) {
      parent.classList.add('error');
    } else {
      parent.classList.remove('error');
    }
  }

  // Live input validation listeners
  if (nameInput) {
    nameInput.addEventListener('input', () => {
      setError(nameInput, nameInput.value.trim() === '');
    });
  }

  if (emailInput) {
    emailInput.addEventListener('input', () => {
      setError(emailInput, !validateEmail(emailInput.value.trim()));
    });
  }

  if (messageInput) {
    messageInput.addEventListener('input', () => {
      setError(messageInput, messageInput.value.trim().length < 10);
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = document.getElementById('user-subject')?.value.trim() || 'Portfolio Inquiry';
    const message = messageInput.value.trim();

    let hasError = false;

    if (name === '') {
      setError(nameInput, true);
      hasError = true;
    }

    if (!validateEmail(email)) {
      setError(emailInput, true);
      hasError = true;
    }

    if (message.length < 10) {
      setError(messageInput, true);
      hasError = true;
    }

    if (hasError) {
      showToast('Please fix the errors in the form before submitting.', 'danger');
      return;
    }

    // Success state
    showToast('Message validated! Opening mail client...', 'success');

    // Create mailto link as fallback interaction
    const mailtoUrl = `mailto:trunglt125@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 1200);

    form.reset();
  });
}

/* ==========================================================================
   10. COPY EMAIL TO CLIPBOARD
   ========================================================================== */
function initCopyClipboard() {
  const copyBtn = document.getElementById('copy-email-btn');
  const emailTextElem = document.getElementById('contact-email-text');

  if (!copyBtn || !emailTextElem) return;

  copyBtn.addEventListener('click', () => {
    const emailToCopy = emailTextElem.textContent.trim();

    if (navigator.clipboard) {
      navigator.clipboard.writeText(emailToCopy)
        .then(() => {
          showToast('Email address copied to clipboard!', 'success');
        })
        .catch(() => {
          fallbackCopyText(emailToCopy);
        });
    } else {
      fallbackCopyText(emailToCopy);
    }
  });

  function fallbackCopyText(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    showToast('Email address copied to clipboard!', 'success');
  }
}

/* ==========================================================================
   11. BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   12. SCROLL ANIMATIONS (INTERSECTION OBSERVER)
   ========================================================================== */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.card, .highlight-card, .section-header');

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(25px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

/* ==========================================================================
   13. TOAST NOTIFICATION UTILITY
   ========================================================================== */
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  const icon = type === 'success' ? 'fa-circle-check' : (type === 'danger' ? 'fa-triangle-exclamation' : 'fa-circle-info');
  
  toast.innerHTML = `
    <i class="fa-solid ${icon}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* ==========================================================================
   14. CURRENT YEAR DYNAMIC FOOTER
   ========================================================================== */
function updateCurrentYear() {
  const yearElem = document.getElementById('current-year');
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }
}
