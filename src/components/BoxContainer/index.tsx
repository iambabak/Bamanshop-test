import React from "react";
import EachRow from "../EachRow";
import "./BoxContainer.css";

interface IBoxProps {
  numberOfColumns: Array<number>;
}

const BoxContainer: React.FC<IBoxProps> = props => {
  return (
    <div className="BoxContainer">
      {props.numberOfColumns.map(
        (el, index) => el > 0 && <EachRow key={index} columns={el} />
      )}
    </div>
  );
};

export default BoxContainer;
