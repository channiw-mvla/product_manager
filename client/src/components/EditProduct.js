import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
export const EditProduct = ({products,setProducts}) => {
    const [product, setProduct] = useState([])
    const {id} = useParams(); 
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/"+id)
        .then(res => setProduct(res.data))
        .catch(err => console.log(err))
        }
    ,[])
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new product
        const title =e.target.title.value
        const price =e.target.price.value
        const description = e.target.description.value
        axios.patch('http://localhost:8000/api/products/'+id, {
            title,    // this is shortcut syntax for title: title,
            price,      // this is shortcut syntax for price: price
            description // this is shortcut syntax for description: description
        })
        .then(res=> {
            setProducts([...products,res.data])
            e.target.title.value =""
            e.target.price.value =""
            e.target.description.value ="";
            navigate("/products")
        })
        .catch(err=>console.log(err))
    }
    return (
            <form action="" className='d-flex flex-column' onSubmit={onSubmitHandler}>
                <h1>Edit Product</h1>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" name='title' className="form-control" placeholder={product.title} defaultValue={product.title}/>
                </div>
                <div className="mb-3">  
                    <label className="form-label">Price</label>
                    <input type="number" name='price' min={0} className="form-control" placeholder={product.price} defaultValue={product.price}/>
                </div>
                <div className="mb-3">  
                    <label className="form-label">Description</label>
                    <textarea type="text" name='description' className="form-control" style={{resize:"none"}} rows={3} placeholder={product.description} defaultValue={product.description}></textarea>
                </div>
                <button className="btn btn-primary">Save</button>
            </form>
    )
}
