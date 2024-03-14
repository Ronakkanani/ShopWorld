import React, { useState } from 'react'
import { BsCart } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
export default function Header({ setSearch }) {

    const data = useSelector((state)=>state.cart.carts)

    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light headerMain bg-white shadow-sm py-3">
                <div className="container-fluid">
                    <Link className='nav-link' to={`/`}><a className="navbar-brand m-0 logo" href="#">Shopping App</a></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                        <form className="d-flex inputHeader justify-content-center w-100">
                            <input onChange={(e) => setSearch(e.target.value)} className="form-control me-2 shadow-none py-2" type="search" placeholder="Search" aria-label="Search" />
                            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                        </form>
                        <div className="icon d-flex align-items-center">
                            <Link to={`/cart`}>
                                <div className='d-flex position-relative'>
                                    <span className='position-absolute d-flex align-items-center justify-content-center'>{ data.length }</span>
                                    <BsCart />
                                </div>
                            </Link>
                        </div>
                        <a href="#" className=' btn ms-4 headerBtn'>SignIn</a>
                    </div>
                </div>
            </nav>
        </>
    )
}
