import * as pg from 'pg';
// export const pool = new pg.Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: true
// });
export interface model_type {
  pool: pg.Pool;
  table: string;
  request(sql_query: string, params: any[]): any;
  find_all(): any;
  find_by_id(id: number): any;
  destroy_by_id(id: number): any;
}
export class Model<model_type> {
  public pool: pg.Pool;
  public table: string;
  constructor(pool: pg.Pool, table: string) {
    this.pool = pool;
    this.table = table;
  }

  request = (sql_query: string, params: any[]) => {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client, done) => {
        if (err) {
          done();
          return reject(err);
        }
        client.query(sql_query, params, (err, result) => {
          done();
          if (err) {
            reject(err);
          }
          resolve(result.rows);
        });
      });
    });
  };

  find_all = () => {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client, done) => {
        if (err) {
          done();
          return reject(err);
        }
        client.query(`SELECT * FROM ${this.table}`, (err, result) => {
          done();
          if (err) {
            console.log(err);
            reject(err);
          }
          resolve(result.rows);
        });
      });
    });
  };

  find_by_id = (id: number) => {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client, done) => {
        if (err) {
          done();
          return reject(err);
        }

        client.query('SELECT * FROM $1 WHERE id=$2', [this.table, id], (err, result) => {
          done();
          if (err) {
            reject(err);
          }
          resolve(result.rows);
        });
      });
    });
  };

  destroy_by_id = (id: number): any => {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client, done) => {
        if (err) {
          done();
          return reject(err);
        }
        client.query('DELETE FROM $1 WHERE id=$2', [this.table, id], (err, result) => {
          done();
          if (err) {
            reject(err);
          }
          resolve(result);
        });
      });
    });
  };
}
