const fastify = require('fastify')({ logger: true });

function init() {
  const app = fastify();
  app.get('/', (request, reply) => reply.send({ hello: 'world' }));
  return app;
}

if (require.main === module) {
  init().listen({ port: 3000 }, (err) => {
    if (err) console.error(err);
    console.log('server listening on http://localhost:3000');
  });
} else {
  module.exports = init
}