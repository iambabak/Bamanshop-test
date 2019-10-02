import React from "react";

interface FormProps {
  columns: number;
}

const EachRow: React.FC<FormProps> = props => {
  return (
    <div style={{ height: "100px", backgroundColor: "red", display: "flex" }}>
      {[...Array(props.columns)].map((el, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexBasis: `${100 / props.columns}%`,
            border: "solid black 1px"
          }}
        ></div>
      ))}
    </div>
  );
};

export default EachRow;
