//thanks to :
//https://www.npmjs.com/package/supertest
//https://dev.to/nedsoft/testing-nodejs-express-api-with-jest-and-supertest-1km6
import 'babel-polyfill'
const request = require('supertest')
const { app } = require('../index')

describe('test the main path "/" ', () => {
  test('server index load', (ok) => {
    request(app)
      .get('/')
      .then((res) => {
        expect(res.statusCode).toEqual(200)
        ok()
      })
  })
})

