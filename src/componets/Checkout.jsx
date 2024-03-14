import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

export default function Checkout() {
    const data = useSelector((state) => state.cart.carts);
    const fintotal = useSelector((state) => state.cart.grandTotal);
    const dispatch = useDispatch();


    const clear = () => {
        localStorage.clear();
        toast.success(`your order has been placed successfully`, {
            position: "bottom-right",
            // className: 'foo-bar',
            autoClose: 1000,
            pauseOnHover: true,
        })
        setTimeout(() => {
            window.location.reload(true);
        }, 1500)
    }

    return (
        <>
            <div className="container py-4">
                <div className="row">
                    <div className="col-6">
                        <div className="forms">
                            <h3>Billing Details</h3>
                            <form className='row needs-validation'>
                                <div className="col-12">
                                    <label for="validationCustom04" className="form-label">Country</label>
                                    <select className="rounded-0 mb-4 shadow-none form-select" id="validationCustom04" required>
                                        <option>India</option>
                                        <option>Bangladesh</option>
                                        <option>Algeria</option>
                                        <option>Afghanistan</option>
                                        <option>Bahrain</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid state.
                                    </div>
                                </div>
                                <div className="col-6">
                                    <label for="validationCustom01" class="form-label">First Name</label>
                                    <input type="text" class="rounded-0 mb-4 shadow-none form-control" id="validationCustom01" required />
                                </div>
                                <div className="col-6">
                                    <label for="validationCustom01" class="form-label">Last Name</label>
                                    <input type="text" class="rounded-0 mb-4 shadow-none form-control" id="validationCustom01" required />
                                </div>
                                <div className="col-12">
                                    <label for="validationCustom01" class="form-label">Company Name</label>
                                    <input type="text" class="rounded-0 mb-4 shadow-none form-control" id="validationCustom01" required />
                                </div>
                                <div className="col-12">
                                    <label for="validationCustom01" class="form-label">Address</label>
                                    <input type="text" class="rounded-0 mb-4 shadow-none form-control" id="validationCustom01" required />
                                </div>
                                <div className="col-12">
                                    <label for="validationCustom01" class="form-label">Apartment, suite, unit etc. (optional)</label>
                                    <input type="text" class="rounded-0 mb-4 shadow-none form-control" id="validationCustom01" required />
                                </div>
                                <div className="col-12">
                                    <label for="validationCustom01" class="form-label">Town / City</label>
                                    <input type="text" class="rounded-0 mb-4 shadow-none form-control" id="validationCustom01" required />
                                </div>
                                <div className="col-6">
                                    <label for="validationCustom01" class="form-label">State / County</label>
                                    <input type="text" class="rounded-0 mb-4 shadow-none form-control" id="validationCustom01" required />
                                </div>
                                <div className="col-6">
                                    <label for="validationCustom01" class="form-label">Postcode / Zip</label>
                                    <input type="text" class="rounded-0 mb-4 shadow-none form-control" id="validationCustom01" required />
                                </div>
                                <div className="col-6">
                                    <label for="validationCustom01" class="form-label">Email Address </label>
                                    <input type="text" class="rounded-0 mb-4 shadow-none form-control" id="validationCustom01" required />
                                </div>
                                <div className="col-6">
                                    <label for="validationCustom01" class="form-label">Phone</label>
                                    <input type="text" class="rounded-0 mb-4 shadow-none form-control" id="validationCustom01" required />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className='rightmain'>
                            <h3>Your order</h3>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        {/* <th>Qty</th> */}
                                        <th>SubTotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data?.map((item, index) => {
                                            return (
                                                <tr>
                                                    <td>{item.title} <span>x</span> <b>{item.qty}</b></td>
                                                    {/* <td>{item.qty}</td> */}
                                                    <td>${item.total}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th className='border-0'>Order Total</th>
                                        <th className='border-0'>${fintotal}</th>
                                    </tr>
                                </tfoot>
                            </table>
                            <div className='payment mt-5'>
                                <h5>Payment Method</h5>
                                <p className='mt-3'>You need to pay it with your prefable methods</p>
                                <div>
                                    <label>
                                        <input type="radio" className='me-3 mb-3' name="payment" />
                                        Pay later
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input type="radio" className='me-3 mb-3' name="payment" />
                                        Mobile Payment
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input type="radio" className='me-3 mb-3' name="payment" />
                                        Pay with Paypal
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input type="radio" className='me-3' name="payment" />
                                        Pay with Visa/Mastercard
                                    </label>
                                </div>
                                <button onClick={() => clear()} className='mt-4'>Place order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
