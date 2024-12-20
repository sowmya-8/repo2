//import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";

export default function EmpApi() {

useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/photos").then(
        res=>(
            setEmpData(res.data)
        )
    );
},[]);


    const [empData,setEmpData] = useState([]);
  
    // () => ()
  
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">albumId</th>
              <th scope="col">id</th>
              <th scope="col">title</th>
            </tr>
          </thead>
          <tbody>
            {empData.map(
                (x)=>( 
                <tr>
                    <td>{x.albumId}</td>
                    <td>{x.id}</td>
                    <td>{x.title}</td>
                  </tr>
                 )
            )}
           
          </tbody>
        </table>
      </div>
    );
  }