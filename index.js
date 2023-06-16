const fastify = require('fastify')();
const { join } = require('path');
const swaggerUi = require('@fastify/swagger');

const swaggerOptions = {
  routePrefix: '/docs',
  swagger: {
    info: {
      title: 'Fastify Swagger',
      description: 'API Documentation using Fastify and Swagger',
      version: '1.0.0',
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here',
    },
    host: 'localhost:3000',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
  },
  exposeRoute: true,
};

fastify.register(swaggerUi, swaggerOptions);

fastify.get('/', (request, reply) => {
  reply.send({ message: 'Hello, World!' });
});

const start = async () => {
  try {
    await fastify.listen(3000);
    console.log('Server started on port 3000');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
