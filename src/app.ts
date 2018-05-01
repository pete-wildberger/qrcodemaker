import * as QRCode from 'qrcode';
import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 8081;
const router = express.Router();

app.use(express.static('client/build'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use('/', )

// app.get('/', (req, res) => {
//   console.log('base url hit');
//   QRCode.toDataURL('I am a pony!',  (err, url) => {
//     console.log(url);
//   })
//   res.sendFile(path.resolve(__dirname, 'index.html'));
// });

app.listen(port);

console.log('Magic happens on port 8081');
