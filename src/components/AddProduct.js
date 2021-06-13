import React, { useState } from 'react';
import './AddProduct.css';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddProduct = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null)
    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            img: imageURL
        }
        console.log(productData, data);
        fetch('http://localhost:4000/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => console.log('server site response', res))
    };


    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'b42d16fe94fa7aeed2e4881b58bd1872');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className='add-product'>
            <h3 className='fw-bold'>Add product</h3>
            <form onSubmit={handleSubmit(onSubmit)} className='add-product'>
                <div className="product-input">
                    <div className="input-field">
                        <label htmlFor="product-name"><strong>Product Name</strong></label>
                        <input name="name" defaultValue="" placeholder='Product Name' {...register("name")} />
                        <label htmlFor="price"><strong>Add Price</strong></label>
                        <input name="price" defaultValue="" placeholder='Enter Price' {...register("price")} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="wight"><strong>Wight</strong></label>
                        <input type="text" name="Wight" placeholder='Enter Wight' />
                        <label htmlFor="add-photo"><strong>Add Photo</strong></label>
                        <input name="exampleRequired" type='file' onChange={handleImageUpload} />
                        <div className="d-flex justify-content-end">
                            <input className='btn btn-secondary w-25' type="submit" value="Submit" />
                        </div>
                    </div>
                </div>
            </form>


        </div>
    );
};

export default AddProduct;