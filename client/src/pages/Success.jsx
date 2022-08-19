import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { userRequest } from '../requestMethods';
import { Link } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  const data = location.state.stripeData;
  const cart = location.state.products;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);
  console.log(data);
  const [success, setSuccess] = useState(null);
  useEffect(() => {
    const confirmOrder = async () => {
      try {
        const res = await userRequest.post('/checkout/payment-success', {
          clientSecret: data.id,
        });
        createOrder();
      } catch (err) {
        console.log(err);
      }
    };
    const createOrder = async () => {
      try {
        const res = await userRequest.post('/orders', {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item.quantity,
          })),
          amount: cart.total,
          address: 'Bengaluru',
        });
        setOrderId(res.data._id);
      } catch (err) {
        console.log(err);
      }
    };
    data && confirmOrder();
    // data && createOrder();
  }, [cart, data, currentUser, success]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <Link
        to="/"
        style={{
          padding: 10,
          marginTop: 20,
          textDecoration: 'none',
          background: 'lightgray',
          color: 'black',
          cursor: 'pointer',
        }}
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default Success;
