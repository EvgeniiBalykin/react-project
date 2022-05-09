import React from "react";


class CounterC extends React.Component {
   state = {
      count: 1
   }

   onPlusClick = () => {
      this.setState({count: this.state.count + 1})
   }

   onMinusClick = () => {
      this.setState({count: this.state.count - 1})
   }

   render () {
      
      return (<div className='box'>
         <button onClick={this.onMinusClick}>-</button> 
         {this.state.count}
         <button onClick={this.onPlusClick}>+</button>
      </div>)
   }
}

export default CounterC