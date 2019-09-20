import React from 'react';
import logo from './logo.svg';
import { Form, Input, Tooltip, Button, Select, Checkbox, Icon } from "antd";
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="App">
        <Form>
        <Input
            placeholder="Enter your username"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            suffix={
              <Tooltip title="Extra information">
                <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
              </Tooltip>
            }
          />
        <Input.Password placeholder="input password" />
        <Button type="primary">Primary</Button>
        </Form>

      </div>
    );
  }  
}

export default App;
