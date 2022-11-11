import React, { useState } from "react";
import "../css_UI/register.css";
import EditorForm from "../component/editor/EditorForm";
import EditorNav from "../component/editor/EditorNav";
import { useLocation, useNavigate } from "react-router-dom";

const EditorProduct = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <>
      <div className="mainRegister">
        <EditorNav />
        <EditorForm state={state} />
      </div>
    </>
  );
};

export default EditorProduct;
