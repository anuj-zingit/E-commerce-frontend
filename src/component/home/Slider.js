import React from 'react'
import "react-multi-carousel/lib/styles.css";
import { Divider } from '@mui/material';
import {Link} from "react-router-dom"
import Carousel from "react-multi-carousel";
import Countdown from 'react-countdown';
function Slider({ products, title, timer }) {
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    // Renderer callback with condition
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Carousel />;
        } else {
            // Render a countdown
            return <span className='timer'>{hours}:{minutes}:{seconds} Left</span>;
        }
    };

    return (
        <>
            <div className='d-flex timer-container'>
                <p>{title}</p>
                {
                    timer &&
                    <>
                        <div className='timmer'><img src={timerURL} alt='timerURL' /></div>
                        <Countdown className='timmer' date={Date.now() + 900000} renderer={renderer} />
                    </>
                }
            </div>
            <Divider />
            <div>
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                className='product-card'
                infinite={true}
                autoPlay={false}
                keyBoardControl={true}
                dotListClass="custom-dot-list-style"
                containerClass="carousel-container"
                itemClass="carousel-item-padding-40-px"
                autoPlaySpeed={1000}
            >
                {
                    products.map((data , index) => (
                        <Link to={`detail/${data.id}`}>
                        <div key={data.index} className='row'>
                            <div className='col-2.4 card-image slider-box'>
                                <img src={data.url} alt='bannerData' />
                                <p>{data.title.shortTitle}</p>
                                <p>{data.discount}</p>
                                <p>{data.tagline}</p>
                            </div>
                        </div>
                        </Link>
                    )
                    )
                }
            </Carousel>
            </div>
        </>
    )
}

export default Slider;
