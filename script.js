function filterBooks(category) {
    const allBooks = document.querySelectorAll('.img-box'); // Grab all book cards
    const homeSection = document.getElementById('home-section'); // Home welcome section
  
    // Hide all books first
    allBooks.forEach(book => {
      book.style.display = 'none';
    });
  
    // If "none" is selected, show the home message
    if (category === 'none') {
      homeSection.style.display = 'block';
    } else {
      homeSection.style.display = 'none';
      // Show books that match the selected category (year or "homeshelf")
      allBooks.forEach(book => {
        if (book.classList.contains(category)) {
          book.style.display = 'block';
        }
      });
    }
  }
  
  // Default to home view when the page loads
  document.addEventListener("DOMContentLoaded", () => {
    filterBooks('none');
  });
  