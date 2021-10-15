const Book = require('../models/Book')
const Author = require('../models/Author')
const Blog = require('../models/Blog')

const mongoDBMethods = {
  // GET
  getBooks: async (detail) =>
    (await detail) ? Book.find(detail) : Book.find(),
  getBookById: async (id) => await Book.findById(id),
  getAuthors: async () => await Author.find(),
  getAuthorById: async (id) => await Author.findById(id),
  getBlogs: async () => await Blog.find(),

  // PUT
  createBook: async (arg) => {
    const newBook = new Book(arg)
    return await newBook.save()
  },
  createAuthor: async (arg) => {
    const newAuthor = new Author(arg)
    return await newAuthor.save()
  },
  createBlog: async (arg) => {
    const newBlog = new Blog(arg)
    return await newBlog.save()
  },

  // DELETE
}

module.exports = mongoDBMethods
