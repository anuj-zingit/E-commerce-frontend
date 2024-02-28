import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Remove_From_Cart } from '../../redux/action/CardAction'
import GroupButton from './GroupButton'
function CartItem({ cartItem }) {
    const dispatch = useDispatch()

    const handleRemove = (id) => {
        dispatch(Remove_From_Cart(id))
    }
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    return (
        <Row>
            {cartItem.length > 0 && cartItem.map(
                (item) => {
                    return (
                        <>
                            <Col xs={2}>
                                <img src={item.detailUrl} style={{ width: 150, marginLeft: 10 }}   alt='detailUrl' />
                                 <GroupButton/>
                            </Col>
                            <Col xs={10}>
                                <p>{item.title.longTitle}</p>
                                <span>sellerFlipkaet</span>
                                <span><img src={fassured} style={{ width: 50, marginLeft: 10 }} alt='oo' /></span>
                                <div>
                                    <span>₹{item.price.cost}</span>
                                    <span>₹{item.price.mrp}</span>
                                    <span>{item.price.discount} off</span>
                                </div>
                                <Button onClick={()=>handleRemove(item.id)} >Remove</Button>
                            </Col>
                        </>
                    )
                }
            )
            }
        </Row>
    )
}

export default CartItem