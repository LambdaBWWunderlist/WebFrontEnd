import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import * as Yup from 'yup'

// {
//     name: STRING; // not nullable, 128 chars max
//     body: TEXT; // nullable
//     completed: BOOLEAN; // not nullable, defaults to false
//     recurring: STRING; // defaults to null, must be null, 'daily', 'weekly' or 'monthly'
//     due_date: TIMESTAMP; // nullable, timestamp format: 'YYYY-MM-DD HH:MM:SS' (UTC)
//   }

//Initial States
const initialFormValues = {
    name: '',
    body: '',
    completed: false,
    recurring: 'One Time',
    due_date: ''
}

const initialFormErrors = {
    name: '',
    body: '',
    completed: '',
    recurring: '',
    due_date: ''
}

const initialDisabled = true

export default function ItemForm(){

    //States
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    const onInputChange = evt => {
        const {name, value} = evt.target

        // Yup
        //     .reach(loginSchema, name)
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

    const onSubmit = evt => {
        evt.preventDefault()

        // const newAccount = {
        //     username: formValues.username.trim(),
        //     password: formValues.password.trim()
        // }
    }

    // useEffect(() => {
    //     itemSchema.isValid(formValues).then(valid => {
    //         setDisabled(!valid);
    //     }, [formValues])
    // })


    return(
        <form className='form container' onSubmit={onSubmit}>
            <div classname='form-group inputs'>
                <label> Task Name
                    <input 
                        value={formValues.name}
                        onChange={onInputChange}
                        name='name'
                        type='text'
                    />
                </label>

                <label> Description
                    <input 
                        value={formValues.body}
                        onChange={onInputChange}
                        name='body'
                        type='text'
                    />
                </label>

                <label> Recurring Event?
                <select
                    onChange={onInputChange}
                    value={formValues.recurring}
                    name='recurring'
                >
                    <option value='Single Event'> Single Event </option>
                    <option value='Daily'>Daily</option>
                    <option value='Weekly'>Weekly</option>
                    <option value='Monthly'>Monthly</option>
                </select>
                </label>
            </div>
        </form>
    )

}