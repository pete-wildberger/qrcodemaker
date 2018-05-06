import * as React from 'react';
import axios from 'axios';
import * as moment from 'moment';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Ticket from './Ticket';

interface state_type {
  isFetching: boolean;
  ticket: any;
}
class Display extends React.Component {
  state: state_type;
  constructor(props: any) {
    super(props);
    this.state = {
      isFetching: true,
      ticket: {}
    };
    this.getTickets = this.getTickets.bind(this);
    this.makeTicket = this.makeTicket.bind(this);
  }

  getTickets() {
    axios.get('/api/tickets/').then(data => {
      this.setState({ ticket: data.data, isFetching: false });
      console.log(this.state);
    });
  }
  makeTicket(ticket: any) {
    console.log(ticket);
    return (
      <div className="row border">
        <div className="col-3">
          <img src={ticket.code} />
        </div>
        <div className="col-9">
          <p>TICKET # {ticket.num}</p>
          <p>ROW: {ticket.row}</p>
          <p>SEAT: {ticket.seat}</p>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.getTickets();
  }
  render() {
    if (this.state.isFetching == true) {
      return (
        <div>
          <img className="center-img" src="https://media.giphy.com/media/26BRA7WJEcn7yJy3C/giphy.gif" alt="Loading" />
        </div>
      );
    } else {
      return (
        <div className="app">
          <Header />
          {this.makeTicket(this.state.ticket)}
          <Footer />
        </div>
      );
    }
  }
}
export default Display;
