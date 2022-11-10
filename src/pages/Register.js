import React from "react";
import "../css_UI/register.css";
import RegisterForm from "../component/registerProduct/RegisterForm";
import RegisterNav from "../component/registerProduct/RegisterNav";

const Register = () => {
  return (
    <>
      <div className="mainRegister">
        <RegisterNav />
        <RegisterForm />
      </div>
    </>
  );
};

export default Register;
