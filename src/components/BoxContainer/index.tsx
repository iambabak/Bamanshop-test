import React from "react";
// import EachRow from './EachRow'

interface FormProps {
  numberOfColumns: Array<number>;
}

const BoxContainer: React.FC<FormProps> = props => {
  return (
    <div style={{ width: "800px", backgroundColor: "blue" }}>
      {props.numberOfColumns.map(
        (el, index) => el > 0 && <div key={index}>123</div>
      )}
    </div>
  );
};

export default BoxContainer;
