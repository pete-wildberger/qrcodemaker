import { Request, Response } from 'express';
import { TicketModel, TicketModel_type } from '../models/tickets';
import { qrcoder } from '../utils/qrcoder';

export interface TicketsHandler_type {
  tm: TicketModel_type;
  all(req: Request, res: Response): any
  create(req: Request, res: Response):any
}

export class TicketsHandler {
  public tm: TicketModel_type;
  constructor() {
    this.tm = new TicketModel();
  }
  all(req: Request, res: Response): any {
    res.send('woohoo');
  }
  // get_by_id(req: Request, res: Response) {}
  create = (req: Request, res: Response): any => {
    this.tm.create().then( (data:any) => {
      res.send('woohoo');
    });

  }
}
