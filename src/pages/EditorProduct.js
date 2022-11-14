import React, { useState } from "react";
import "../css_UI/register.css";
import EditorForm from "../component/editor/EditorForm";
import EditorNav from "../component/editor/EditorNav";


const EditorProduct = () => {
  return (
    <>
      <div className="mainRegister">
        <EditorNav />
        <EditorForm/>
      </div>
    </>
  );
};

export default EditorProduct;
