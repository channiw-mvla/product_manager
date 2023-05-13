// import React, { useState } from 'react'
import axios from 'axios';
const ProductForm = ({products,setProducts}) => {
    //keep track of what is being typed via useState hook


    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new product
        const title =e.target.title.value
        const price =e.target.price.value
        const description = e.target.description.value

        axios.post('http://localhost:8000/api/products', {
            title,    // this is shortcut syntax for title: title,
            price,      // this is shortcut syntax for price: price
            description // this is shortcut syntax for description: description
        })
        .then(res=> {
            setProducts([...products,res.data])
            e.target.title.value =""
            e.target.price.value =""
            e.target.description.value =""
        })
        .catch(err=>console.log(err))
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <div className="mb-3">
                <label className='form-label'>Title</label>
                <input type="text" name={"title"} className='form-control' />
            </div>
            <div className="mb-3">
                <label className='form-label'>Price</label>
                <input type="number" name={"price"} className='form-control' min={0} />
            </div>
            <div className="mb-3">
                <label className='form-label'>Description</label>
                <textarea type="text" name={"description"} className='form-control' style={{resize:"none"}} rows={3} ></textarea>
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    )
}
export default ProductForm;

