import React from "react";
function ListView(props)
{
    return(
        <>
            <li>{props.item}</li>  
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
            <h1>The "React Way" to Render a List</h1>
            <ul>
                {list.map((items) => <ListView key= {items.id} item={items.item} />)}
            </ul>
        </>
    )
}
export default List