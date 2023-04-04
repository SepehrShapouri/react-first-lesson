import React, { Component } from 'react';
class ClassTimer extends Component {
    state = { 
        count:0
     } 
     componentDidMount() {
        this.myTimer = setInterval(()=>{
            this.setState({count:this.state.count+1})
            console.log("hello")
        },1000)
     }
     componentWillUnmount(){
        clearInterval(this.myTimer)
     }
    render() { 
        return (
            <div>class interval</div>
        );
    }
}
 
export default ClassTimer
