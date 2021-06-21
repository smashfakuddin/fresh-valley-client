import React from 'react';
import "./ProductCart.css";

const ProductCart = (props) => {
    const { name, price, img } = props.product;

    return (
        <div className='col-lg-4 col-md-6 col-12 '>
            <div class="card shadow p-3 mb-5 bg-white rounded " >
                <img src={img} alt="product Image" className='card-img-top img-fluid ' width='150px'/>
                <h5 class="card-body">{name}</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <div class="card-body d-flex justify-content-between">
                    <h4>${price}</h4>
                    <button className="btn btn-success">BUY NOW</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;