const awsLambdaFastify = require('@fastify/aws-lambda')
const app = require('./index')

const proxy = awsLambdaFastify(app)
exports.handler = proxy