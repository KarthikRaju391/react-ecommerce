import React from 'react';
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Alert from '@material-ui/lab/Alert';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import Slider from '../components/Slider';
import { useSelector } from 'react-redux';

const Home = () => {
  const { notifyCart, notifyWish } = useSelector((state) => state.cart);

  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      {notifyCart && (
        <Alert
          style={{ width: '35%', marginLeft: '62%' }}
          variant="filled"
          severity="success"
        >
          Item successfully added to cart
        </Alert>
      )}
      {notifyWish && (
        <Alert
          style={{ width: '35%', marginLeft: '62%' }}
          variant="filled"
          severity="success"
        >
          Item successfully added to wishlist
        </Alert>
      )}
      <Products />
      {/* <Newsletter/> */}
      <Footer />
    </div>
  );
};

export default Home;
