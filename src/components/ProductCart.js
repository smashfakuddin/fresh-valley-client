import React from 'react';
import "./ProductCart.css";

const ProductCart = (props) => {
    const { name, price, img } = props.product;
    
    return (
        <div className='col-lg-4 col-md-6 col-12 '>
            <div class="card">
                <img src={img}  alt="product Image" />  
                    <h5 class=" align-center card-body">{name}</h5>
                <div class="card-body d-flex justify-content-between">
                    <h4>${price}</h4>
                    <button className="btn btn-success">BUY NOW</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;