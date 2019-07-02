'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Product = use('App/Models/Product')

class ProductController {
  async index ({ request }) {
    const { page } = request.get()

    const products = await Product.query()
      .with('type')
      .with('type.size')
      .paginate(page || 1)

    return products
  }
}

module.exports = ProductController
