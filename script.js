const courseCards = document.querySelectorAll('.course-card');

courseCards.forEach(card => {
  card.addEventListener('click', () => {
    const courseDetails = card.querySelector('.course-details');
    courseDetails.classList.toggle('active'); // Toggle active class for popup display
  });
});

