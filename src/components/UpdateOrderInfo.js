import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function UpdateOrderInfo(props) {
  const [order, setOrder] = useState({
    title: '',
    quantity: '',
    purchase: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://deployment-backend.onrender.com/api/orders/${id}`)
      .then((res) => {
        setOrder({
          title: res.data.title,
          quantity: res.data.quantity,
          purchase: res.data.purchase,
        });
      })
      .catch((err) => {
        console.log('Error from UpdateOrderInfo');
      });
  }, [id]);

  const onChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: order.title,
      quantity: order.quantity,
      purchase: order.purchase,
    };

    axios
      .put(`https://deployment-backend.onrender.com/api/orders/${id}`, data)
      .then((res) => {
        navigate(`/show-order/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdateOrderInfo!');
      });
  };

  return (
    <div className='UpdateOrderInfo'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Order List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit order</h1>
            <p className='lead text-center'>Update Order's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='title'>Product Name</label>
              <input
                type='text'
                placeholder='product Name'
                name='title'
                className='form-control'
                value={order.title}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='quantity'>No_of_quantity_available</label>
              <input
                type='text'
                placeholder='Quantity'
                name='quantity'
                className='form-control'
                value={order.quantity}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='purchase'>Purchase_required</label>
              <input
                type='text'
                placeholder='Purchase'
                name='purchase'
                className='form-control'
                value={order.purchase}
                onChange={onChange}
              />
            </div>
            <br />

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateOrderInfo;