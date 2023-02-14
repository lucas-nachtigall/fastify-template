const fastify = require('fastify');
const awsLambdaFastify = require('@fastify/aws-lambda')

function init() {
  const app = fastify();
  app.get('/', (request, reply) => reply.send({ hello: 'world' }));
  return app;
}

if (require.main === module) {
  // called directly i.e. "node app"
  init().listen({ port: 3000 }, (err) => {
    if (err) console.error(err);
    console.log('server listening on http://localhost:3000');
  });
} else {
  // required as a module => executed on aws lambda
  const proxy = awsLambdaFastify(init())
  module.exports = proxy;
}