import React from "react";
import s from "./InputAnswer.module.css";
import { NavLink } from 'react-router-dom';



const InputAnswer = (props) => {
  return (
    <div className={s.inputAnswer}>
      <textarea rows="1" placeholder="Type your message..." ></textarea>
      <button></button>
    </div>
  )
}

export default InputAnswer;
