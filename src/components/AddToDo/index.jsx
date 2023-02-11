import React from "react";
import s from "./style.module.css";

export default function AddToDo() {
  const onSubmit = (event) => {
    event.preventDefault();
    const { days, priority, description } = event.target;

    console.log(days.value, priority.value, description.value);

    days.value = "def";
    priority.value = "def";
    description.value = "";
  };
  return (
    <form className={s.form} onSubmit={onSubmit}>
      <select className={s.days} id="days" name="days">
        <option className={s.def} value="def">
          Select day
        </option>
        <option value="monday">Monday</option>
        <option value="tuesday">Tuesday</option>
        <option value="wednesday">Wednesday</option>
        <option value="thursday">Thursday</option>
        <option value="friday">Friday</option>
        <option value="saturday">Saturday</option>
        <option value="sunday">Sunday</option>
      </select>
      <select className={s.prio} id="priority" name="priority">
        <option className={s.def} value="def">
          Select priority
        </option>
        <option value="important">important</option>
        <option value="unimportant">unimportant</option>
      </select>
      <input
        className={s.box_C}
        type="text"
        name="description"
        placeholder="description for todo ..."
      />
      <button className={s.button}>Add ToDo</button>
    </form>
  );
}
