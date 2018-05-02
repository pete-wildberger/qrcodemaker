import * as QRCode from 'qrcode';
import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import api_routes from './api_routes';

const app = express();
const port = process.env.PORT || 8081;

app.use(express.static('client/build'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', api_routes);

app.listen(port);

console.log('Magic happens on port 8081');
