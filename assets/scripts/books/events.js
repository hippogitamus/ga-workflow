// const api = require('./api.js')

const onGetBooks = (event) => {
  event.preventDefault()
  console.log('button works!')
  // api.getBooks()
}

const addHandlers = event => {
  $('.get').on('click', onGetBooks)
}

module.exports = {
  addHandlers
}
