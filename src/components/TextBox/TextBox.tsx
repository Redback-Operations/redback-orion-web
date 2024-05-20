import React from "react";
import "./style.css";

interface TextBoxProps {
  property: "value" | "active" | "default" | "phon-number" | "password" | "drop-down";
  className?: string;
  text?: string;
  text1?: string;
  text2?: string;
  text3?: string;
  text4?: string;
  text5?: string;
  text6?: string;
  iconlyLightOutlineClassName?: string;
  iconlyLightOutlineClassNameOverride?: string;
}

export const TextBox: React.FC<TextBoxProps> = ({
  property,
  className = "",
  text = "Title",
  text1 = "Value",
  text2 = "Enter Value",
  text3 = "+98",
  text4 = "9120000000",
  text5 = "Course",
  text6 = "software",
  iconlyLightOutlineClassName,
  iconlyLightOutlineClassNameOverride,
}) => {
  return (
    <div className={`text-box ${className}`}>
      <div className="title">
        <div className="txt">
          {["default", "value"].includes(property) && <>{text}</>}
          {property === "phon-number" && <>Phone Number</>}
          {property === "drop-down" && <>{text5}</>}
          {property === "password" && <>Password</>}
          {property === "active" && <>Email</>}
        </div>
      </div>
      <div className={`box ${property}`}>
        {["default", "drop-down", "value"].includes(property) && (
          <div className="div">
            {property === "default" && <>{text2}</>}
            {property === "value" && <>{text1}</>}
            {property === "drop-down" && (
              <>
                <div className="text-wrapper">{text6}</div>
                <img
                  className={`iconly-light-outline ${iconlyLightOutlineClassNameOverride}`}
                  alt="Iconly light outline"
                  src="/static/MyProfile/img/iconly-light-outline-arrow-down-2-1.png"
                />
              </>
            )}
          </div>
        )}

        {property === "phon-number" && (
          <>
            <div className="box-2">
              <div className="txt-2">{text3}</div>
              <img
                className={`iconly-light-outline ${iconlyLightOutlineClassName}`}
                alt="Iconly light outline"
                src="/static/MyProfile/img/iconly-light-outline-arrow-down-2-1.png"
              />
            </div>
            <div className="txt-wrapper">
              <div className="text-wrapper">{text4}</div>
            </div>
          </>
        )}

        {["active", "password"].includes(property) && (
          <>
            <div className="txt-3">
              {property === "password" && <>{text2}</>}
              {property === "active" && <>info@gmail.com</>}
            </div>
            <img
              className="img"
              alt="Iconly light outline"
              src={property === "active" ? "/img/line-1.svg" : "/icons/img/iconly-light-outline-hide.svg"}
            />
          </>
        )}
      </div>
    </div>
  );
};
