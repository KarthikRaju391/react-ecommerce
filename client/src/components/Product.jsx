import {
  FavoriteBorderOutlined,
  Favorite,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { addToWishlist, addProduct } from '../redux/cartRedux';
import { useDispatch, useSelector } from 'react-redux';
import { showCartNotification, showWishNotification } from '../redux/apiCalls';
import { useState } from 'react';
import styled from 'styled-components';

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 0 0 32.3333%;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
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
const InfoMeta = styled.div`
  color: white;
  display: flex;
  gap: 1em;
  flex-direction: column;
  align-items: center;
`;

const InfoIcons = styled.div`
  display: flex;
`;

const Product = ({ item }) => {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);
  const Id = useSelector((state) => state.user.currentUser._id);
  const handleClick = () => {
    dispatch(addToWishlist());
    showWishNotification(dispatch);
    setLiked(true);
  };

  const handleCartClick = (item_details) => {
    const newProduct = {
      ...item_details,
      color: item_details.color[0],
      price: item_details.price,
      size: item_details.size[0],
      quantity: 1,
    };
    dispatch(addProduct({ product: newProduct, Id }));
    showCartNotification(dispatch);
  };

  return (
    <div>
      <Container>
        <Circle />
        <Image src={item.img} />
        <Info>
          <InfoMeta>
            <h2>{item.title}</h2>
            <h3>₹{item.price}</h3>
          </InfoMeta>
          <InfoIcons>
            <Icon>
              <ShoppingCartOutlined onClick={() => handleCartClick(item)} />
            </Icon>
            <Icon>
              <Link to={`/product/${item._id}`}>
                <SearchOutlined />
              </Link>
            </Icon>
            <Icon>
              {liked ? (
                <Favorite />
              ) : (
                <FavoriteBorderOutlined onClick={handleClick} />
              )}
            </Icon>
          </InfoIcons>
        </Info>
      </Container>
    </div>
  );
};

export default Product;
