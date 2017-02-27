'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const OAuth = require('./oauth')
const Cart = require('./cart')
const Line_Item = require('./line_item')

OAuth.belongsTo(User)
User.hasOne(OAuth)
Cart.belongsTo(User)

module.exports = {User, Cart, Line_Item}
