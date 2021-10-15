const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Book {
    id: ID
    name: String
    genre: String
    author: Author
  }

  type Author {
    id: ID
    name: String
    age: Int
    books: [Book]
  }

  type Blog {
    id: ID
    title: String
    subTitle: String
    content: String
  }

  # ROOT TYPE
  type Query {
    book(id: ID!): Book
    author(id: ID!): Author
    books: [Book]
    authors: [Author]
    blogs: [Blog]
  }

  type Mutation {
    createAuthor(name: String, age: Int): Author
    createBook(name: String, genre: String, authorId: ID!): Book
    createBlog(title: String, subTitle: String, content: String): Blog
  }
`

module.exports = typeDefs
