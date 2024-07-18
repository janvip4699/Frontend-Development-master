import React from "react";
function EmployeeList(props)
{
   return(
      <>
        <h1>My name is {props.name}</h1>
      </>
   )
}

function EmployeeData(props)
{
    return(
        <>
            <EmployeeList name="Janvi Parmar"></EmployeeList>
            <h3>Employee Address is : {props.address}</h3>
        </>
    )
}
export default EmployeeData