const accordionButtons = document.querySelectorAll(".accordion-button");
const modals = document.querySelectorAll(".modal");
const modalCloseButtons = document.querySelectorAll(".modal-close");

// Accordion functionality
accordionButtons.forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    const isExpanded = content.classList.contains("active"); // Check if already active

    // Close all other accordions before opening the clicked one
    accordionButtons.forEach(otherButton => {
      if (otherButton !== button) {
        otherButton.nextElementSibling.classList.remove("active");
        otherButton.classList.remove("active");
      }
    });

    content.classList.toggle("active");
    button.classList.toggle("active", !isExpanded); // Toggle active class on button only if not already expanded
  });
});

// Modal functionality
modals.forEach(modal => {
  modal.style.display = "none"; // Hide modals initially
});

modalCloseButtons.forEach(button => {
  button.addEventListener("click", () => {
    const modal = button.parentElement.parentElement;
    modal.style.display = "none";
  });
});

// Function to open a specific modal by its index (optional for project modals)
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

