import React from 'react';
import { Link } from 'react-router-dom';
import notificationImage from '../../images/notificationImage.svg'

const notificationDescription = "Today you have 9 new application. Also, you need to hire 2 new ux designers, 1 react native developer. "


const Notification = ({hrName, handleNotification}) => {
    return (
        <div className="notification-card">
            <div className="notification-container">
                <header className="notification-header">Good Morning <span>{hrName}</span>!</header>
                <div className="notification-description">{notificationDescription}</div>
                <Link to="/" className="read-more">Read More</Link>
                    {/* <label className="read-more" onClick={handleNotification}>Read more</label>  */}
                {/* </Link> */}
            </div>
            <div className="notification-svg-container">
                <img src={notificationImage} alt="notification image" height="100%" width="100%" /> 
            </div>
        </div>
    );
}


export default Notification;