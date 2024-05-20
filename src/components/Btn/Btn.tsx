import React from "react";
import "./style.css";

interface BtnProps {
  btn: "praimery" | "secondary" | "praimery-hover";
  className?: string;
  formAtomValueClassName?: string;
  divClassName?: string;
  text?: string;
}

export const Btn: React.FC<BtnProps> = ({
  btn,
  className = "",
  formAtomValueClassName = "",
  divClassName = "",
  text = "Pra-btn",
}) => {
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
