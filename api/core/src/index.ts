import { ServerlessAdapter } from '@h4ad/serverless-adapter';
import { FastifyFramework } from '@h4ad/serverless-adapter/lib/frameworks/fastify';
import { DefaultHandler } from '@h4ad/serverless-adapter/lib/handlers/default';
import { PromiseResolver } from '@h4ad/serverless-adapter/lib/resolvers/promise';
import { ApiGatewayV2Adapter } from '@h4ad/serverless-adapter/lib/adapters/aws';
import fastify from 'fastify';

const app = fastify();

app.get('/', async (request, reply) => {
    return { Hello: "World" };
})

let defaultHandler: any = app.listen({ port: 3000 }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})

if (require.main !== module) {
    defaultHandler = ServerlessAdapter.new(app)
        .setFramework(new FastifyFramework())
        .setHandler(new DefaultHandler())
        .setResolver(new PromiseResolver())
        .addAdapter(new ApiGatewayV2Adapter())
        .build();
}

export const handler = defaultHandler;