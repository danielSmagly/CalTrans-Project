
import React, { useRef } from "react";

import ReactToPrint from "react-to-print";

export default function PrintComponent() {
  let componentRef = useRef();

  return (
    <>
      <div>
        {/* button to trigger printing of target component */}
        <ReactToPrint
          trigger={() => <utton>Print this out!</utton>}
          content={() => componentRef}
        />

        {/* component to be printed */}
        <ComponentToPrint ref={(el) => (componentRef = el)} />
      </div>
    </>
  );
}




class ComponentToPrint extends React.Component {
  render() {
    return (
      <div>
        <h2 style={{color: "green"}}>Attendance</h2>
        <table>
          <thead>
            <th>S/N</th>
            <th>Name</th>
            <th>Email</th>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Njoku Samson</td>
              <td>samson@yahoo.com</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Ebere Plenty</td>
              <td>ebere@gmail.com</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Undefined</td>
              <td>No Email</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}


