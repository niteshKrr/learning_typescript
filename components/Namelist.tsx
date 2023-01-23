import React from "react";

type arrayProps = {
  objectArray: {
    name: string;
  }[];
};

const Namelist = (props: arrayProps) => {
  return (
    <div>
      {props.objectArray.map((names, index) => {
        return <h4 key={index} >{names.name}</h4>;
      })}
    </div>
  );
};

export default Namelist;
