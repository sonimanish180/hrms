import React from "react";
import CalendarContainer from "../../components/calendarContainer/CalendarContainer";
import Header from "../../components/header/Header";
import authenticate from "../../components/highOrderComponent/authenticate";
import HrProfile from "../../components/hrProfile/HrProfile";
import Notification from "../../components/notification/Notification";
import RecruitmentProgress from "../../components/recruitmentProgress/RecruitmentProgress";

const Home = () => {
  return (
    <div className="home-screen">
      <div className="header-container">
      <Header pageHeader="Dashboard" /> 
      </div>
      <div className="information-container">
        <main>
          <Notification hrName="Janet Weaver" />
          <RecruitmentProgress className="recruitment-progress-container" />
        </main>
        <aside>
          <CalendarContainer className="calendar-container" />
          <HrProfile className="hr-profile-container" profileName="Janet Weaver" designation="HR Manager" joinedDate="18-Apr-2015" projects="32 Active" accomplishments="125"/>
        </aside>
      </div>
    </div>
  );
};

export default authenticate(Home);
