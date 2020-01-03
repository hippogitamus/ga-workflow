const api = require('./api.js')
// const ui = require('./ui.js')

const onGetBooks = (event) => {
  event.preventDefault()
  console.log('button works!')
  api.getBooks()
    .then(console.log('api works yayayaw'))
    .catch(console.error)
}

const addHandlers = event => {
  $('.get').on('click', onGetBooks)
}

module.exports = {
  addHandlers
}
