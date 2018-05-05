import * as React from 'react';
import axios from 'axios';
import * as moment from 'moment';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

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
    return (
      <div>
        <h2>ID</h2>
        <p>{ticket.num}</p>
        <h2>ROW</h2>
        <p>{ticket.row}</p>
        <h2>SEAT</h2>
        <p>{ticket.seat}</p>
        <img src={ticket.code} />
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
          <div className="body">{this.makeTicket(this.state.ticket)}</div>
          <Footer />
        </div>
      );
    }
  }
}
export default Display;
