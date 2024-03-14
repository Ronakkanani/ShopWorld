import React, { useRef, useState } from 'react'
import Sidenav from './Sidenav'
import Productcart from './Productcart'
import Header from '../componets/Header'

export default function Home({ search }) {

    

    return (
        <>

            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3">
                            <Sidenav />
                        </div>
                        <div  className="col-9 mt-2 right-card mt-0">
                            <div className="row">
                                <Productcart search={search}  />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
