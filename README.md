# Game of Thrones Book List
This simple web page fetches a list of Game of Thrones books from an API and displays them in a formatted list.

## Setup
To run this project:

1. Clone or download this repository.
2. Open the `index.html` file in your web browser.

## Structure
- `index.html`: The main HTML file containing the webpage structure and a script tag linking to `index.js`.
- `index.js`: The JavaScript file that fetches book data from the API and renders the book list on the page.

## Functionality
1. When you open `index.html` in a web browser, `index.js` is executed.
2. The `fetchBooks` function in `index.js` makes an HTTP GET request to the Game of Thrones API to fetch a list of books.
3. Upon successfully receiving the data, the function logs it to the console and renders the book list by updating the `<ul id="booksList">` element in `index.html`.

