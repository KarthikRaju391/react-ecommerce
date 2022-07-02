import './newUser.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/apiCalls';

export default function NewUser() {
  const dispatch = useDispatch();
  const [created, setCreated] = useState(false);
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
      addUser(
        {
          username,
          email,
          password,
        },
        dispatch
      );
      setCreated(true);
      setTimeout(() => setCreated(false), 3000);
      setEmail('');
      setUsername('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <div className="newUser">
      <div>
        <h1 className="newUserTitle">New User</h1>
        <form onSubmit={handleClick} className="newUserForm">
          <div className="newUserItem">
            <label>Username</label>
            <input
              type="text"
              placeholder="john"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="newUserItem">
            <label>Email</label>
            <input
              type="email"
              placeholder="john@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="newUserItem">
            <label>Password</label>
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="newUserItem">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="newUserButton">
            Create
          </button>
        </form>
      </div>
      <div>
        {created && (
          <p className="successContainer">User was successfully created!</p>
        )}
      </div>
    </div>
  );
}
