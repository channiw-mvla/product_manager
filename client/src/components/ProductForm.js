import React, { useState } from 'react'
import axios from 'axios';
const ProductForm = ({products,setProducts}) => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState({});

    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new product
        axios.post('http://localhost:8000/api/products', {
            title,    // this is shortcut syntax for title: title,
            price,      // this is shortcut syntax for price: price
            description // this is shortcut syntax for description: description
        })
        .then(res=> setProducts([...products,res.data]))
        .catch(err=>console.log(err))
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <div className="mb-3">
                <label className='form-label'>Title</label>
                <input type="text" className='form-control' onChange = {(e)=>setTitle(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label className='form-label'>Price</label>
                <input type="number"className='form-control' min={0} onChange = {(e)=>setPrice(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label className='form-label'>Description</label>
                <textarea type="text" className='form-control' style={{resize:"none"}} rows={3} onChange = {(e)=>setDescription(e.target.value)}></textarea>
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    )
}
export default ProductForm;

