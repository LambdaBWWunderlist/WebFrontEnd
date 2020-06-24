import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import * as Yup from 'yup'

export default function Item(props){
    return(
        <div>
            <h1>Task: {props.itemInfo.name}</h1>
            <p>Details: {props.itemInfo.body}</p>
            <p>Due by: {props.itemInfo.due_date}</p>
        </div>
    )
}

// {
//     name: 'name',
//     ID: 'integer',
//     completed: 'true/false',
//     created_at: 'time',
//     updated_at: 'time',
//     userID: 'integer',
//     recurring: 'dropdown of [single time, daily, monthly, weekly]'
// }