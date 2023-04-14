import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const CreateOrder = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [order, setOrder] = useState({
    title: '',
    quantity: '',
    purchase: '',
  });

  const onChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('https://deployment-backend.onrender.com/api/orders', order)
      .then((res) => {
        setOrder({
          title: '',
          quantity: '',
          purchase: '', 
        });

        // Push to /
        navigate('/');
      })
      .catch((err) => {
        console.log('Error in CreateOrder!');
      });
  };

  return (
    <div className='CreateOrder'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Order List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Order</h1>
            <p className='lead text-center'>Create new order</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Product Name'
                  name='title'
                  className='form-control'
                  value={order.title}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='no_of_quantity_available'
                  name='quantity'
                  className='form-control'
                  value={order.quantity}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='purchase_required'
                  name='purchase'
                  className='form-control'
                  value={order.purchase}
                  onChange={onChange}
                />
              </div>

              <input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOrder;