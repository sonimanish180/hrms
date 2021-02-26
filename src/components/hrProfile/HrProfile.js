import React from 'react';
import Avatar from '../avatar/Avatar';
import {HiOutlinePhone, HiOutlineMail} from 'react-icons/hi';
import {AiOutlineEllipsis} from 'react-icons/ai';
import Button from '../elementalComponents/button/Button';

const HrProfile = ({profileName="", designation="", joinedDate="", projects="", accomplishments=""}) => {
    return (
        <div className="hr-profile-container">
            <header className="profile-header">
                <Avatar src="https://reqres.in/img/faces/2-image.jpg" />
                <div className="profile-name-container">
                    <p className="profile-name">{profileName}</p>
                    <p className="designation">{designation}</p>
                </div>
            </header>            
            <div className="contact-container">
                <HiOutlinePhone  className="phone"/>
                <HiOutlineMail className="mail" />
                <AiOutlineEllipsis className="ellipsis" />
            </div>
            <div className="basic-details" >
                <p className="joined-date">Joined Date: <span>{joinedDate}</span></p>
                <p className="projects">Projects: <span>{projects}</span></p>
                <p className="accomplishments">Accomplishments: <span>{accomplishments}</span></p>
            </div>
            <Button label="View More"/>
        </div>
    );
}


export default HrProfile;