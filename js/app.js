const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('search-btn');
const booksContainer = document.getElementById('books-container')

searchBtn.addEventListener('click', function () {
  const search = searchInput.value;
  const url = 'https://openlibrary.org/search.json?q=javascript';
  fetch(url)
    .then(res => res.json())
    .then(data => {
      //Creating div for each books
      data.docs.forEach((item) => {
        // console.log(item.author_name[0]);
        const div = document.createElement('div');
        div.classList.add('col-md-3');
        div.innerHTML = `
        <!-- Image -->
        <div class="rounded overflow-hidden border">
          <img src="https://covers.openlibrary.org/b/id/554106-L.jpg" alt="" class="w-100">
        </div>
        <!-- Body -->
        <div class="py-2 d-flex justify-content-between align-items-center d-md-block text-md-center">
          <h1>Book name: javascript</h1>
          <button class="btn btn-dark">Book Details</button>
        </div>
        `;
        booksContainer.appendChild(div)
      });
    });
});
