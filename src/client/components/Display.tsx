import * as React from 'react';
import axios from 'axios';
import * as moment from 'moment';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

interface state_type {
  isFetching: boolean;
}
class Display extends React.Component {
  state: state_type;
  constructor(props: any) {
    super(props);
    this.state = {
      isFetching: true
    };
    // this.getShows = this.getShows.bind(this);
    // this.testNo = this.testNo.bind(this);
  }

  getShows() {
    axios.get('/events').then(data => {
      this.setState({ shows: data.data, isFetching: false });
    });
  }

  componentDidMount() {}
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
          <div className="body">{}</div>
          <Footer />
        </div>
      );
    }
  }
}
export default Display;
