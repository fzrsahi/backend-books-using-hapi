import { addNoteHandler, getAllBooksHandler } from './addBookHandler.js'
const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addNoteHandler
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler
  }
]

export default routes
