import React from "react";
import { BottomWarning } from "../Components/BottomWarning";
import { Button } from "../Components/Button";
import { Heading } from "../Components/Heading";
import { InputBox } from "../Components/Inputbox";
import { SubHeading } from "../Components/SubHeading";

export const Signup = () => {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"sign up"} />
          <SubHeading label={"Enter your infromation to create an account"} />
          <InputBox placeholder={"Tanujeet"} label={"First Name"} />
          <InputBox placeholder={"Singh"} label={"Last Name"} />
          <InputBox placeholder={"singhtanujeet@gmail.com"} label={"Email"} />
          <InputBox placeholder={"170604"} label={"password"} />
          <div className="pt-4">
            <Button label={"Sign Up"} />
          </div>
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign In"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};
