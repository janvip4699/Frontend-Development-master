import React from "react";
function EmployeeListArray()
{
    const EmpList=[{
        id:101,
        name:"abc",
    },
    {
        id:102,
        name:"def",
    },
    {
        id:103,
        name:"ghi",
    },
    {
        id:104,
        name:"jkl",
    },
    {
        id:105,
        name:"mno",
    },
    ];
   return(
      <>
       {EmpList && EmpList.map((items)=>{
                return(
                    <>
                        <div className="box">
                           <h2>{items.name}</h2>
                        </div>
                    </>
                )
            })}
             
      </>
   )
}

export default EmployeeListArray