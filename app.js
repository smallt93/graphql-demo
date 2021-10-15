const express = require('express');
const { ApolloServer } = require('apollo-server-express')
const mongoose = require('mongoose');

// Load schema & resolver
const typeDefs = require('./schema/schema')
const resolvers = require('./resolver/resolver')

// Load methods
const mongoDBMethods = require('./data/db')

// Connect to MongoDB
const connectDB = async (req, res) => {
  try {
    await mongoose.connect('mongodb+srv://nmtri931:trinm%4012@cluster0.rz4oe.mongodb.net/Cluster0?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  } catch (error) {
    console.log('error', error)
    process.exit(1)
  }
}

connectDB()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => mongoDBMethods
})

const app = express()
server.applyMiddleware({ app })

app.listen({ port: 4000 }, () => {
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
})
