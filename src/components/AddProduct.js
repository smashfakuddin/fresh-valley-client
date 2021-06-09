import React from 'react';
import './AddProduct.css';

const AddProduct = () => {
    return (
        <div className='add-product'>
            <h3 className='fw-bold'>Add product</h3>
            <div className="product-input">
                <div className="input-field">
                    <label htmlFor="product-name"><strong>Product Name</strong></label>
                    <input type="text" name="product-name" placeholder='Enter Name' />
                    <label htmlFor="price"><strong>Add Price</strong></label>
                    <input type="number" name="price" id="" placeholder='Enter Price' />
                </div>
                <div className="input-field">
                    <label htmlFor="wight"><strong>Wight</strong></label>
                    <input type="text" name="Wight" placeholder='Enter Wight' />
                    <label htmlFor="add-photo"><strong>Add Photo</strong></label>
                    <input type="file" name="add-photo" id="" class="custom-file-input" />
                    <div className="d-flex justify-content-end">
                        <input className='btn btn-secondary w-25' type="submit" value="save" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;