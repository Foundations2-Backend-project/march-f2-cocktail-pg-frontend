import { Component } from 'react';
import './Home.css';

export default class Home extends Component {
  
  render() {
    return (
      <div className="Home">
        <h2>Welcome to the Cocktails Home Page!</h2>

        <h3>Some fun facts about cocktails:</h3>
      
        <ul>
          <li>The screwdriver you order at the bar has a good reason for its name.
              What lengths would you go to, to have that margarita stirred, not shaken? 
              If grabbing the nearest tool on hand is your answer, then you understand 
              why Persian oil workers used screwdrivers to mix their cocktails. 
              And yes, that is where the screwdriver cocktail got its name.
          </li>
          {/* <br></br> use css to increase margin */}
          <li>Bottles of Jack Daniels are practically shaped. When the bartender pulls out a bottle of Jack Daniels to mix you a drink, you may recognize it in part because of its square shape. But did you know that the square shape is actually a practical idea and not just a branding gimmick? A square bottle is a stable bottle, which means your bottle of Jack Daniels gets to you with less chance of damage than the round bottles. Who knew? Incredible whiskey and some really practical thinking go hand in hand.</li>
        </ul>
      </div>
    );
  }

}