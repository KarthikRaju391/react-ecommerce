import React from 'react';
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { ArrowDownwardSharp } from '@material-ui/icons';
import Alert from '@material-ui/lab/Alert';
import Newsletter from '../components/Newsletter';
import { Link } from 'react-router-dom';
import Products from '../components/Products';
import Slider from '../components/Slider';
import { useSelector } from 'react-redux';

const Home = () => {
  const { notifyCart, notifyWish } = useSelector((state) => state.cart);

  return (
    <div>
      {/* <Announcement /> */}
      <Navbar />
      <Slider />
      <h1 style={{ margin: '1em 0 0 1em' }}>Our Collections</h1>
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
      <h1 style={{ marginLeft: '1em' }}>Our Products</h1>
      <Products />
      <Link to="/products">
        <ArrowDownwardSharp
          fontSize="large"
          style={{
            position: 'relative',
            marginLeft: '50%',
            cursor: 'pointer',
            color: 'black',
          }}
        />
      </Link>
      {/* <Newsletter/> */}
      <Footer />
    </div>
  );
};

export default Home;
