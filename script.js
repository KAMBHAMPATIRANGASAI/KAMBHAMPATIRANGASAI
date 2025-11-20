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
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
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
