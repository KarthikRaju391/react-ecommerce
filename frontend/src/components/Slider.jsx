import styled from "styled-components";
import { ArrowLeftOutlined } from "@material-ui/icons";
import { ArrowRightOutlined } from "@material-ui/icons";
const Container = styled.div`
    width : 100%;
    height : 100vh;
    display : flex;
    background-color : coral;
    position : relative;
`;

const Arrow = styled.div`
   width : 50px;
   height : 50px;
   background-color: #fff7f7;
   border-radius : 50%;
   display : flex;
   justify-content : center;
   align-items : center;
   position : absolute;
   top : 0;
   bottom : 0;
   left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};

   margin : auto;
   cursor : pointer;
   opacity : 0.5;
`;

const Wrapper = styled.div`
height : 100%;
`;

const Slide = styled.div`
width : 100vw;

display : flex;
align-items : center;
`;

const ImgContainer = styled.div`
flex : 1;
`;
const Image = styled.img`
`;
const InfoContainer = styled.div`

flex : 1;
`;

const Slider = ()=>{
    return(
        <Container>
            <Arrow direction = 'left'>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper>
                <Slide>
                <ImgContainer>
                <img src = "C:\Users\yogesh\Pictures\Machine Learning"/>
                </ImgContainer>

                <InfoContainer>

                </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction = 'right'>
                <ArrowRightOutlined/>
            </Arrow>

        </Container>
    );
}

export default Slider;