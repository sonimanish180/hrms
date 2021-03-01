import React from "react";
import Button from "../elementalComponents/button/Button";
import Table from "../elementalComponents/table/Table";

const candidateList = [
  {
    name: "Mary G Loius",
    designation: "Project Manager",
    status: "Practical Round",
    image: "https://reqres.in/img/faces/2-image.jpg",
    statusIconColor : "status-icon-blue"
  },
  {
    name: "Vince Jacob",
    designation: "UI/UX Designer",
    status: "Practical Round",
    image: "https://reqres.in/img/faces/2-image.jpg",
    statusIconColor : "status-icon-blue"
  },
  {
    name: "Neil Brain",
    designation: "React Developer",
    status: "Final Round",
    image: "https://reqres.in/img/faces/2-image.jpg",
    statusIconColor : "status-icon-green"
  },
  {
    name: "Jaldev Biswas",
    designation: "UI/UX Designer",
    status: "HR Round",
    image: "https://reqres.in/img/faces/2-image.jpg",
    statusIconColor : "status-icon-yellow"
  },
  {
    name: "Vince Jacob",
    designation: "UI/UX Designer",
    status: "Practical Round",
    image: "https://reqres.in/img/faces/2-image.jpg",
    statusIconColor : "status-icon-blue"
  },
  {
    name: "Neil Brain",
    designation: "React Developer",
    status: "Final Round",
    image: "https://reqres.in/img/faces/2-image.jpg",
    statusIconColor : "status-icon-green"
  },
  {
    name: "Jaldev Biswas",
    designation: "UI/UX Designer",
    status: "HR Round",
    image: "https://reqres.in/img/faces/2-image.jpg",
    statusIconColor : "status-icon-yellow"
  }
];

const RecruitmentProgress = () => {
  return (
    <div className="recuitment-progress-card">
      <header className="recruitment-progress-header">
        <h3 className="heading">Recruitment Progress</h3>
        <Button label="View All" />
      </header>
      <div className="table-container">
        <Table candidateList={candidateList} classes={{tableHeadingComponent : "table-head-fixed", tableComponent:"table"}} />
      </div>
      <footer className="recruitment-card-footer">
        <div className="show-result-info">{`Showing 4 out of ${candidateList.length} Results`}</div>
        <div className="view-all">View All</div>
      </footer>
    </div>
  );
};

export default RecruitmentProgress;
