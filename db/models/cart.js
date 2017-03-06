'use strict'
const Sequelize = require('sequelize')
const db = require('APP/db')

const Cart = db.define('cart', {
  session_id: {
    type: Sequelize.STRING,
    unique: true
  }
})


//use product.price

module.exports = Cart
