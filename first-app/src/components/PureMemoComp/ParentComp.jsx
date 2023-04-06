    import React, { Component } from 'react';
import MemoComp from './MemoComp';
import PureComp from './PureComp';
import RegComp from './RegComp';
    class ParentComponent extends Component {
        state = { 
            name:"sepehr"
         } 
         componentDidMount() {
            setInterval(()=>{
                this.setState({name:"sepehr"})
            },1000)
         }
        render() { 
            console.log("parent comp rendered")
            return (
                <>
                <div>parent comp - {this.state.name}</div>
                <RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
                <MemoComp name={this.state.name}/>
                </>
            );
        }
    }
     
    export default ParentComponent;