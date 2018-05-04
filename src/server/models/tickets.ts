import { db, db_type } from './connection.js';

export interface TicketsModel_type {
  table: string;
  db: db_type;
  create(): any;
  remove(id: number): any;
}

export class TicketsModel {
  public db: db_type;
  public table: string;
  constructor() {
    this.db = new db();
    this.table = 'tickets';
  }
  create(): any {
    let query = 'INSERT INTO tickets(row, seat) VALUES($1, $2) RETURNING *';
    let params = [1, 2];
    return this.db.request(query, params);
  }
  remove(id: number): any {
    return this.db.remove_by_id(this.table, id);
  }
}
