import React from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import { CgFileDocument } from 'react-icons/cg';
import { VscGraph } from 'react-icons/vsc';
import { FiCalendar, FiSettings } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';


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
                    <h3>Newton HR</h3>
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
                    Add a svg here.
                </div>
            </nav>
            <div className="main-container">
                here are childrens
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout;