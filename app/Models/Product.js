'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
  type () {
    return this.hasMany('App/Models/ProductType')
  }
}

module.exports = Product
