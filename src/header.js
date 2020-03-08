import React from 'react';
import './index.css'; 
import logo from './logo_forge-2-line.png'
import { Link } from 'react-router-dom'

class Header extends React.Component {

  render() {
    return (
        <header>
        <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/intro">Intro</Link>
        </li>
        <li>
          <Link to="/guide">Guide</Link>
        </li>
        <li>
          <Link to="/reference">Reference</Link>
        </li>
      </ul>
      </div>
      </header>
    )
  }

}
export default Header