import React from "react";
import styled from 'styled-components';
import { Search } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Container = styled.div `
height : 70px;



`;
const Wrapper = styled.div `
        padding : 10px 20px;
        display : flex;
        justify content : space-between;

`;

const Left = styled.div`
flex : 1;
display : flex;
align-items : center;
`;
const Center = styled.div`
flex : 1;
text-align : center;
`;

const Logo = styled.h1`
font-weight : bold;
`;
const Right = styled.div`
flex : 1;
display : flex;
align-items : center;
justify-content : flex-end;

 `;

 const Language = styled.span`
 font-size : 14px;
cursor : pointer;
 `;

 const SearchContainer = styled.div`
 border : 0.5px solid   lightgray;
 display : flex;
 align-items: center;
 margin-left : 25px;
 padding : 5px;


 `;
const Input = styled.div`
width : 100px;


border : none;
`;

const MenuItem = styled.div`
font-size : 14px;
cursor pointer;
margin-left : 25px;
`;


const Navbar = ()=>{
    return(
        <Container>
            <Wrapper>
                <Left>
                   <Language>English</Language>
                    <SearchContainer>
                       
                       <Input/>
                        <Search style = {{color : "gray" , fontSize : 16}}/>
                     </SearchContainer> 

                </Left>
                <Center>
                    <Logo>Yogesh</Logo>

                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem></MenuItem>
                        <Badge badgeContent = {4} color = "primary">
                            <ShoppingCartIcon/>
                        </Badge>
                </Right>
            </Wrapper>
        </Container>
    )
}
export default Navbar;