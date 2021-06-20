import React, { useEffect, useState } from 'react';
import ProductCart from './ProductCart';

const Products = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://tranquil-badlands-20427.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <>
            <div className="container-fluid  align-center align-middle ">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row g-4 mt-3">
                            {
                                products?.map(pd => <ProductCart product={pd}/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products;