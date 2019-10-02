import React from "react";
import EachRow from "../EachRow";

interface FormProps {
  numberOfColumns: Array<number>;
}

const BoxContainer: React.FC<FormProps> = props => {
  return (
    <div style={{ width: "800px", margin: "30px auto" }}>
      {props.numberOfColumns.map(
        (el, index) => el > 0 && <EachRow key={index} columns={el} />
      )}
    </div>
  );
};

export default BoxContainer;
