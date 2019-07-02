'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

/**
 * Sabor da pizza
 * Marca de refigerente
 */
class ProductTypeSchema extends Schema {
  up () {
    this.create('product_types', (table) => {
      table.increments()
      table.string('description').notNullable() // Sabor/Marca
      table
        .integer('product_id')
        .unsigned()
        .references('id')
        .inTable('products')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('products_type')
  }
}

module.exports = ProductTypeSchema
