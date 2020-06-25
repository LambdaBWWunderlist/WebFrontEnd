import React, { useState, useEffect } from "react";
import Axios from "axios";
import * as Yup from "yup";
import Item from "./Item";
import itemSchema from './Validation/itemSchema'
import ItemForm from './ItemForm'
import ItemSearch from "./ItemSearch";

//Dummy data to start with
const initialItems = [
  {
    name: "Buy food",
    body: "remember to buy food",
    completed: false,
    recurring: "weekly",
    due_date: "before you run out of food", //! make sure to change this to time stamp
  },
  {
    name: "Cook food",
    body: "remember to cook food",
    completed: false,
    recurring: "daily",
    due_date: "before you starve",
  },
];

//Initial States
//For the form
const initialFormValues = {
  name: '',
  body: '',
  completed: false,
  recurring: 'One Time',
  due_date: 'Due date time stamp'
}

const initialFormErrors = {
  name: '',
  body: '',
  completed: '',
  recurring: '',
  due_date: ''
}

const initialDisabled = false

const initialSearch = ''

export default function List() {
  //States
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  const [itemList, updateItemList] = useState([]);
  const [search, setSearch] = useState(initialSearch)
  

  //Function to pass into the newIterm form to track input changes
  const onFormInputChange = evt => {
    const {name, value} = evt.target

    // Yup
    //     .reach(itemSchema, name)
    //     .validate(value)
    //     .then(() => {
    //         setFormErrors({
    //             ...formErrors,
    //             [name]: ""
    //         });
    //     })
    //     .catch(err => {
    //         setFormErrors({
    //             ...formErrors,
    //             [name]: err.errors[0]
    //         });
    //     })

    setFormValues({
        ...formValues,
        [name]: value
    })
  }


  const searchInputChange = evt => {
    const value = evt.target.value

    setSearch(value)
    console.log(search)
  }
  //Submit handler for new Item
  const onSubmit = evt => {
      evt.preventDefault()

      const newItem = {
          name: formValues.name.trim(),
          body: formValues.body.trim(),
          completed: formValues.completed,
          recurring: formValues.recurring,
          due_date: formValues.due_date
      }

      itemSubmit(newItem)
  }

  //Initialize first item list
  useEffect(() => {
    updateItemList(initialItems)
  }, []);


  const itemSubmit = newItem => {
    Axios.post('https://reqres.in/api/users', newItem)
    .then(res => {
      console.log(res)
      updateItemList([...itemList, res.data])
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      setFormValues(initialFormValues)
    })
  }

  return (
    <div>
      <ItemSearch 
        search={search}
        searchInputChange={searchInputChange}
      />
      {itemList.map((item) => {
          return <Item itemInfo={item} />;
      })}
      <ItemForm 
        values={formValues}
        onInputChange={onFormInputChange}
        onSubmit={onSubmit}
        disabled={disabled}
        errors={formErrors}
      />
    </div>
  );
}
