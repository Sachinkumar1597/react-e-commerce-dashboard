import React from 'react';
import './Sidebar.css';
import { MdDashboard,MdOutlineNoteAlt } from "react-icons/md";
import { IoMdLogOut,IoMdHome } from "react-icons/io";
import { RiBookletLine, RiTodoLine, RiBarChartBoxLine } from "react-icons/ri";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top-icons">
        <div className="icon-container">
          <MdDashboard style={{ fontSize: 26, color: '#007BFF' }} className="icon" />
        </div>
        <div className="icon-container">
        <IoMdHome />
        </div>
        <div className="icon-container">
        <RiBarChartBoxLine />
        </div>
        <div className="icon-container">
        <RiTodoLine />
        </div>
        <div className="icon-container">
        <RiBookletLine />
        </div>
        <div className="icon-container">
        <MdOutlineNoteAlt />
        </div>
      </div>
      <div className="bottom-icon icon-container">
      <IoMdLogOut style={{color:'white'}} />
      </div>
    </div>
  );
};

export default Sidebar;
