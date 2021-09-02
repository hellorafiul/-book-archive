const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('search-btn');
const booksContainer = document.getElementById('books-container');
const errorDiv = document.getElementById('error');
const numbersOfBooks = document.getElementById('numbers-Of-books');

const loadBooks = () => {
  const search = searchInput.value;
  if (search === '') {
    errorDiv.innerText = `Search field cannot be empty ⚠`;
    booksContainer.textContent = '';
    numbersOfBooks.innerHTML = '';
    return;
  } else {
    const url = `https://openlibrary.org/search.json?q=${search}`;
    fetch(url)
      .then(res => res.json())
      .then(data => displayBooks(data.docs))
  }
  //Clear input value
  searchInput.value = '';

}
const displayBooks = books => {
  const totalBooks = books.length;
  if (totalBooks === 0) {
    numbersOfBooks.innerHTML = `<img src="img/no-result.png" alt="">`;
  } else {
    numbersOfBooks.innerHTML = `<p>Result Found <b>${totalBooks}</b></p>`;
  };

  // Clear books container
  errorDiv.innerText = "";
  booksContainer.textContent = '';


  books.forEach(book => {
    // numbersOfBooks.innerHTML = '';
    const div = document.createElement('div');
    div.classList.add('col-md-3');
    div.innerHTML = `
    <div class="row g-4">
      <div class="col py-3">
        <div class="card h-100">
          <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" alt="" style="height: 300px;" class="w-100 img-fluid border">
        <div class="card-body mb-3" style="height: 250px;">
          <h5 class="card-title">${book.title}</h5>
          <p><b>Author:</b> <span class="text-primary"><cite>${book.author_name}</cite></span></p>
          <p><b>Publisher:</b> ${book.publisher}</p>
          <p><b>Publish Year:</b> ${book.first_publish_year}</p>
        </div>
        <div class="card-footer">
          <button class="btn btn-primary">Book Details</button>
        </div>
      </div>
    </div>
  `;
    booksContainer.appendChild(div)
  });
}