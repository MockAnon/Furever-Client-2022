import React, { Component, withRouter, useHistory } from 'react';

import logo from './logo.svg';
// import './App.css';
import NavbarMain from './componets/Navbar/Navbar';
import Footer from './componets/Footer/Footer';
import Main from './componets/Main';
import './assets/styles/App.scss';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showClippy: false,
      clippyTextkey: 'empty',
      message: ''
    };
  }


  
  render() {
    return (
      <React.Fragment>
        <NavbarMain />
        <div className="App">
          <Main showClippy={this.showClippy} />
        </div>
        <Footer showClippy={this.showClippy} show={this.state.showClippy} textKey={this.state.clippyTextkey} message={this.state.message} />
      </React.Fragment>
    );
  }

  
  // function that is passed down to almost all components, enables clippy with a message
  showClippy = (toggle, key, message) => {
    if (this.state.clippyTextkey !== key) {
      this.setState({ showClippy: toggle, clippyTextkey: key, message });
    }
  };
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
