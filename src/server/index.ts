import * as http from 'http';
import App from './app';

const port: string = process.env.PORT || '8081';
const server = http.createServer(App);
server.listen(port, () => {
	console.log('Magic happens on port 8081');
});
