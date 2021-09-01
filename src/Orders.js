import React, { useState, useEffect } from 'react';
import { db } from "./firebase";
import './Orders.css'
import { useStateValue } from "./StateProvider";
import Order from './Order'

function Orders() {

    return (
        <div className='orders'>
            <h1>Your Orders</h1>

            <div className='orders__order'>
                    <Order/>
            </div>
        </div>
    )
}

export default Orders
