import fastify from 'fastify';
import { PORT, NODE_ENV } from '../config/constants';

const server = fastify();

server.get('/ping', async (req, res) => {
	return 'pong';
});

server.listen(PORT, (err, address) => {
	if (err) {
		console.error(err);
		process.exit(1);
	}
	console.log(`Server listening at ${address}`);
});
