import React, { useContext } from "react";
import Global from "../Context/GlobalProvider";
import "../Style.css/./TransitionList.css";

export const TransectionList = () => {
  const { transition } = useContext(Global);
  const { deleteTransection } = useContext(Global);
  console.log(deleteTransection)
  return (
    <div>
      <div>
        <ul id="list">
          {transition.map((item: any) => {
            return (
              <li id="list-item" key="{item.id}" className={item.value==='1'? "income":"outcome"}>
                {item.text} <span>${item.amount}</span>
                <button className="button" onClick={()=> deleteTransection(item.id)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
