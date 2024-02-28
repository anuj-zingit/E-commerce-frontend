import { useEffect } from 'react';  
import Navbar from './Navbar';
import Banner from './Banner';
import { getProduct } from '../../redux/action/ProductAction';
import { useDispatch , useSelector } from 'react-redux';
import Slider from './Slider';
import Midslide from './Midslide';
import Midbanner from './Midbanner';
function Home() {

    //this is calling from redux
    const getProducts=useSelector(state=>state.getProducts)
    const {products}=getProducts;
    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(getProduct())
    },[dispatch])

    return (
        <>
            <Navbar/>
            <div className='homebar'>
                <Banner/>
                <Midslide products={products} title="Deal Of the Day" timer={true}/>
                <Slider products={products} title="Discount for you" timer={false}/>
                <Midbanner/>
                <Slider products={products} title="Suggesting Time" timer={false}/>
                <Slider products={products} title="Top Selection" timer={false}/>
                <Slider products={products} title="Recommended Items" timer={false}/>
                <Slider products={products} title="Tranding Offers" timer={false}/>
                <Slider products={products} title="Session's top Picks" timer={false}/>
                <Slider products={products} title="Top Deals On the Accessories" timer={false}/>                                                                                                                                                                                                                                                                                                                                                                       
            </div>
        </>
    )
}
export default Home;