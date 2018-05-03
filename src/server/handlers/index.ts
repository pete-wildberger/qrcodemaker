import { TicketsHandler, TicketsHandler_type } from './tickets';

export interface handlers_type {
  tickets:TicketsHandler_type;
}
export const handlers:handlers_type = {
  tickets: new TicketsHandler() as TicketsHandler_type
};
