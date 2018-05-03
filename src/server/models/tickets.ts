import {db, db_type} from './connection.js';

export interface TicketModel_type{
  db:db_type;
  create():any
}

export class TicketModel {
  public db:db_type;
  constructor(){
    this.db = new db();
  }
  create():any{
    let query = 'INSERT INTO tickets(row, seat) VALUES($1, $2) RETURNING *'
    let params = [1, 2];
    return this.db.request(query, params);
  }
}
