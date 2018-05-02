import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import handlers from './handlers';

const api = express.Router();
const tickets = express.Router();

api.use(bodyParser.json());

tickets.get('/:id', handlers.tickets.get_by_id);
api.use('/ticket', tickets);

export default api;
