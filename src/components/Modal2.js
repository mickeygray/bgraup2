import React from "react";
import selbbar from "../images/selbbar.pdf";
const Modal2 = (props) => {
  return (
    <div>
      <span style={{ float: "right" }}>
        <button onClick={props.toggleModal}> X</button>
      </span>
      <iframe
        style={{ height: "100vh", width: "100vw" }}
        src={selbbar}
        type='application/pdf'
        title='title'
      />
    </div>
  );
};

export default Modal2;
