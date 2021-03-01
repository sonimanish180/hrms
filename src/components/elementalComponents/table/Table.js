import React from "react";
import Avatar from "../../avatar/Avatar";
import {AiOutlineEllipsis} from 'react-icons/ai'
import {GoPrimitiveDot} from 'react-icons/go'

const defaultClasses = {
  tableComponent: "",
  tableHeadingComponent: "",
  tableHeadingDataComponent: "",
  tableBodyComponent: "",
  tableRowComponent: "",
  tableDataComponent: ""
};

const Table = ({ candidateList, classes = { ...defaultClasses } }) => {
  const {
    tableComponent,
    tableHeadingComponent,
    tableHeadingDataComponent,
    tableBodyComponent,
    tableRowComponent,
    tableDataComponent
  } = classes;
  return (
    <table className={`table-component ${tableComponent}`}>
      <thead className={`table-heading-component ${tableHeadingComponent}`}>
        <tr className={`table-head-row`}>
          <th
            className={`table-heading-data-component first-column ${tableHeadingDataComponent}`}
          >
            Full Name
          </th>
          <th
            className={`table-heading-data-component ${tableHeadingDataComponent}`}
          >
            Designation
          </th>
          <th
            className={`table-heading-data-component ${tableHeadingDataComponent}`}
          >
            Status
          </th>
          <th
            className={`table-heading-data-component last-column ${tableHeadingDataComponent}`}
          ></th>
        </tr>
      </thead>
      <tbody className={`table-body-component ${tableBodyComponent}`}>
        {candidateList.map((candidate, index) => (
          <tr key={index} className={`table-row-component ${tableRowComponent}`}>
            <td className={`table-data-component ${tableDataComponent} first-column`} style={{display:"flex", alignItems:"center"}}>
              <Avatar src={candidate.image}/>
              {candidate.name}
            </td>
            <td className={`table-data-component ${tableDataComponent}`}>
              {candidate.designation}
            </td>
            <td className={`table-data-component ${candidate.statusIconColor} ${tableDataComponent}`}>
              <GoPrimitiveDot />{candidate.status}
            </td>
            <td className={`table-data-component last-column ${tableDataComponent}`}><AiOutlineEllipsis /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
