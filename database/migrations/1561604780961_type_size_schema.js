'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

/**
 * Cm para pizzas (pequena, média, grande)
 * Lata, 600ml, 1000ml, 2000ml
 */
class TypeSizeSchema extends Schema {
  up () {
    this.create('type_sizes', (table) => {
      table.increments()
      table.string('size').notNullable() // Tamanho das coisas
      table.timestamps()
    })
  }

  down () {
    this.drop('type_sizes')
  }
}

module.exports = TypeSizeSchema
