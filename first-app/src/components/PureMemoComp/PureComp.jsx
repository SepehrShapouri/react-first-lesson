import React, { Component, PureComponent } from 'react';
class PureComp extends PureComponent {
    render() { 
        console.log("pure component rendered")
        return (
            <div>pure component - {this.props.name}</div>
        );
    }
}
 
export default PureComp;