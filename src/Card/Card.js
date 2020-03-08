import React from 'react';
import '../index.css'; 
import { Link } from 'react-router-dom'

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    fetch('./data/data.json')
    .then((response) => response.json())
    .then((findresponse)=>{
      this.setState({
        data: findresponse
      });
    });
  } 

  render() {
    return (
    <div className="container">{this.state.data.map(item => <div className="card">
      <h1 className="card-title">{item.title}</h1>
      <p className="card-des">{item.description}</p>
      <Link to="/intro" className="card-link">Intro</Link>
      <Link to="/guide" className="card-link">Guide</Link>
      <Link to="/reference" className="card-link">Reference</Link>
      
      </div>)} </div>
    )
  }

}
export default Card