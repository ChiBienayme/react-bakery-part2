import React, { Component } from 'react'

class List extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.listItems.map(curr => {
                        return ( <p>{curr.name} - {curr.price} </p>)
                    })}
                </ul>
                <button className='btn btn-danger'> Suprrimer </button>
            </div>
            
        )
    }
}
export default List