import { addNoteHandler, getAllBooksHandler, getNoteByIdHandler } from './addBookHandler.js'
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
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getNoteByIdHandler
  }
]

export default routes
