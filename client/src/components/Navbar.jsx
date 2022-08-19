import { Badge, Button } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/apiCalls';

const Container = styled.div`
  height: 60px;
  ${mobile({ height: '50px' })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: '10px 0px' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: 'none' })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: '50px' })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: '24px' })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: 'center' })}
`;
const MenuItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

const Img = styled.img`
  border-radius: 50%;
  width: 2.5em;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`;

const Navbar = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);

  const handleClick = () => {
    logout(dispatch);
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: 'gray', fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>KIVIY</Logo>
        </Center>
        <Right>
          {!user && (
            <MenuItem>
              <Link
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  cursor: 'pointer',
                }}
                to="/register"
              >
                REGISTER
              </Link>
            </MenuItem>
          )}
          <MenuItem>
            {!user ? (
              <Link
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  cursor: 'pointer',
                }}
                to="/login"
              >
                SIGN IN
              </Link>
            ) : (
              <MenuItemContainer>
                <Img src={user.img} />
                <Link
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    cursor: 'pointer',
                  }}
                  onClick={handleClick}
                  to="/login"
                >
                  SIGN OUT
                </Link>
              </MenuItemContainer>
            )}
          </MenuItem>
          <Link
            style={{
              textDecoration: 'none',
              color: 'black',
              cursor: 'pointer',
            }}
            to="/cart"
          >
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
