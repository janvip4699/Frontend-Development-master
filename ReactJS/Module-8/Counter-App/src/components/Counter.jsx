import React, { Component } from 'react';
class Counter extends Component {
   render()
 {
      const {counter,increment,decrement,reset} = this.props;
      return (
         <div className = "container p-5 mt-5 shadow mx-auto w-50">
            <div className='fs-4'>{counter}</div>
            <div>
               <button onClick = {increment} className='ms-2 btn btn-md btn-success mt-2'>INCREMENT BY 1</button>
            </div>
            <div>
               <button onClick = {decrement} className='ms-2 btn btn-md btn-primary mt-2'>DECREMENT BY 1</button>
            </div>
            <button onClick = {reset} className='ms-2 btn btn-md btn-danger mt-2'>RESET</button>
         </div>
      );
   }
}
export default Counter;
