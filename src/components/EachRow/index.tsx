import React from "react";
import "./EachRow.css";

interface FormProps {
  columns: number;
}

const EachRow: React.FC<FormProps> = props => {
  return (
    <div className="Row">
      {[...Array(props.columns)].map((el, index) => (
        <div
          key={index}
          className="Cell"
          style={{
            flexBasis: `${100 / props.columns}%`
          }}
        ></div>
      ))}
    </div>
  );
};

export default EachRow;
