import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Removecart, addqty, dacqty } from '../reducer/cartSlice';
import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

export default function Cart() {

    const data = useSelector((state) => state.cart.carts);
    const fintotal = useSelector((state) => state.cart.grandTotal);
    const dispatch = useDispatch();
    console.log('datas', data);
    // const [datas, SetDatas] = useState(null)

    // useEffect(() => {
    //     //JSON.parse convat to string to array from 
    //     const items = JSON.parse(localStorage.getItem('itemse'));
    //     SetDatas(items);
    //     // console.log('localstorege',items);
    // }, [])

    // const removeitem = (id) => {
    //     dispatch(Removecart(id))

    //     //data remove from table
    //     let removedata = datas.filter((item, index) => {
    //         return index != id
    //     })
    //     // Update state with new data
    //     SetDatas(removedata);
    // }


    // console.log('qtyyy', Qty.qty);

    useEffect(() => {
        if (data == '') {
            setTimeout(() => {
                toast.error(`cart is empty`, {
                    position: "bottom-right",
                    // className: 'foo-bar',
                    autoClose: 1500,
                    pauseOnHover: true,
                })
            }, 200)
        }
    }, [data])
    return (
        <>
            <div className="container">
                <Link to={`/`} className='text-de'>
                    <h6 className='mt-2'>Back To Shopping</h6>
                </Link>

                <table className='table tables mt-4'>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>SubTotal</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((item, index) => {
                                return (
                                    <tr key={index} className='cartdetails'>
                                        <td>{index + 1}</td>
                                        <td><img src={item.thumbnail} /></td>
                                        <td>{item.title}</td>
                                        <td>${item.price}</td>
                                        <td>
                                            <div  className='qty d-flex justify-content-center align-items-center gap-2'>
                                                <button className='btn btn-info' onClick={() => dispatch(dacqty(index))}> - </button>
                                                <span>{item.qty}</span>
                                                <button className='btn btn-primary' onClick={() => dispatch(addqty(index))}> + </button>
                                            </div>
                                        </td>
                                        <td>${item.total}</td>
                                        <td><button onClick={() => dispatch(Removecart(index))} className='btn btn-info'>remove</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className='fixed-bottom finaltotal py-2 cartbottom'>
                <div className="container d-flex justify-content-between align-items-center">
                    <h5 className='m-0'>FinalTotal : ${fintotal}</h5>
                    <Link to={`/checkout`}>
                        <button>Proceed to checkout</button>
                    </Link>
                </div>
            </div>
        </>
    )
}
