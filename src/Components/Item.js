import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import * as Yup from 'yup'

export default function Item(props){
    return(
        <div>
            <h1>This is item {props.num}</h1>
        </div>
    )
}