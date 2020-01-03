'use strict'

const showBooksTemplate = require('./../templates/book-listing.handlebars')

const getBooksSuccess = data => {
  const showBooksHtml = showRunsTemplate({ books: data.books })
  $('.handlebars').html(showBooksHtml)
}

const getBooksFailure = () => {
  $('.handlebars').html('Something went wrong')
}

module.exports = getBooksSuccess
