const resolvers = {
  // QUERY
  Query: {
    books: async (par, arg, ctx) => await ctx.getBooks(),
    authors: async (par, arg, ctx) => await ctx.getAuthors(),
    book: async (par, arg, ctx) => await ctx.getBookById(arg.id),
    author: async (par, arg, ctx) => await ctx.getAuthorById(arg.id),
    blogs: async (par, arg, ctx) => await ctx.getBlogs(),
  },
  Book: {
    author: async (par, arg, ctx) => await ctx.getAuthorById(par.authorId),
  },
  Author: {
    books: async (par, arg, ctx) => await ctx.getBooks({ authorId: par.id }),
  },
  Blog: {},

  // MUTATION
  Mutation: {
    createBook: async (par, arg, ctx) => ctx.createBook(arg),
    createAuthor: async (par, arg, ctx) => ctx.createAuthor(arg),
    createBlog: async (par, arg, ctx) => ctx.createBlog(arg),
  },
}

module.exports = resolvers
