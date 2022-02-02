import React from 'react';

// CSS
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

// JS
import Button from './components/Button';
import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay';



class App extends React.Component {

  constructor() {
    super();
    this.state = {
      activeTabs: 'add',
      items: []
    }
    this.selectAdd = this.selectAdd.bind(this)
    this.selectList = this.selectList.bind(this)
    this.selectPay = this.selectPay.bind(this)
    this.add = this.add.bind(this)
  }

  selectAdd(e) {
    console.log(e)
    this.setState({
      activeTabs: 'add'
    })
  }

  selectList() {
    this.setState({
      activeTabs: 'list'
    })
  }

  selectPay() {
    this.setState({
      activeTabs: 'pay'
    })
  }

  add(name, price) {
    const obj = {
      name: name,
      price: price
    }
    const newList = this.state.items
    newList.push(obj)
    this.setState({
      items: newList
    })
  }

  renderContent = () => {
    switch(this.state.activeTabs) {
      case 'add':
        return <Add addItem={this.add}></Add>
      case 'list':
        return <List listItems={this.state.items}></List>
      case 'pay':
        return <Pay></Pay>
      default:
        return console.log("Error");
      
    }
  }

  render() {
    return (
      <div className="App" >
        <Button onClick={this.selectAdd} isSelected={this.state.activeTabs === 'add' ? true : false}> Add </Button>

        <Button onClick={this.selectList} isSelected={this.state.activeTabs === 'list' ? true : false}> List </Button>

        <Button onClick={this.selectPay} isSelected={this.state.activeTabs === 'pay' ? true : false}> Pay </Button>

        {this.renderContent()}

        
      </div>
    );
  }
}

export default App;