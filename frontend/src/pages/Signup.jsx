import React from "react";
import Heading from "../Components/Heading";
import { SubHeading } from "../Components/SubHeading";

export const Signup = () => {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"sign up"} />
          <SubHeading label={"Enter your infromation to create an account"} />
        </div>
      </div>
    </div>
  );
};
