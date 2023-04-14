import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const OrderCard = (props) => {
  const order = props.order;

  return (
    <div className='card-container'>
      <img
        src='https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Finventory-management&psig=AOvVaw1tT5V6eL0fwp5zFM3SBWUR&ust=1681498077517000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPCyhs_Cp_4CFQAAAAAdAAAAABAE'
        alt='Orders'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={`/show-order/${order._id}`}>{order.title}</Link>
        </h2>
        <h3>{order.quantity}</h3>
        <p>{order.purchase}</p>
      </div>
    </div>
  );
};

export default OrderCard;