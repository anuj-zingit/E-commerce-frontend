import React, { useState, useEffect } from 'react';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../redux/action/ProductAction';
import { Link } from 'react-router-dom';
function SearchBar() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const getProducts = useSelector(state => state.getProducts);
  const { products } = getProducts;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <div id='InputBase'>
      <div className='searchbar_input '>
        <InputBase onChange={handleChange} className='searchprod' placeholder='Search for products, brands and more' />
        <SearchIcon className='searchIcon' />
      </div>
      {text && (<>
        <div className='searchbar_list'>
        <ul>
          {
            products
              .filter(obj => obj.title.longTitle.toLowerCase().includes(text.toLowerCase()))
              .map(data => (
                <li key={data.index}>
                  <Link to={`detail/${data.id}`}>
                  {data.title.longTitle}
                  </Link>
                
                </li>
              ))
          }
        </ul>
      </div>
      </>)}
    </div>
  );
}

export default SearchBar;
