import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Col, Row } from 'react-bootstrap';
import CartItem from './CartItem'
import TotalView from './TotalView';
import EmptyCart from './EmptyCart';

function Cart() {
    const { cartItems } = useSelector(state => state.cartItem)
    console.log(cartItems, 'cartItems')
    return (
        <>
         {
            cartItems.length ?
                <div className='cartItem-outer'>
                    <Row>
                        <Col xs={9}>
                            <div>
                                <h2>My Cart({cartItems.length})</h2>
                            </div>
                            <div>
                                <CartItem cartItem={cartItems} />
                            </div>
                        </Col>
                        <Col xs={3}>
                            <TotalView cartItems={cartItems} />
                        </Col>
                    </Row>
                </div> :
                <EmptyCart />
        }
        </>
       
        
    )
}

export default Cart