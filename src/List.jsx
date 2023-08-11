import "./list.css"
import React from "react"

export default function List(props)
{
return(
    <div className="list">
    {props.items.map((item, index) => (
        <div key={index}>
          <input type="checkbox" id={item} name={item} />
          <label htmlFor={item}>{item}</label>
        </div>
      ))}
    </div>
)
}