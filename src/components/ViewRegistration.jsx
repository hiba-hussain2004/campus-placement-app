import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewRegistration = () => {
    const [data,changeData]=useState([])

    const fetchData =()=>{

        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/placement.json").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch()

    }
    useEffect(
        ()=>{
            fetchData()
        },[]
    )

  return (
    <div>
        <div className="container mt-4">
        <h2 className="text-center mb-4">View All Registrations</h2>

        <table className="table table-striped">
          <thead>
            <tr>
              <th> Registration Number</th>
              <th> Full Name</th>
              <th> Branch</th>
              <th> SSLC Mark </th>
              <th>  Plus Two Mark</th>
             
              <th> UG Mark</th>
              
              <th> PG Markr</th>
              
              
            </tr>
          </thead>

          <tbody>
            {
              data.map(
                (value,index)=>{
                  return (
              <tr>
              <td>{value.regNo}</td>
              <td>{value.fullName}</td>
              <td>{value.branch}</td>
              <td>{value.sslcMark}</td> 
              <td>{value.plusTwoMark}</td> 
              <td>{value.ugMark}</td> 
              <td>{value.pgMark}</td> 
              
               
            </tr>

                  )
                }
              )
            }
            
           
          </tbody>
        </table>
      </div>
    </div>

    
  )
}

export default ViewRegistration