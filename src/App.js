import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dropdownView: false
    }
  }

  toggleDropdown = () => {
    this.setState({dropdownView: !this.state.dropdownView})
  }

  render(){
    return (
      <div className="App">
        <header className='main-header'>
          <nav className='logo'>Start Bootstrap</nav>
          <nav className='desktop-menu'>
            <span>SERVICES</span>
            <span>PORTFOLIO</span>
            <span>ABOUT</span>
            <span>TEAM</span>
            <span>CONTACT</span>
          </nav>
          <div className='dropdown' onClick={this.toggleDropdown}>Menu</div>
          {this.state.dropdownView
            ? (
              <nav className='mobile-menu'>
                <span>SERVICES</span>
                <span>PORTFOLIO</span>
                <span>ABOUT</span>
                <span>TEAM</span>
                <span>CONTACT</span>
              </nav>
            )
            : null}
        </header>
        <section className='main-body'>
          <img className='main-image' src='https://cdn.discordapp.com/attachments/715934007283548241/725414921659088936/option-1-header-bg.jpg' alt='Background'/>
        </section>
      </div>
    )
  }
}

export default App;
