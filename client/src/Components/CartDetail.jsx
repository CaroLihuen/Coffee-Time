import { Component } from "react";


class CartDetail extends Component{
    render(){
        const {cart}= this.props
        return(
            <div >
                <ul >
                    {cart.map(x=> 
                    <li  key={x.name}>
                        <img alt={x.name} src={x.img} width='50' height='32'/>
                        {x.name}
                        <span>{x.cuantity} </span>
                    </li>)}
                </ul>
                    
            </div>
        )
    }
}

export default CartDetail