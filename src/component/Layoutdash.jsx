import React from "react";
import Headerdash from "./Headerdash";

function Layoutdash(props) {
  return (
    <div className="dashboard-layout">
      <div className="inner-dash-bpx">
        <Headerdash />
        {props.children}
        {/* <Footer/> */}
      </div>
    </div>
  );
}

export default Layoutdash;
