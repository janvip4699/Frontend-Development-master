import React from "react";
function ListView(props)
{
    return(
        <>
           <i className="bi bi-check"></i><li style={{"listStyleType":"none","fontSize":"20px","backgroundColor":"white","padding":"5px"}}>{props.item}</li>
        </>
    )
}
function List()
{
    const list = [
        {id: 1, item: "Use Array.map"},
        {id: 2, item: "Not a for loop"},
        {id: 3, item: "Give each item a unique key"},
        {id: 4, item: "Avoid using array index as the key"}
    ];

    return(
        <>
            <div className="list-background">
            <h1>The "React Way" to Render a List</h1>
            <ul>
                {list.map((items) => <ListView key= {items.id} item={items.item} />)}
            </ul>
            </div>
        </>
    )
}
export default List