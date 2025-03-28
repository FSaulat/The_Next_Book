function filterBooks(genre) {
    const allBooks = document.querySelectorAll('.img-box');
    const homeSection = document.getElementById('home-section');
  
    allBooks.forEach(book => {
      book.style.display = 'none'; // Hide all books by default
    });
  
    if (genre === 'none') {
      homeSection.style.display = 'block';
    } else {
      homeSection.style.display = 'none';
      allBooks.forEach(book => {
        if (book.classList.contains(genre)) {
          book.style.display = 'block';
        }
      });
    }
  }
  
  // Set "Home" as default on load
  document.addEventListener("DOMContentLoaded", () => {
    filterBooks('none');
  });
  