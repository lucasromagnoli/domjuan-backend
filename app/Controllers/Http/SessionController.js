'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User')

class SessionController {
  async store ({ request, auth }) {
    const { email, password } = request.all()

    const user = await User.findByOrFail('email', email)
    const isAdmin = user.admin

    if (!isAdmin) return

    const token = await auth.attempt(email, password)

    return token
  }
}

module.exports = SessionController
