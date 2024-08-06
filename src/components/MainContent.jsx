// src/components/MainContent.js
import React from 'react';
import './MainContent.css';

const MainContent = () => {
  const orders = [
    { customer: 'Wade Warren', orderNo: '15473256', amount: '$124.00', status: 'Delivered', profilePic: 'https://via.placeholder.com/40' },
    { customer: 'Jane Cooper', orderNo: '48956786', amount: '$305.02', status: 'Delivered', profilePic: 'https://via.placeholder.com/40' },
    { customer: 'Guy Hawkins', orderNo: '78506215', amount: '$45.88', status: 'Cancelled', profilePic: 'https://via.placeholder.com/40' },
    { customer: 'Kristin Watson', orderNo: '20096732', amount: '$65.00', status: 'Pending', profilePic: 'https://via.placeholder.com/40' },
    { customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'Delivered', profilePic: 'https://via.placeholder.com/40' },
    { customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered', profilePic: 'https://via.placeholder.com/40' },
  ];

  return (
    <div className="content">
      <h3>Recent Orders</h3>
      <table className="recent-orders">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Order No.</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td className="customer-info">
                <img src={order.profilePic} alt={order.customer} className="profile-pic" />
                {order.customer}
              </td>
              <td>{order.orderNo}</td>
              <td>{order.amount}</td>
              <td className={`status ${order.status.toLowerCase()}`}>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainContent;
