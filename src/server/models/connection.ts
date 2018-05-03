import * as pg from 'pg';

// export const pool = new pg.Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: true
// });
export interface db_type {
  pool: pg.Pool;
  config: {host:string, database: string};
  request(sql_query:string, params: any[]): any;
}
export class db<db_type> {

  public pool: pg.Pool;
  public config: {host:string, database: string};

  constructor() {
    this.config = {
      host: 'localhost',
      database: 'tickets'
    };
    this.pool = new pg.Pool(this.config);
  }

  request = (sql_query:string, params: any[]) => {
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
  }
}
