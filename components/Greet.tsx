import React from "react";

type Greeting = {
  name: string;
  rupee?: number;
  isLoggedIn: boolean;
};

const Greet = (props: Greeting) => {
  const { rupee = 10 } = props;
  return (
    <div>
      {props.isLoggedIn ? (
        <h2>
          {`Hello ${props.name} ! are you ready to go to the moon by spending rs
        ${rupee}.`}
        </h2>
      ) : (
        <h2>Hii guest</h2>
      )}
    </div>
  );
};

export default Greet;
