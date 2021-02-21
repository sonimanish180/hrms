import React from "react";
import Input from "../input/Input";
import { FiSearch } from "react-icons/fi";
import { BiSend } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import Avatar from "../avatar/Avatar";

const Header = (props) => {
  return (
    <header className="header">
      <div className="page-header">
        <h1 className="heading">{props.pageHeader}</h1>
      </div>
      <div style={{display:"flex", justifyContent:"space-between", width:"50%"}}>
        <div className="action-container">
          <Input icon={<FiSearch />} placeHolder="Search..." classes={{inputComponentClass:"hover-action"}} />
          <BiSend className="action-icon" />
          <IoIosNotificationsOutline className="action-icon" />
        </div>
        <div className="profile-container">
          <label>Janet Weaver</label>
          <Avatar />
        </div>
      </div>
    </header>
  );
};

export default Header;
