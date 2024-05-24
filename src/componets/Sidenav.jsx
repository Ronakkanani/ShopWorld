import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import { Link, NavLink } from 'react-router-dom';

export default function Sidenav() {

    const [sidenav, setSidenav] = useState(null);

    useEffect(() => {
        // setTimeout(() => {
        axios({
            method: 'get',
            url: 'https://dummyjson.com/products/category-list',
        })
        .then(function (response) {
                // console.log('value', response)
                setSidenav(response.data)
            });
        // }, 1000);
    }, [])

    return (
        <>
            <div className="slidenav">
                <ul>
                    {
                        sidenav == null
                            ?
                            ''
                            :
                            <>
                                <NavLink className='nav-link navlink' to={`/`}> <li className='px-2'> All category</li></NavLink>
                                {
                                    sidenav.map((item, index) => {
                                        return (
                                            <NavLink className='nav-link navlink' to={`/${item}`}> <li key={index} className='px-2'>{item}</li></NavLink>
                                        )
                                    })
                                }
                            </>
                    }
                </ul>
            </div>
        </>
    )
}
