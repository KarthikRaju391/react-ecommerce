import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
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
  console.log(user);

  const [admin, setAdmin] = useState(user.isAdmin);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);

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
              src={
                user.img ||
                'https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif'
              }
              alt=""
              className="userShowImg"
            />
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">
                {user.username}
                {user.isAdmin && ' (admin)'}
              </span>
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
                  placeholder={user.username}
                  className="userUpdateInput"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
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
                  <option defaultValue={user.isAdmin}>Yes</option>
                  <option value="false">No</option>
                </select>
              ) : (
                <select onChange={(e) => setAdmin(e.target.value)}>
                  <option defaultValue={user.isAdmin}>No</option>
                  <option value="true">Yes</option>
                </select>
              )}
            </div>
            <div className="userUpdateRight">
              <button onClick={handleClick} className="userUpdateButton">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
