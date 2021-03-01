import React, { Component } from 'react';

class BookShelfChanger extends Component {
state= {
  statuses: [
  {name:"Move..",value:"move",id:0},
  {name:"Currently Reading",value:"currentlyReading",id:1},
  {name:"want To Read",value:"wantToRead",id:2},
  {name:"Read",value:"read",id:3},
  {name:"none",value:"none",id:4}],
  shelf: this.props.shelf
  }

  handleChange= event => {
    debugger;
    event.preventDefault();
    this.setState({
      shelf: event.target.value
    }, (() => {
    this.props.onShelfChange(this.props.book,this.state.shelf)
    }))
  }
    render() {
        return (
          <div className="book-shelf-changer">
          <select onChange={this.handleChange}>
            {this.state.statuses.map((status)=>(
              <option value={status.value} disabled={status.id===0}>{this.props.book.shelf===status.value? "✓"+ status.name:status.name}</option>
            ))}
          </select>
        </div>
        )
    }
}

export default BookShelfChanger