import React from 'react'
import Items from './components/Items';
import {Paper, TextField} from '@material-ui/core';
import {Checkbox, Button} from '@material-ui/core';
import './App.css';

class App extends Items {
  state = { items: [], currentItem: "" }
  render() {
    const {items} = this.state;
    return (
      <div className="App flex">
        <Paper elevation={3} className="container">
          <div className="heading">Grocery List</div>
          <form onSubmit={this.handleSubmit} className="flex" style={{margin: "15px 0"}}>
            <TextField 
            variant="outlined" 
            size="small" 
            style={{width: "80%"}} 
            value={{this.state.currentItem}} 
            required={true} 
            onChange={this.handleChange}
            placeholder="Enter grocery item"/>
            <Button 
            style={{height: "40px"}}
            color="primary"
            variant="outlined"
            type="submit"
            >
              Add item
            </Button>
          </form>
        </Paper>
      </div>);
  }
}

export default App;
