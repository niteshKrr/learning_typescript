import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Greet from "../components/Greet";
import Name from "../components/Name";
import Namelist from "../components/Namelist";
import Status from "../components/Status";
import Heading from "../components/Heading";
import Oscar from "../components/Oscar";
import Button from "../components/Button";
import Container from "../components/Container";
import LoggedIn from "../components/state/LoggedIn";
import Private from "../components/auth/Private";
import Profile from "../components/auth/Profile";
import Lists from "../components/generics/Lists";
import { Toast } from "../components/TempleteLiterals/Toast";

const inter = Inter({ subsets: ["latin"] });

export type UserName = {
  name: string;
};

export default function Home() {
  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event);
  };

  const onchangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  

  const personName = {
    first: "Nitesh",
    last: "Kumar",
  };

  const personNameList = [
    {
      name: "Nitesh",
    },
    {
      name: "mohan",
    },
    {
      name: "mukesh",
    },
  ];

  const arrayOfFruit = ["banana", "mango", "lichi", "guava"];
  const arrayOfNumbers = [10, 20, 30, 40, 50, 60];

  const handleGeneric = (first: number | string | UserName) => {
    if (typeof first === "object") {
      console.log(first.name);
    } else {
      console.log(first); 
    }
  };

  return (
    <>
      <div>
        <Greet name="Nitesh" rupee={20} isLoggedIn={true} />
        <Name name={personName} />
        <Namelist objectArray={personNameList} />
        <Status status="success" />
        <Heading> this is heading </Heading>
        <Oscar>
          <Heading> passing component inside component </Heading>
        </Oscar>
        <button onClick={clickHandler}>click</button>
        {/* <Button handleClick={click} /> */}
        <div>
          <input onChange={onchangeHandler} type="text"></input>
        </div>
        <div>
          <Container style={{ border: "1px solid red", marginTop: "10px" }} />
        </div>
        <div style={{ marginTop: "10px" }}>
          <LoggedIn />
        </div>
        <div style={{ marginTop: "10px" }}>
          <Private isLoggedIn={false} Component={Profile} />
        </div>
        <div style={{ marginTop: "10px" }}>
          <Lists items={arrayOfNumbers} onClick={handleGeneric} />
          <Lists items={arrayOfFruit} onClick={handleGeneric} />
          <Lists items={personNameList} onClick={handleGeneric} />
        </div>
        <div style={{ marginTop: "10px" }}>
          <Toast position="center-top" />
        </div>
      </div>
    </>
  );
}
