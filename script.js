document.getElementById('cover').addEventListener('click', function() {
  const book = document.getElementById('book');
  book.classList.toggle('open');
});

document.getElementById('image-button').addEventListener('click', function() {
  alert('Image Button Clicked!');
});
