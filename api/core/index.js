//Only runs on AWS

const awsLambdaFastify = require('@fastify/aws-lambda')
const app = require('./src/index')

const proxy = awsLambdaFastify(app, {
    decorateRequest: false
});

exports.handler = proxy