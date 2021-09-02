div.innerHTML = `
        <!-- Image -->
        <div class="rounded overflow-hidden border">
          <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" alt="" class="w-100">
        </div>
        <!-- Body -->
        <div class="py-2 d-flex justify-content-between align-items-center d-md-block text-md-center">
          <p>Book: ${book.title}</p>
          <p>Author: ${book.author_name}</p>
          <p>Publisher: ${book.publisher}</p>
          <p>Publish Year: ${book.first_publish_year}</p>
      <button class="btn btn-dark">Book Details</button>
        </div >
  `;