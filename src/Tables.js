import {useState} from "react";
export function Tables() {
    var [data]=useState([
        {
        id:1,
         Name: "Aravind",
         Gender: "male", 
         HomeTown: "Canada",
         Born: "27/12/1997",
       
        },
        {
        id:2,
         Name: "Padma",
         Gender: "female", 
         HomeTown: "London",
         Born: "22/05/2003",
        
        },

        {
        id:3,
         Name: "Bala",
         Gender: "unknown",
         HomeTown: "India",
         Born: "19/11/1999",
        
        },
        {
            id:4,
             Name: "Mani",
             Gender: "Male",
             HomeTown: "Europe",
             Born: "13/04/2001",
            
            },
            {
                id:5,
                 Name: "Divya",
                 Gender: "Female",
                 HomeTown: "Sydney",
                 Born: "23/08/2002",
                
                }
    ])
   
  return (
    <div>
      <h1>Tables</h1>
      <table  className="table">
        <thead  className="thead-light">
          <tr>
            <th >#</th>
            <th >Name</th>
            <th>Gender</th>
            <th >HomeTown</th>
            <th>Born</th>
          </tr>
        </thead>
        <tbody>
         {data.map((element)=>
           <tr  key={element.id}>
            <th>{element.id}</th>
            <td>{element.Name}</td>
            <td>{element.Gender}</td>
            <td>{element.HomeTown}</td>
            <td>{element.Born}</td>
          </tr>)} 
         {}
        </tbody>
      </table>
    </div>
  );
}
