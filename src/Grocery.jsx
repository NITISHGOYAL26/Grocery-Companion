import React,{ useEffect, useState } from "react"
import "./grocery.css"


export default function Grocery()
{
    const [message,setMessage]=useState("");
    const [items,setItems]=useState(()=>{
        const stored=localStorage.getItem("checkboxItems");
        if(stored)
        {
            return JSON.parse(stored);
        }
        else
        {
            return [];
        }
    });

    const handleChange=(event)=>{
        setMessage(event.target.value);
    }

    const handleAdd=()=>{
        if (message!== '') {
            setItems((prevItems) => [message, ...prevItems]);
            setMessage("");
        }
    }

    const handleDelete=(index)=>{
        setItems((prevItems)=>prevItems.filter((_,i)=>i!=index));
    }

    useEffect(()=>
    {
        localStorage.setItem('checkboxItems',JSON.stringify(items));

    },[items]);

    return(
        <div className="wrapper">
            <div className="grocery">
                <h1 className="heading">Grocery Buddy</h1>
                <div className="add">
                    <input type="text" onChange={handleChange} value={message} />
                    <button className="btn" onClick={handleAdd}>Add Item</button>
                </div>
                <table className="tab">
                    <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td><i className="fa-regular fa-pen-to-square" style={{color: "#391570",}} /></td>
                            <td><label htmlFor={item}>{item}</label></td>   
                            <td><button className="del" id={item} onClick={()=>handleDelete(index)}><i 
                        className="fa-solid fa-xmark fa-lg" style={{color: "#de2121"}}></i></button></td> 
                        </tr>
                    ))}      
                    </tbody>
                </table>   
            </div>
            <div className="photo">
                <img src="img.png" alt="" />
            </div>
        </div>
    )
}