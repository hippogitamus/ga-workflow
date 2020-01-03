const getBooks = () => {
  return $.ajax({
    url: 'https://wdi-library-api.herokuapp.com/books/getBooks/',
    method: 'GET'
  })
}

module.exports = {
  getBooks
}
