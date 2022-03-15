import {Component} from 'react';
import BubbleAlert from './BubbleAlert';
import CartDetail from './CartDetail'

class Cart extends Component{
    render(){
        const{cart, visibility, showCart} = this.props
        const cuantity =cart.reduce((acc,el)=> acc + el.cuantity, 0)
        return(
          <div>
              <span >
                  {cuantity !==0
                    ?<BubbleAlert value ={cuantity}/>
                    :null}
              </span>
             <button onClick={showCart}  >
                CART
            </button>
            {visibility? <CartDetail cart={cart}/> : null}
          </div>
        )
    }
}
export default Cart;