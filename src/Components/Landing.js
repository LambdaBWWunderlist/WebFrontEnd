import React, {useState, useEffect} from "react"
import axios from 'axios'
import Friend from './Friends'

export default function Landing() {

    const [apiData, setAPIData] = useState([])

    useEffect(() => {
      axios.get(`https://reqres.in/api/users`)
       .then(res => {
         setAPIData(res.data.data)
         console.log(res)
         console.log(res.data.data)
         console.log(apiData)
       })
       .catch(err => {
         console.log(`There's an error of ${err}`)
       })
    }, [])

    return(
        <div>
            <h1>Users online</h1>
            {apiData.map(user => {
                return <Friend info={user}/>
            })}
        </div>
    )
}