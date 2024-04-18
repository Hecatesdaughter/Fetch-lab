const fetchBooks = async (
) => {
  try {
    const response = await fetch("https://anapioficeandfire.com/api/books");
    const data = await response.json();

    console.log(data);

    if (data && Array.isArray(data)) {
      const booksList = data.map((book) => `<li>${book.name}</li>`).join("");
      document.querySelector("#booksList").innerHTML = booksList;
    } else {
      console.log("No books data available or invalid data structure");
    }
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

fetchBooks();

  
  
  
  
  
  
  
  