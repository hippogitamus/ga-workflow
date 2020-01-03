const api = require('./api.js')
const ui = require('./ui.js')

const onGetBooks = (event) => {
  event.preventDefault()
  console.log('button works!')
  api.getBooks()
    .then(ui.getBooksSuccess)
    .catch(ui.getBooksFailure)
}

const addHandlers = event => {
  $('.get').on('click', onGetBooks)
}

module.exports = {
  addHandlers
}
