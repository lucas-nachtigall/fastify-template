import fastify from 'fastify';

function server() {
    const app = fastify();

    app.get('/', async (request, reply) => {
        return { Hello: "World" };
    })
    return app;
}

if (require.main === module) {
    server().listen({ port: 3000 }, (err, address) => {
        if (err) {
            console.error(err)
            process.exit(1)
        }
        console.log(`Server listening at ${address}`)
    })
}

export default server;