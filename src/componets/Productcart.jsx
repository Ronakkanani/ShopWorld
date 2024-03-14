import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import { Link, useParams } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

export default function Productcart({ search }) {

    const [productcard, setProductcard] = useState(null);
    const [serachcard, setSerachcard] = useState(null);
    const { title } = useParams();
    // const [pagi, setPagi] = useState(0);
    const [temp, Settemp] = useState(true);

    // const dispatch = useDispatch();

    // const Additem = (item) => {
    //     dispatch(Addcart(item))
    // }

    useEffect(() => {
        setTimeout(() => {
            Settemp(false);
        }, 2000);
    }, [])

    useEffect(() => {
        // setTimeout(() => {
        let url
        if (title?.length > 0) {
            url = `https://dummyjson.com/products/category/${title}` // spafic catagory
        } else {
            // url = `https://dummyjson.com/products?limit=6&skip=${pagi}` //all catagory
            url = `https://dummyjson.com/products?limit=100&skip=0`
        }
        axios({
            method: 'get',
            url: url,
        })
            .then(function (response) {
                setSerachcard(response.data.products)
                setProductcard(response.data.products)
                // console.log('card', response);
            });
        // }, 1000)
    }, [title]);

    useEffect(() => {
        if (serachcard != null) {

            let filterdata = productcard.filter((item) => {
                return item.title.includes(search)
            });
            setSerachcard(filterdata)
        }
    }, [search]);

    console.log('product', productcard);

    // const nextbtn = () => {
    //     if (pagi == 96) {
    //         setPagi(0);
    //     } else {
    //         setPagi(pagi + 6);
    //     }
    //     console.log('pagi', pagi);
    // }

    // const prebtn = () => {
    //     if (pagi >= 6) {
    //         setPagi(pagi - 6);
    //     }
    // }
    return (
        <>
            {


                serachcard?.map((item, index) => {
                    return (
                        temp ?
                            <div className="col-lg-4 my-2">
                                <Skeleton variant="rounded" height={200} />
                                <Skeleton animation="wave" style={{ marginTop: '20px' }} width="35%" height={25} />
                                <Skeleton animation="wave" height={25} />
                                <Skeleton style={{ marginTop: '5px' }} width="45%" animation="wave" height={25} />
                                <Skeleton style={{ marginTop: '5px' }} animation="wave" width="80%" height={25} />
                            </div>
                            :
                            <div className="col-lg-4 col-md-6">
                                <Card className='cardRight p-0'>
                                    <Link to={`/detail/${item.id}`}>
                                        <Card.Img variant="top" src={item.thumbnail} loading='lazy' />
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text>{item.description}</Card.Text>
                                            <div className='d-flex justify-content-between'>
                                                <p style={{ color: 'green', fontWeight: 'bold' }}>Price : ${item.price}</p>
                                                <span className='text-black' style={{ fontWeight: 'normal' }}>{item.discountPercentage}%off</span>
                                                <span className='stock'><AiOutlineStock /> {item.stock} </span>
                                            </div>
                                        </Card.Body>
                                    </Link>
                                    {/* <div className='right_card_icon d-flex align-items-center justify-content-between'>
                                        <span className='star'>{item.rating}<FaStar /></span>
                                        <Button onClick={()=>dispatch(Addcart(item))}>Add Cart</Button>
                                        <Button>Buy Now</Button>
                                    </div> */}
                                </Card>
                            </div>
                    )
                })
            }
            {/* <div className='d-flex justify-content-center'>
                <button onClick={prebtn} className='btn btn-info mx-1' disabled={pagi == 0}>Prev</button>
                <button onClick={nextbtn} className='btn btn-primary'>Next</button>
            </div> */}
        </>
    )
}
