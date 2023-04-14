import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import OrderCard from './OrderCard';

function ShowOrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get('https://deployment-backend.onrender.com/api/orders')
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowOrderList');
      });
  }, []);

  const orderList =
    orders.length === 0
      ? 'there is no order record!'
      : orders.map((order, k) => <OrderCard order={order} key={k} />);

  return (
    <div className='ShowOrderList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Orders List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-order'
              className='btn btn-outline-warning float-right'
            >
              + Add New Order
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{orderList}</div>
      </div>
    </div>
  );
}

export default ShowOrderList;