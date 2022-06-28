import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products/>
<<<<<<< HEAD
      <Newsletter/>
=======
      {/* <Newsletter/> */}
>>>>>>> 1b641510357a7b0d0cd606f13c7fdc319185bbb7
      <Footer/>
    </div>
  );
};

export default Home;
