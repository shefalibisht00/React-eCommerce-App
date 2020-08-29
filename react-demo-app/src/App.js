import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import logo from './logo.svg';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      user: [],
      userSearchField: ''
    }

    this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount() {
    const apiEndpoint = 'https://jsonplaceholder.typicode.com/users'
    fetch(apiEndpoint)
    .then(response => response.json())
    .then(users => {
      this.setState({user: users});
      console.log(this.state.user);
     } );

  }

  handleChange(e) {
    this.setState( {userSearchField: e.target.value} );
  }


  render() {
    const {user, userSearchField} = this.state;
    const filterUserArray = user.filter( userItem =>
       userItem.name.toLowerCase().includes(userSearchField.toLowerCase())
    );


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">A Simple React App</h1>
        </header>
        <br/><br/>
     <div>
       <SearchBox placeholder='Search user..' handleChange=  { this.handleChange} />
     
       </div> <br/><br/>
       <div>
        <CardList userList= {filterUserArray} />  
        </div>
      </div>
    );
  }
}

export default App;
