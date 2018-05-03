import * as QRCode from 'qrcode';
import * as express from 'express';
import * as http from 'http';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import api_routes from './api_routes';

const app = express();
const port: string = process.env.PORT || '8081';
const server = http.createServer(app);

app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', api_routes);
// app.use(
//   express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 })
// );

app.get('/', (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

server.listen(port, () => {
  console.log('Magic happens on port 8081');
});
