import React from "react";
import Heading from "../Components/Heading";
import { SubHeading } from "../Components/SubHeading";
import { Inputbox } from "../Components/Inputbox";
import { Button } from "../Components/Button";
import { BottomWarning } from "../Components/BottomWarning";

export const Signup = () => {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"sign up"} />
          <SubHeading label={"Enter your infromation to create an account"} />
          <Inputbox placeholder={"Tanujeet"} label={"First Name"} />
          <Inputbox placeholder={"Singh"} label={"Last Name"} />
          <Inputbox placeholder={"singhtanujeet2gmail.com"} label={"Email"} />
          <Inputbox placeholder={"170604"} label={"password"} />
          <div className="pt-4">
            <Button label={"Sign Up"} />
          </div>
          <BottomWarning
            label={"Already have an account?"}
            buttomText={"Sign In"}
            to={"/singin"}
          />
        </div>
      </div>
    </div>
  );
};
