import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetail } from '../../redux/action/ProductAction';
import { useNavigate } from 'react-router-dom';
import { AddToCart } from '../../redux/action/CardAction';

function Detail() {
  const [quantity , setQuantity]=useState(1);
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const { id } = useParams();
  const { loading, product } = useSelector(state => state.getProductDetail);

  // Use a state variable to keep track of the number of API calls made
  const [apiCallsMade, setApiCallsMade] = useState(0);

  useEffect(() => {
    if (apiCallsMade < 1) {
      // Check if the number of API calls made is less than 3
      // and if the product is not available or the ID has changed
      if (!product || id !== product.id) {
        // Dispatch the action
        dispatch(getProductDetail(id));

        // Update the state to count the API call
        setApiCallsMade(apiCallsMade + 1);
      }
    }
  }, []);

  const handleAddToCArt=()=>{  
    dispatch(AddToCart(id ,quantity))
    navigate('/cart')
  }

  return (
      <div>
        {
          (!loading && product) ?
              <div className='row detail-page'>
                <div className='col-4'>
                  <img src={product.detailUrl} alt='productItem' />
                  <div className='detail-btn'>
                    <button onClick={handleAddToCArt} className='primary-btn'>Add to cart</button>
                    <button className='primary-btn'>Buy Now</button>
                  </div>
                </div>
                <div className='col-8'>
                  { 
                     (product.title!=undefined) && (product.title.longTitle)
                  }
                </div>
              </div>
            : 'loading'
        }
        <div>
        </div>
      </div>
  );
}

export default Detail;