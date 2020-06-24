import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import * as Yup from 'yup'
import Item from './Item'

export default function List(){
    return(
        <div>
            <Item num='1'/>
            <Item num='2'/>
        </div>
    )
}