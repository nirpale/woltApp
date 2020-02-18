import React, {Component} from 'react';
import Display from "./Display"; //import for the component with the actual code in it


class App extends Component {

    //the app.js renders and returns the display component and its code

  render() {
    return (
        <div className="App">
          <Display/>
        </div>
    )
  }
}
export default App;
