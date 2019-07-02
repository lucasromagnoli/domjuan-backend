'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ProductType extends Model {
  product () {
    return this.belongsTo('App/Models/Product')
  }
  size () {
    return this.hasMany('App/Models/ProductSize')
  }
}

module.exports = ProductType
