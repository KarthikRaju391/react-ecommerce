import styled from "styled-components";


const Container1 = styled.div
        `top : 0%;  
margin : 0%;
padding : 0%;
height:30px;
    background-color : teal;
    display : flex;
    justify-content : center;
    border-radius : 0px 0px 15px 15px;
    height : 30px;
    align-items:center;
    color : white;
    top : 0px;
`


const Announcements = ()=>{
    return(
    <Container1>
       Hello World
    </Container1>

    );
}

export default Announcements