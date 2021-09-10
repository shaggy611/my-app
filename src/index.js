import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/';
// import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(<App />, document.getElementById('root'));



// class WhoAmI extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       years: 26
//     } 
//     this.nextYear = this.nextYear.bind(this);
//   }

//   nextYear() {
//     console.log(1);
//     this.setState((state) => ({years: ++state.years}))
//   }

//   render() {
//     const {name, surname, link} = this.props; 
//     const {years} = this.state;

    
//     return (
//         <>
//         <h1>My name is {name}, surname - {surname}, years = {years}</h1>
//         <button onClick={this.nextYear}>++</button>
//         <a href={link}>My profile</a>
//         </>
//     )
//   }
// }




// const All = () => {
//   return (
//     <>
//     <WhoAmI name="John" surname="Smith" link="www.google.com "/>
//     <WhoAmI name="John" surname="Doe" link="www.google.com "/>
//     <WhoAmI name="Will" surname="Smith" link="www.google.com "/>
//     </>
//   )
// }

// ReactDOM.render(<All/>, document.getElementById('root'));






