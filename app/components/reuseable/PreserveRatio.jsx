import React from "react";

const PreserveRatio = (props) => {
  return (
    <div
      className={props.twStyles}
      style={{
        width: `${props.width}`,
        height: "0",
        paddingBottom: `calc(${props.width}*${props.aspectRatio})`,
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default PreserveRatio;
