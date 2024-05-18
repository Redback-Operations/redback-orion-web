/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Btn = ({ btn, className, formAtomValueClassName, divClassName, text = "Pra-btn" }) => {
  return (
    <div className={`btn ${btn} ${className}`}>
      <div className={`form-atom-value ${formAtomValueClassName}`}>
        <div className={`div-2 ${divClassName}`}>
          {["praimery-hover", "praimery"].includes(btn) && <>{text}</>}

          {btn === "secondary" && <>Sec-btn</>}
        </div>
      </div>
    </div>
  );
};

Btn.propTypes = {
  btn: PropTypes.oneOf(["praimery", "secondary", "praimery-hover"]),
  text: PropTypes.string,
};
