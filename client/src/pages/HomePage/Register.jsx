import React from "react";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";


const Register = () => {
  return <section className=" border border-gray-300 rounded-lg bg-white shadow-2xl max-w-xl mx-auto mt-15 p-5">

     <div>
        <h3 className="font-bold text-2xl text-center mb-5">Sign-up</h3>
        <div className="flex flex-col  gap-5">
          <Input type="text" label={"Name"} placeholder={"Enter Name"} />
          <Input type="text" label={"Email"} placeholder={"Enter Email"} />
          <Input
            type="password"
            label={"Password"}
            placeholder={"Enter Password"}
          />
          <Button text={"Sign-up"} />
        </div>
      </div>
  </section>;
};

export default Register;
