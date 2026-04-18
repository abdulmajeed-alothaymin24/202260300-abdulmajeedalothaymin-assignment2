// ============================================
// SCROLL FADE-IN
// ============================================

const fadeSections = document.querySelectorAll(".section-block");

fadeSections.forEach((section) => section.classList.add("fade-hidden"));

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("fade-hidden");
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

fadeSections.forEach((section) => fadeObserver.observe(section));

// ============================================
// NAVBAR ACTIVE LINK
// ============================================

const navLinks = document.querySelectorAll(".nav-links a");
const navSections = document.querySelectorAll("section[id]");

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove("active-link"));
        const match = document.querySelector(
          `.nav-links a[href="#${entry.target.id}"]`
        );
        if (match) match.classList.add("active-link");
      }
    });
  },
  { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
);

navSections.forEach((section) => navObserver.observe(section));

// ============================================
// SITE GUIDE TOGGLE
// ============================================

const guideToggle = document.getElementById("guide-toggle");
const guideSteps  = document.getElementById("guide-steps");

if (guideToggle && guideSteps) {
  guideToggle.addEventListener("click", () => {
    const isOpen = guideToggle.getAttribute("aria-expanded") === "true";
    guideToggle.setAttribute("aria-expanded", String(!isOpen));
    guideSteps.hidden = isOpen;
  });
}

// ============================================
// THEME TOGGLE
// ============================================

// Select the theme toggle button from the DOM
const themeToggleBtn = document.getElementById("theme-toggle");

// Check if the user previously saved a theme preference
const savedTheme = localStorage.getItem("theme");

// If dark mode was saved, apply it on page load
if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

// Listen for toggle button click
themeToggleBtn.addEventListener("click", () => {

  // Switch between light and dark mode
  document.body.classList.toggle("dark");

  // Save the selected theme to localStorage
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// ============================================
// PROJECT FILTER
// ============================================

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const noProjectsMsg = document.getElementById("no-projects");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Update active button
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    // Show or hide each card based on category
    let visibleCount = 0;
    projectCards.forEach((card) => {
      if (filter === "all" || card.getAttribute("data-category") === filter) {
        card.classList.remove("hidden");
        // Retrigger pop animation
        card.classList.remove("card-pop");
        void card.offsetWidth; // force reflow so animation replays
        card.classList.add("card-pop");
        visibleCount++;
      } else {
        card.classList.add("hidden");
      }
    });

    // Show empty state if no cards are visible
    if (visibleCount === 0) {
      noProjectsMsg.style.display = "block";
    } else {
      noProjectsMsg.style.display = "none";
    }
  });
});

// ============================================
// CONTACT FORM VALIDATION
// ============================================

const contactForm = document.getElementById("contact-form");
const nameField = document.getElementById("contact-name");
const emailField = document.getElementById("contact-email");
const messageField = document.getElementById("contact-message");
const successMsg = document.getElementById("form-success");
const errorMsg = document.getElementById("form-error");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Clear previous error styles
  nameField.classList.remove("input-error");
  emailField.classList.remove("input-error");
  messageField.classList.remove("input-error");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let isValid = true;

  // Validate each field
  if (nameField.value.trim() === "") {
    nameField.classList.add("input-error");
    isValid = false;
  }
  if (!emailRegex.test(emailField.value.trim())) {
    emailField.classList.add("input-error");
    isValid = false;
  }
  if (messageField.value.trim() === "") {
    messageField.classList.add("input-error");
    isValid = false;
  }

  if (!isValid) {
    // Show error, hide success
    errorMsg.style.display = "block";
    successMsg.style.display = "none";
    return;
  }

  // All fields valid — show success and reset
  errorMsg.style.display = "none";
  successMsg.style.display = "block";
  contactForm.reset();

  // Auto-hide success message after 5 seconds
  setTimeout(() => {
    successMsg.style.display = "none";
  }, 5000);
});
