import styled from 'styled-components';
import { mobile } from '../responsive';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from '../redux/apiCalls';
import CryptoJS from 'crypto-js';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://www.logisticsinsider.in/wp-content/uploads/2020/10/ecomm.jpg")

      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  ${mobile({ width: "75%" })}

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 1000;

`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border-width : 5px;
  border-radius : 15px;

`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  border-width : 5px;
  border-radius : 15px;
  `;


const Error = styled.p`
  color: red;
`;

const Register = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState({
    emailError: false,
    passwordError: false,
  });

  const handleClick = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError({ ...error, passwordError: true });
    } else if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setError({ ...error, emailError: true });
    } else {
      console.log('success');
      register(dispatch, {
        username,
        email,
        password,
      });
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            placeholder="name"
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            placeholder="last name"
            type="text"
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input
            placeholder="username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="example@gmail.com"
            type="email"
            onChange={(e) => setEmail(e.target.value.toLowerCase())}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            placeholder="confirm password"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleClick}>CREATE</Button>
          {(error.emailError || error.passwordError) && (
            <Error>Please check your email or password...</Error>
          )}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
