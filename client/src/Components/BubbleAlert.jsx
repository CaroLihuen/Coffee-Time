import { Component } from "react";

class BubbleAlert extends Component{
    getNumber(n){
        if(!n){return ' '}
        return n > 9? '10+' : n
    }
    render(){
        const{value} =this.props
        return(
            <span>
                {this.getNumber(value)}
            </span>
        )
    }
}

export default BubbleAlert