const fastify = require('fastify')();

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
