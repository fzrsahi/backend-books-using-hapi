/* eslint-disable no-unused-vars */
import { nanoid } from 'nanoid'
import books from './books.js'

// eslint-disable-next-line no-unused-vars
const addNoteHandler = (request, h) => {
  // eslint-disable-next-line no-unused-vars
  const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload

  const id = nanoid(16)
  const createdAt = new Date().toISOString()
  const updatedAt = createdAt
  // eslint-disable-next-line prefer-const
  let finished = false
  if (readPage === pageCount) {
    finished = true
  }
  const newBook = {
    name, year, author, summary, publisher, pageCount, readPage, reading, id, createdAt, updatedAt, finished
  }
  books.push(newBook)

  // eslint-disable-next-line array-callback-return
  const isSuccess = books.filter((book) => book.id === id).length > 0

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'buku berhasil ditambahkan',
      data: {
        // eslint-disable-next-line comma-dangle
        bookId: id,
      }
    })
    response.code(201)
    return response
  }
  const response = h.response({
    status: 'fail',
    message: 'Gagal menambahkan buku. Mohon isi nama buku'
  })
  response.code(500)
  return response
}

const getAllBooksHandler = () => ({
  status: 'success',
  data: {
    books
  }
})

const getNoteByIdHandler = (request, h) => {
  // eslint-disable-next-line no-undef
  const { id } = request.params
  const book = books.filter((n) => n.id === id)[0]
  if (book !== undefined) {
    return {
      status: 'success',
      data: {
        book
      }
    }
  }
  const response = h.response({
    status: 'fail',
    message: 'Catatan tidak ditemukan'
  })
  response.code(404)
  return response
}

export { addNoteHandler, getAllBooksHandler, getNoteByIdHandler }
