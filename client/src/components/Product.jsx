import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
<<<<<<< HEAD
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
=======
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { addToWishlist, addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
>>>>>>> 1b641510357a7b0d0cd606f13c7fdc319185bbb7

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
<<<<<<< HEAD
  flex: 1;
=======
  flex: 0 0 32.3333%;
>>>>>>> 1b641510357a7b0d0cd606f13c7fdc319185bbb7
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

<<<<<<< HEAD
  &:hover ${Info}{
=======
  &:hover ${Info} {
>>>>>>> 1b641510357a7b0d0cd606f13c7fdc319185bbb7
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
<<<<<<< HEAD
=======
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addToWishlist());
  };

  const handleCartClick = () => {
    dispatch(addProduct({ ...item }));
  };

>>>>>>> 1b641510357a7b0d0cd606f13c7fdc319185bbb7
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
<<<<<<< HEAD
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
          <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
=======
          <ShoppingCartOutlined onClick={handleCartClick} />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined onClick={handleClick} />
>>>>>>> 1b641510357a7b0d0cd606f13c7fdc319185bbb7
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
