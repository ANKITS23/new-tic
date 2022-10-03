import React, { Component } from 'react'

export class Spinner extends Component {
  render() {
    return (
      <div className=''>
        <img src='./images/Bean Eater-0.7s-131px.gif' 
        className='text-center my-0 mx-auto'
        alt='loading'/>
      </div>
    )
  }
}

export default Spinner;
