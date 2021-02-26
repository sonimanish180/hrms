import React from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import { CgFileDocument } from 'react-icons/cg';
import { VscGraph } from 'react-icons/vsc';
import { FiCalendar, FiSettings } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import {BsBook} from 'react-icons/bs'
import myImage from '../../images/MyImage.svg'

// import { ReactComponent as MyLogo } from '../../images/displayImage.svg';


const navItems = [
    {
        name : "Dashboard",
        icon : <BiHomeAlt/>,
        link : '/'
    },
    {
        name : "Recruitment",
        icon : <BsPeople/>,
        link : "/recruitment"
    },
    {
        name : "Onboarding",
        icon : <CgFileDocument/>,
        link : "/onboarding"
    },
    {
        name : "Report",
        icon : <VscGraph/>,
        link : "/report"
    },
    {
        name : "Calendar",
        icon : <FiCalendar/>,
        link : "/calendar"
    },
    {
        name : "Settings",
        icon : <FiSettings/>,
        link : "/settings"
    }
] 


const DashboardLayout = ({children}) => {
    const location = useLocation();
    return (
        <div className="dashboard-layout">
            <nav className="side-nav-bar">
                <div className="logo-container">
                    <BsBook />
                    <h2>Newton HR</h2>
                </div>
                <div className="nav-container">
                    {navItems.map((navItem, index) => (
                        <Link to={navItem.link} key={index}>
                            <div className={`nav-item ${location.pathname === navItem.link ? "selected" : ""}`}>
                                {navItem.icon}
                                <label className="item-name">{navItem.name}</label>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="image-container">
                    {/* <svg height="100px" width="100px" xmlns="src/images/displayimage.svg" /> */}
                    {/* <displayImage /> */}
                    <img src={myImage} alt="image" height="100%" width="100%" />
                </div>
            </nav>
            <div className="main-container">
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout;