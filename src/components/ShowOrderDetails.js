import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

function ShowOrderDetails(props) {
  const [order, setOrder] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://deployment-backend.onrender.com/api/orders/${id}`)
      .then((res) => {
        setOrder(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowOrderDetails');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`https://deployment-backend.onrender.com/api/orders/${id}`)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.log('Error form ShowOrderDetails_deleteClick');
      });
  };

  const OrderItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Product Name</td>
            <td>{order.title}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Quantity</td>
            <td>{order.quantity}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Purchase</td>
            <td>{order.purchase}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className='ShowOrderDetails'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Order List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Order's Record</h1>
            <p className='lead text-center'>View Order's Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{OrderItem}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(order._id);
              }}
            >
              Delete Order
            </button>
          </div>
          <div className='col-md-6 m-auto'>
            <Link
              to={`/edit-order/${order._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Edit Order
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowOrderDetails;