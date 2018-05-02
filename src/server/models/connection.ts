import * as pg from 'pg';

// export const pool = new pg.Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: true
// });

export default class db {
  private pool;
  private config;
  constructor() {
    this.config = {
      host: 'localhost',
      database: 'eventTracker'
    };
    this.pool = new pg.Pool(this.config);
  }

  query = (queryString:string) => {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client, done) => {
        if (err) {
          done();
        return reject(err);
      }
      client.query(queryString, (err, result) => {
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
