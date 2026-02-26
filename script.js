// Animate hero title letters falling down
const heroTitle = document.getElementById("hero-title");
if (heroTitle) {
  // Store original HTML structure
  const originalHTML = heroTitle.innerHTML;
  
  // Extract text from span and wrap it
  const spanMatch = originalHTML.match(/<span>(.*?)<\/span>/);
  if (spanMatch) {
    const spanText = spanMatch[1];
    const wrappedSpanText = spanText.split("").map(char => {
      if (char === " ") {
        return '<span class="letter space"> </span>';
      }
      return `<span class="letter">${char}</span>`;
    }).join("");
    
    // Get text before span
    const beforeSpan = originalHTML.split("<span>")[0];
    const wrappedBefore = beforeSpan.split("").map(char => {
      if (char === " ") {
        return '<span class="letter space"> </span>';
      }
      return `<span class="letter">${char}</span>`;
    }).join("");
    
    // Reconstruct HTML
    heroTitle.innerHTML = wrappedBefore + '<span>' + wrappedSpanText + '</span>';
  } else {
    // No span, just wrap all text
    const text = heroTitle.textContent;
    heroTitle.innerHTML = text.split("").map(char => {
      if (char === " ") {
        return '<span class="letter space"> </span>';
      }
      return `<span class="letter">${char}</span>`;
    }).join("");
  }
  
  // Animate letters
  const letters = heroTitle.querySelectorAll(".letter");
  letters.forEach((letter, index) => {
    setTimeout(() => {
      letter.classList.add("animate");
    }, index * 50);
  });
}

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.setAttribute("aria-controls", "primary-navigation");
  navToggle.setAttribute("aria-expanded", "false");

  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Animate highlight cards on scroll
const highlightCards = document.querySelectorAll(".highlight-card");

if (highlightCards.length > 0 && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("animate-in");
          }, index * 100);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  highlightCards.forEach((card) => {
    observer.observe(card);
  });
} else if (highlightCards.length > 0) {
  // Fallback for browsers without IntersectionObserver
  highlightCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("animate-in");
    }, index * 100);
  });
}

// Animate strengths boxes on scroll (left-to-right for first two, right-to-left for last two)
const strengthsBoxes = document.querySelectorAll(".strengths-grid p");

if (strengthsBoxes.length > 0) {
  // Add initial animation direction classes
  strengthsBoxes.forEach((box, index) => {
    if (index < 2) {
      // First two boxes: slide in from left
      box.classList.add("slide-in-left");
    } else {
      // Last two boxes: slide in from right
      box.classList.add("slide-in-right");
    }
  });

  if ("IntersectionObserver" in window) {
    const strengthsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-in");
            }, index * 150);
            strengthsObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    strengthsBoxes.forEach((box) => {
      strengthsObserver.observe(box);
    });
  } else {
    // Fallback for browsers without IntersectionObserver
    strengthsBoxes.forEach((box, index) => {
      setTimeout(() => {
        box.classList.add("animate-in");
      }, index * 150);
    });
  }
}

// Animate skill cards on scroll (bottom to top, one by one with staggered delay)
const skillCards = document.querySelectorAll(".skill-card");

if (skillCards.length > 0 && "IntersectionObserver" in window) {
  const skillsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate all skill cards one by one with staggered delay
          skillCards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("animate-in");
            }, index * 500);
          });
          skillsObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  // Observe the skills section
  const skillsSection = document.querySelector("#skills");
  if (skillsSection) {
    skillsObserver.observe(skillsSection);
  }
} else if (skillCards.length > 0) {
  // Fallback for browsers without IntersectionObserver
  skillCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("animate-in");
    }, index * 500);
  });
}

// Animate project cards on scroll (bottom to top, one by one with staggered delay)
const projectCards = document.querySelectorAll(".project-card");

if (projectCards.length > 0 && "IntersectionObserver" in window) {
  const projectsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate all project cards one by one with staggered delay
          projectCards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("animate-in");
            }, index * 500);
          });
          projectsObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  // Observe the projects section
  const projectsSection = document.querySelector("#projects");
  if (projectsSection) {
    projectsObserver.observe(projectsSection);
  }
} else if (projectCards.length > 0) {
  // Fallback for browsers without IntersectionObserver
  projectCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("animate-in");
    }, index * 500);
  });
}

// Animate certification cards on scroll (bottom to top, normal order - first to last)
const certCards = document.querySelectorAll(".cert-card");

if (certCards.length > 0 && "IntersectionObserver" in window) {
  const certsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate all certification cards one by one with staggered delay
          certCards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("animate-in");
            }, index * 500);
          });
          certsObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  // Observe the certifications section
  const certsSection = document.querySelector("#certifications");
  if (certsSection) {
    certsObserver.observe(certsSection);
  }
} else if (certCards.length > 0) {
  // Fallback for browsers without IntersectionObserver
  certCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("animate-in");
    }, index * 500);
  });
}

// Animate education cards on scroll (left-to-right for first, right-to-left for second)
const educationCards = document.querySelectorAll(".education-card");

if (educationCards.length > 0) {
  // Add initial animation direction classes
  educationCards.forEach((card, index) => {
    if (index === 0) {
      // First card: slide in from left
      card.classList.add("slide-in-left");
    } else {
      // Second card: slide in from right
      card.classList.add("slide-in-right");
    }
  });

  if ("IntersectionObserver" in window) {
    const educationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-in");
            }, index * 200);
            educationObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    educationCards.forEach((card) => {
      educationObserver.observe(card);
    });
  } else {
    // Fallback for browsers without IntersectionObserver
    educationCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("animate-in");
      }, index * 200);
    });
  }
}

// ============================================
// Google Analytics 4 Event Tracking
// ============================================

// Helper function to send GA4 events
function trackEvent(eventName, eventParams = {}) {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, eventParams);
  }
}

// Track navigation link clicks
const navAnchorLinks = document.querySelectorAll('.nav-links a[href^="#"]');
navAnchorLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const sectionName = link.getAttribute('href').replace('#', '') || 'unknown';
    trackEvent('navigation_click', {
      'section': sectionName,
      'link_text': link.textContent.trim()
    });
  });
});

// Track CTA button clicks
const ctaButtons = document.querySelectorAll('.hero-cta .btn');
ctaButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const buttonText = button.textContent.trim();
    const buttonHref = button.getAttribute('href') || '';
    
    let eventName = 'cta_click';
    let eventParams = {
      'button_text': buttonText,
      'button_type': button.classList.contains('primary') ? 'primary' : 
                     button.classList.contains('secondary') ? 'secondary' : 'outline'
    };
    
    // Special tracking for resume download
    if (buttonHref.includes('Resume') || buttonHref.includes('.pdf')) {
      eventName = 'resume_download';
      eventParams.download_type = 'resume';
    }
    
    trackEvent(eventName, eventParams);
  });
});

// Track external link clicks (GitHub, LinkedIn, email)
const externalLinks = document.querySelectorAll('a[href^="http"], a[href^="mailto:"]');
externalLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const linkUrl = link.getAttribute('href');
    const linkText = link.textContent.trim();
    
    let linkType = 'external';
    if (linkUrl.includes('github.com')) {
      linkType = 'github';
    } else if (linkUrl.includes('linkedin.com')) {
      linkType = 'linkedin';
    } else if (linkUrl.startsWith('mailto:')) {
      linkType = 'email';
    }
    
    trackEvent('external_link_click', {
      'link_type': linkType,
      'link_url': linkUrl,
      'link_text': linkText
    });
  });
});

// Track project card link clicks
const projectLinks = document.querySelectorAll('.project-card .link');
projectLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const projectCard = link.closest('.project-card');
    const projectTitle = projectCard ? projectCard.querySelector('h4')?.textContent.trim() : 'unknown';
    const linkUrl = link.getAttribute('href') || '';
    
    trackEvent('project_view', {
      'project_title': projectTitle,
      'project_url': linkUrl,
      'link_text': link.textContent.trim()
    });
  });
});

// ============================================
// Inline certificate viewer modal
// ============================================

const certificateModal = document.getElementById('certificate-modal');
const certificateFrame = certificateModal ? certificateModal.querySelector('.certificate-modal-frame') : null;
const certificateTitleEl = document.getElementById('certificate-modal-title');
const certificateCloseBtn = document.getElementById('certificate-modal-close');
const certificateBackdrop = certificateModal ? certificateModal.querySelector('.certificate-modal-backdrop') : null;

function openCertificateModal(url, title) {
  if (!certificateModal || !certificateFrame) return;

  certificateFrame.setAttribute('src', url);
  if (certificateTitleEl) {
    certificateTitleEl.textContent = title || 'Certificate';
  }

  certificateModal.classList.add('open');
  certificateModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  trackEvent('certificate_modal_open', {
    certificate_url: url,
    certificate_title: title || 'Unknown'
  });
}

function closeCertificateModal() {
  if (!certificateModal || !certificateFrame) return;

  certificateModal.classList.remove('open');
  certificateModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';

  // Clear src after close to stop PDF rendering
  setTimeout(() => {
    certificateFrame.setAttribute('src', '');
  }, 200);
}

if (certificateCloseBtn) {
  certificateCloseBtn.addEventListener('click', () => {
    closeCertificateModal();
  });
}

if (certificateBackdrop) {
  certificateBackdrop.addEventListener('click', () => {
    closeCertificateModal();
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && certificateModal && certificateModal.classList.contains('open')) {
    closeCertificateModal();
  }
});

// Attach modal behaviour to certification & education certificate links
const certificateLinks = document.querySelectorAll(
  '#certifications .cert-card .link[href$=".pdf"], #education .link[href$=".pdf"]'
);

certificateLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const url = link.getAttribute('href');
    if (!url) return;

    const article = link.closest('article');
    const title =
      (article && article.querySelector('h4') && article.querySelector('h4').textContent.trim()) ||
      link.textContent.trim();

    openCertificateModal(url, title);
  });
});

// Track form submissions
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    // Track form submission attempt
    trackEvent('form_submit', {
      'form_type': 'contact',
      'form_location': 'contact_section'
    });
    
    // Note: Form submission will be tracked by Formspree, but we track the attempt here
    // You can also add additional tracking after successful submission if needed
  });
}

// Track section views using IntersectionObserver
const sections = document.querySelectorAll('section[id]');
const sectionViewTracker = {};

if (sections.length > 0 && "IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('id');
          
          // Only track once per session
          if (!sectionViewTracker[sectionId]) {
            sectionViewTracker[sectionId] = true;
            
            const sectionName = entry.target.querySelector('.section-heading h3')?.textContent.trim() || 
                               entry.target.querySelector('.section-heading .eyebrow')?.textContent.trim() || 
                               sectionId;
            
            trackEvent('section_view', {
              'section_id': sectionId,
              'section_name': sectionName
            });
          }
        }
      });
    },
    {
      threshold: 0.3, // Track when 30% of section is visible
      rootMargin: '0px 0px -100px 0px'
    }
  );

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });
}

// Track mobile menu toggle
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.contains('open');
    trackEvent('mobile_menu_toggle', {
      'menu_state': isOpen ? 'open' : 'closed'
    });
  });
}

// Track page load and engagement
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    trackEvent('page_view', {
      'page_title': document.title,
      'page_path': window.location.pathname
    });
  });
} else {
  trackEvent('page_view', {
    'page_title': document.title,
    'page_path': window.location.pathname
  });
}

// Track scroll depth (optional - tracks when user scrolls 25%, 50%, 75%, 100%)
let scrollDepthTracked = {
  '25': false,
  '50': false,
  '75': false,
  '100': false
};

window.addEventListener('scroll', () => {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollPercent = Math.round((scrollTop / (documentHeight - windowHeight)) * 100);
  
  // Track scroll milestones
  if (scrollPercent >= 25 && !scrollDepthTracked['25']) {
    scrollDepthTracked['25'] = true;
    trackEvent('scroll_depth', { 'depth': '25%' });
  } else if (scrollPercent >= 50 && !scrollDepthTracked['50']) {
    scrollDepthTracked['50'] = true;
    trackEvent('scroll_depth', { 'depth': '50%' });
  } else if (scrollPercent >= 75 && !scrollDepthTracked['75']) {
    scrollDepthTracked['75'] = true;
    trackEvent('scroll_depth', { 'depth': '75%' });
  } else if (scrollPercent >= 100 && !scrollDepthTracked['100']) {
    scrollDepthTracked['100'] = true;
    trackEvent('scroll_depth', { 'depth': '100%' });
  }
}, { passive: true });
