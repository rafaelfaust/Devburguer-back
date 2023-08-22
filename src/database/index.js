import Sequelize from 'sequelize'
import mongoose from 'mongoose'


import User from '../app/models/User'
import Product from '../app/models/Product'
import Category from '../app/models/Category'

const models = [User, Product, Category]

class Database {
  constructor () {
    this.init()
    this.mongo()
  }

  init () {
    this.conection = new Sequelize('postgresql://postgres:8NlRuEC3zCK1sHaYTm2i@containers-us-west-149.railway.app:7227/railway')
    models
      .map((model) => model.init(this.conection))
      .map(model => model.associate && model.associate(this.conection.models))
  }

  mongo () {
    // eslint-disable-next-line no-unused-expressions
    this.mongoConnection - mongoose.connect(
      'mongodb://mongo:EWg7dSZfqF3hPYS8jFMG@containers-us-west-192.railway.app:5840',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
  }
}

export default new Database()
