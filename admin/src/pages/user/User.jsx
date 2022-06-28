import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
<<<<<<< HEAD
} from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./user.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function User() {
  const location = useLocation();
  const userId = location.pathname.split('/')[2]

  const user = useSelector((state) => 
    state.users.users.find((user) => user._id === userId)
  );

=======
} from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import './user.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { updateUser } from '../../redux/apiCalls';

export default function User() {
  const location = useLocation();
  const userId = location.pathname.split('/')[2];
  const dispatch = useDispatch();
  const user = useSelector((state) =>
    state.users.users.find((user) => user._id === userId)
  );

  const [admin, setAdmin] = useState(user.isAdmin);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  console.log(admin);

  const handleClick = (e) => {
    e.preventDefault();
    updateUser(
      userId,
      {
        ...user,
        username,
        email,
        isAdmin: admin,
      },
      dispatch
    );
  };

>>>>>>> 1b641510357a7b0d0cd606f13c7fdc319185bbb7
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg"
            />
<<<<<<< HEAD
            <div className="userShowTopTitle">
              <span className="userShowUsername">{user.name}</span>
              {/* <span className="userShowUserTitle">Software Engineer</span> */}
            </div>
=======
>>>>>>> 1b641510357a7b0d0cd606f13c7fdc319185bbb7
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
<<<<<<< HEAD
              <span className="userShowInfoTitle">{(user.email).split('@')[0]}</span>
=======
              <span className="userShowInfoTitle">
                {user.username}
                {user.isAdmin && ' (admin)'}
              </span>
>>>>>>> 1b641510357a7b0d0cd606f13c7fdc319185bbb7
            </div>
            {/* <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div> */}
            <span className="userShowTitle">Contact Details</span>
            {/* <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+1 123 456 67</span>
            </div> */}
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{user.email}</span>
            </div>
            {/* <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">New York | USA</span>
            </div> */}
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
<<<<<<< HEAD
                  placeholder="annabeck99"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="userUpdateInput"
=======
                  placeholder={user.username}
                  className="userUpdateInput"
                  onChange={(e) => setUsername(e.target.value)}
>>>>>>> 1b641510357a7b0d0cd606f13c7fdc319185bbb7
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
<<<<<<< HEAD
                  placeholder="annabeck99@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 123 456 67"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
=======
                  placeholder={user.email}
                  className="userUpdateInput"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="userAdminChoice">
              <label>Admin</label>
              {user.isAdmin ? (
                <select onChange={(e) => setAdmin(e.target.value)}>
                  <option defaultValue={user.isAdmin}>true</option>
                  <option value="false">false</option>
                </select>
              ) : (
                <select onChange={(e) => setAdmin(e.target.value)}>
                  <option defaultValue={user.isAdmin}>false</option>
                  <option value="true">true</option>
                </select>
              )}
            </div>
            <div className="userUpdateRight">
              <button onClick={handleClick} className="userUpdateButton">
                Update
              </button>
>>>>>>> 1b641510357a7b0d0cd606f13c7fdc319185bbb7
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
