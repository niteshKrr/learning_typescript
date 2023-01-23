import React from "react";
import { useState } from "react";

type authUser = {
  name: string;
  email: string;
};

const LoggedIn = () => {
  // const [logged, setlogged] = useState<authUser | false>(false);

  // TypeScript allows you to override its inferred and analyzed view of types in any way you want to. This is done  by a mechanism called "type assertion". TypeScript's type assertion is purely you telling the compiler that you know about the types better than it does, and that it should not second guess you.

  const [logged, setlogged] = useState<authUser>({} as authUser); // type assertion

  const loggedin = () => {
    setlogged({
      name: "nitesh",
      email: "nkumar35101",
    });
  };

  // const loggedout = () => {
  //     setlogged(false);
  // }

  return (
    <div>
      <button onClick={loggedin}>loggedin</button>
      {/* <button onClick={loggedout}>loggedout</button> */}
      <div>
        you are{" "}
        {logged ? `logged_in , ${logged.name} , ${logged.email}` : "logged_out"}
      </div>
    </div>
  );
};

export default LoggedIn;
