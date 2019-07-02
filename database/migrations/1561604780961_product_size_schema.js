'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

/**
 * Cm para pizzas (pequena, média, grande)
 * Lata, 600ml, 1000ml, 2000ml
 */
class ProductSizeSchema extends Schema {
  up () {
    this.create('product_sizes', (table) => {
      table.increments()
      table.string('size').notNullable() // Tamanho das coisas
      table
        .integer('product_type_id')
        .unsigned()
        .references('id')
        .inTable('product_types')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('product_sizes')
  }
}

module.exports = ProductSizeSchema
