import React from 'react';
import logo from './logo.svg';
import { Form, Input, Tooltip, Button, Select, Checkbox, Icon } from "antd";
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      errorText : ''
    }
  }

  onTextChange = (e) => {
     const { name, value } = e.target;     
    this.setState((prevState, prevProps)=>{
      // below is incorrect way of wrting, it will throw error- learn why?
      //return {[e.target.value]: e.target.value}
      return {[name]: value}
    })
  }

  isValid = () =>{
    const { username, password } = this.state;
    if(username.length === 0 || password.length === 0){
        this.setState({errorText:'Enter Username and Password before hititng submit button'});
      return false;
    }
    if(username.indexOf('@gmail.com') !== -1 || username.indexOf('@rsrit.com')){
      this.setState({errorText:'Should be an email from Gmail or Rsrit'});
    return false;
  }
    return true;
  }

  handleSubmit = e => {
    e.preventDefault();   
    if(this.isValid()){
      console.log(" username : "+this.state.username);
      console.log(" password : "+this.state.password);
    }  
};
  render(){
    return (
      <div className="App">
        <Form>
        <Input
            placeholder="Enter your username"
            name="username"
            value={this.state.username}
            onChange={this.onTextChange}
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            suffix={
              <Tooltip title="Enter you user name">
                <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
              </Tooltip>
            }
          />
        <Input.Password name="password" onChange={this.onTextChange} value={this.state.password} placeholder="input password" />
        <Button type="primary" onClick={this.handleSubmit}>Login</Button>
        </Form>
      </div>
    );
  }  
}

export default App;
