const accordionButtons = document.querySelectorAll(".accordion-button");
const modals = document.querySelectorAll(".modal");
const modalCloseButtons = document.querySelectorAll(".modal-close");

// Toggle accordion content and button styles
function toggleAccordion(button, content) {
  content.classList.toggle("active");
  button.classList.toggle("active", !content.classList.contains("active"));
}

// Accordion functionality
accordionButtons.forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    toggleAccordion(button, content);

    // Close all other accordions
    accordionButtons.forEach(otherButton => {
      if (otherButton !== button) {
        toggleAccordion(otherButton, otherButton.nextElementSibling);
      }
    });
  });
});

// Hide modals initially
modals.forEach(modal => {
  modal.style.display = "none";
});

// Close modals on button click
modalCloseButtons.forEach(button => {
  button.addEventListener("click", () => {
    button.parentElement.parentElement.style.display = "none";
  });
});

// Open a specific modal by its index
function openModal(index) {
  if (index >= 0 && index < modals.length) {
    modals[index].style.display = "block";
  }
}

// Project Modal Linking (Optional):
const projectTitles = document.querySelectorAll(".accordion-button[data-modal-index]");

projectTitles.forEach(title => {
  title.addEventListener("click", () => {
    const modalIndex = parseInt(title.dataset.modalIndex); // Get index from data attribute
    openModal(modalIndex);
  });
});
