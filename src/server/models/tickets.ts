import * as pg from 'pg';
import { Model, model_type } from './model.class';
import { pool } from './connection';

export interface TicketsModel_type extends Model<model_type> {
  newObj(): any;
  remove(id: number): any;
}

export class TicketsModel extends Model<model_type> {
  constructor(pool: pg.Pool, table: string) {
    super(pool, table);
    this.table = table;
  }
  newObj(): any {
    let query = 'INSERT INTO tickets(row, seat) VALUES($1, $2) RETURNING *';
    let params = [1, 2];
    return this.request(query, params);
  }
  remove(id: number): any {
    return this.destroy_by_id(id);
  }
}
