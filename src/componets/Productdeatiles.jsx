import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import { useDispatch } from 'react-redux'
import { Addcart } from '../reducer/cartSlice';

export default function Productdeatiles() {

    const [details, setDetails] = useState(null);
    let { id } = useParams();
    const { title } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        let url;
        if (title?.length > 0) {
            url = `https://dummyjson.com/products/category/${title}`
        } else {
            url = `https://dummyjson.com/products/${id}`
        }
        axios({
            method: 'get',
            url: url,
        })
            .then(function (response) {
                console.log('value', response)
                setDetails(response.data)
            });
    }, [])



    return (
        <>
            {
                details == null
                    ?
                    <div className='loders loders3 d-flex justify-content-center align-items-center'>
                        <div class="spinner1 spinner2">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    :
                    <div className="container-fluid mt-4">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <div className="main-wepper">
                                    <nav aria-label="breadcrumb">
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item">
                                                <Link to={`/`}>
                                                    <a>All Category</a>
                                                </Link>
                                            </li>
                                            <li class="breadcrumb-item">
                                                <Link to={`/${details.category}`}>
                                                    <a>{details.category}</a>
                                                </Link>
                                            </li>
                                            <li class="breadcrumb-item active" aria-current="page"><a>{details.title}</a></li>
                                        </ol>
                                    </nav>
                                    <div className="img-content d-flex mt-3">
                                        <div className='img-slide w-auto'>
                                            <ul id="myTab" role="tablist" >
                                                <li className="nav-item" role="presentation">
                                                    <img className='active' id="home-tab" data-bs-toggle="tab" data-bs-target="#home" role="tab" aria-controls="home" aria-selected="true" src={details.images} alt="" loading='lazy' />
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <img id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" role="tab" aria-controls="profile" aria-selected="false" src={details.images} alt="" loading='lazy' />
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <img id="about-tab" data-bs-toggle="tab" data-bs-target="#about" role="tab" aria-controls="about" aria-selected="false" src={details.images} alt="" loading='lazy' />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="main-img w-100 ms-3">
                                            <div class="tab-content" id="myTabContent">
                                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                    <img src={details.images} alt="" loading='lazy' />
                                                </div>
                                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                                    <img src={details.images} alt="" loading='lazy' />
                                                </div>
                                                <div class="tab-pane fade" id="about" role="tabpanel" aria-labelledby="about-tab">
                                                    <img src={details.images} alt="" loading='lazy' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center mt-3'>
                                        <button className='btn btn-info me-3'>Buy Now</button>
                                        <button className='btn btn-primary' onClick={() => {
                                            // details.qty == 1 ? console.log(false) : details.qty = 1
                                            // qty = 1
                                            dispatch(Addcart(details)) 
                                            //data dispatch in cart
                                        }}>Add Cart</button>
                                    </div>

                                </div>
                            </div>
                            <div className="col-6">
                                <div className="inner_data">
                                    <h5 className='mt-2'>{details.title}</h5>
                                    <p>{details.description}</p>
                                    <span className='star' ><FaStar className='me-1' />{details.rating}</span>
                                    <span className='stock ms-3'><AiOutlineStock /> {details.stock} </span>
                                    <h4 className='mt-3 d-flex align-items-center'>${details.price} <span>{details.discountPercentage} %off</span> </h4>
                                    <p>Our shopping website makes online shopping faster, easier, and more rewarding than ever. Our clean, modern interface allows you to quickly filter and find exactly what you're looking for. We partner with thousands of top retailers and brands to bring you the latest styles and products at competitive prices. Check back daily for new deals and discounts to get the items you love for less. <br /> With our shopping website, online shopping is a pleasure, not a chore. Spend less time searching and more time enjoying easy, seamless purchases shipped straight to your door. Join millions who have made us their go-to online shopping destination. </p>
                                </div>
                            </div>
                        </div>
                    </div >

            }
        </>
    )
}
