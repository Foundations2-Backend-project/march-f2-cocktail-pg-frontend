import { Component } from 'react';
// import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
  
  render() {
    return (
      <div className="Home">
        <h2>Welcome to the Cocktails Home Page!</h2>

        {/* <Link to='/cocktails'>Search Cocktails</Link> */}
      </div>
    );
  }

}