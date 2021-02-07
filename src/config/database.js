const Knex = require('knex')
const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)

module.exports = knex

// inserindo
/*knex('users').insert({
  name: 'Teste',
  email: 'teste@teste.com',
  password: 'teste'
}).then(data => {
  console.log(data)
})*/

// pesquisando
knex('users').then(result => {
  console.log(result)
})