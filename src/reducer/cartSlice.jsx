import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
const initialState = {
    carts: JSON.parse(localStorage.getItem('itemse')) || [],
    grandTotal: JSON.parse(localStorage.getItem('gratotal')) || '',
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        Addcart: (state, action) => {
            console.log(action.payload);
            // action.payload.qty = 1;
            let addcart = action.payload;
            // addcart['qty'] = 1 // new add qty

            // Check if item already exists in cart
            let temp = state.carts.filter((item) => {
                return item.id == action.payload.id //  item.id == action.payload.id 0 j thy 
            })

            // console.log('datass',temp.length)
            if (temp.length == 0) {
                state.carts.push(addcart); //dta push in carts array
                addcart['qty'] = 1 // new add qty
                addcart['total'] = addcart.price //// new add total

                toast.success(`${addcart.title} Added Successfully`, {
                    position: "bottom-right",
                    // className: 'foo-bar',
                    pauseOnHover: true,
                    autoClose: 1800,
                })
            } else {
                toast.error(`${addcart.title} Already In Cart`, {
                    position: "bottom-right",
                    // className: 'foo-bar',
                    autoClose: 1800,
                    pauseOnHover: true,

                })
            }
            // Calculate grand total
            let alltotal = 0;
            state.carts.map((item) => {
                alltotal += item.total
            })
            state.grandTotal = alltotal

            //data store in localstorage
            //JSON.stringify array data convat in string
            localStorage.setItem('itemse', JSON.stringify(state.carts));
            localStorage.setItem('gratotal', JSON.stringify(state.grandTotal));

        },
        Removecart: (state, action) => {
            // let temp = action.payload //1
            // Action to remove item from cart

            //data remove in localstorge

            state.carts = state.carts.filter((item, index) => {
                return index != action.payload;  //return index != temp;
            })

            // Calculate grand total //update
            let alltotal = 0;
            state.carts.map((item) => {
                alltotal += Number(item.total)
            })
            state.grandTotal = alltotal

            toast.error('Delete Successfully', {
                position: "bottom-left",
                autoClose: 1000,
                pauseOnHover: true,

            })
            //add localstorage
            localStorage.setItem('itemse', JSON.stringify(state.carts));
            localStorage.setItem('gratotal', JSON.stringify(state.grandTotal));
            // console.log('temp', temp);
        },

        addqty: (state, action) => {
            let itemId = action.payload; //index
            let temp = state.carts;
            // Action to increment item quantity in cart
            temp[itemId].qty += 1 // temp[index] ni qty + 1
            console.log('itemId', itemId);
            temp[itemId].total = temp[itemId].price * temp[itemId].qty

            // Calculate grand total //update that qty incres and value in total
            let alltotal = 0;
            state.carts.map((item) => {
                alltotal += Number(item.total)
            })
            state.grandTotal = alltotal
            localStorage.setItem('itemse', JSON.stringify(state.carts));
            localStorage.setItem('gratotal', JSON.stringify(state.grandTotal));
        },

        dacqty: (state, action) => {
            let itemId = action.payload; //index
            let temp = state.carts;
            // temp[index] ni qty - 1
            if (temp[itemId].qty > 1) {
                // Action to decrement item quantity in cart
                temp[itemId].qty -= 1
                temp[itemId].total = temp[itemId].price * temp[itemId].qty;

                // Calculate grand total
                let alltotal = 0;
                state.carts.map((item) => {
                    alltotal += Number(item.total)
                })
                state.grandTotal = alltotal
                localStorage.setItem('itemse', JSON.stringify(state.carts));
                localStorage.setItem('gratotal', JSON.stringify(state.grandTotal));

            } else {
                // If quantity becomes 0, remove item from cart
                state.carts = state.carts.filter((item, index) => {
                    return index != action.payload;  //return index != temp;
                })
                // Calculate grand total
                let alltotal = 0;
                state.carts.map((item) => {

                    alltotal += Number(item.total)
                })
                state.grandTotal = alltotal
                localStorage.setItem('itemse', JSON.stringify(state.carts));
                localStorage.setItem('gratotal', JSON.stringify(state.grandTotal));
            }
        },

    },
})

// Action creators are generated for each case reducer function
export const { Addcart, Removecart, addqty, dacqty } = cartSlice.actions

export default cartSlice.reducer