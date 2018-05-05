import { pool } from '../models/connection';
import { Request, Response } from 'express';
import { TicketsModel, TicketsModel_type } from '../models/tickets';
import * as QRCode from 'qrcode';
import { Md5 } from 'ts-md5';

export interface TicketsHandler_type {
  tm: TicketsModel_type;
  QRCode: any;
  md5: any;
  all(req: Request, res: Response): any;
  create(req: Request, res: Response): any;
}

export class TicketsHandler {
  public tm: TicketsModel_type;
  public QRCode = QRCode;
  public md5 = Md5;
  constructor() {
    this.tm = new TicketsModel(pool, 'tickets');
  }

  all = (req: Request, res: Response): any => {
    this.tm.find_all().then((data: any[]) => {
      let hash: string = this.md5.hashStr(data[0]) as string;
      this.QRCode.toDataURL(hash, (err, url) => {
        if (err) {
          console.log(err);
        }
        res.send(url);
      });
    });
  };
  // get_by_id(req: Request, res: Response) {}
  create = (req: Request, res: Response): any => {
    this.tm.newObj().then((data: any) => {
      res.send('woohoo');
    });
  };
}
