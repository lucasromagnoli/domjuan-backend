'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

/**
 * Sabor da pizza
 * Marca de refigerente
 */
class ProductTypesSchema extends Schema {
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
        .notNulalble()
      table.timestamps()
    })
  }

  down () {
    this.drop('product_types')
  }
}

module.exports = ProductTypesSchema
