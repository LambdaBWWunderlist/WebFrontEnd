// {
//     id: INTEGER; // assigned by database, auto increments
//     username: STRING; // not nullable, unique - 128 chars max
//     password: STRING; // not nullable - 256 chars max
//     email: STRING; // not nullable, unique - 128 chars max
//     created_at: TIMESTAMP; // defaults to now, server will handle this
//   }

import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import * as Yup from 'yup'


//Initial States
const initialFormValues = {
    username: '',
    password: '',
    email: '',
    classes: [],
    TOS: ''
}
  
const initialFormErrors = {
        username: '',
    password: '',
    email: '',
    classes: [],
    TOS: ''
}

const initialDisabled = false


export default function Login(){

    //States
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    const onInputChange = evt => {
        const {name, value} = evt.target

        // Yup
        //     .reach(formSchema, name)
        //     .valudate(value)
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

        //LOGIN AUTHENTICATION SHIT HERE?
    }

    //Toggle button disable
    // useEffect(() => {
    //     formSchema.isValid(formValues).then(valid => {
    //         setDisabled(!valid);
    //     }, [formValues])
    // })

    return(
        <form className = 'form container' onSubmit={onSubmit}>
            <div className="form-group inputs">
                <label> Username
                    <input 
                        value={formValues.user}
                </label>
            </div>
        </form>
    )
}