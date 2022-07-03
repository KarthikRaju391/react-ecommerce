import React from 'react';
import './topbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import { useSelector } from 'react-redux';
export default function Topbar() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Kiviy Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">1</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">1</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src={
              user.img ||
              'https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif'
            }
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
