import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import { handlers } from './handlers';

const api = express.Router();
const tickets = express.Router();

api.use(bodyParser.json());

// tickets.get('/:id', handlers.tickets.get_by_id);
tickets.get('/', handlers.tickets.all);
tickets.post('/', handlers.tickets.create);
tickets.post('/more', handlers.tickets.create_many);
api.use('/tickets', tickets);

export default api;
