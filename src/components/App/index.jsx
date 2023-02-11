import React from "react";
import AddToDo from "../AddToDo";
import s from "./style.module.css";

export default function App() {
  return <div className={s.container}>
    <AddToDo/>
  </div>;
}
