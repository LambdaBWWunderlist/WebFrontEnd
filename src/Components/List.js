import React, { useState, useEffect } from "react";
import Axios from "axios";
import * as Yup from "yup";
import Item from "./Item";
import { v4 as uuid } from "uuid";

const initialItems = [
  {
    name: "Buy food",
    body: "remember to buy food",
    completed: false,
    recurring: "weekly",
    due_date: "before you run out of food", // make sure to change this to time stamp
  },
  {
    name: "Cook food",
    body: "remember to cook food",
    completed: false,
    recurring: "daily",
    due_date: "before you starve",
  },
];
export default function List() {
  const [itemList, updateItemList] = useState([]);

  //Initialize first item list
  useEffect(() => {
    updateItemList(initialItems);
  }, []);

  return (
    <div>
      {itemList.map((item) => {
        return <Item itemInfo={item} />;
      })}
    </div>
  );
}
