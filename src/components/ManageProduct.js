import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import './ManageProduct.css';

const ManageProduct = () => {
    const [manageProduct, setManageProduct] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/products')
            .then(res => res.json())
            .then(data => setManageProduct(data))
    })
    return (
        <div>
            <h4 className='fw-bold'>Manage Product</h4>
            <table>
                <tr className="table-heading">
                    <th>Product Name</th>
                    <th>Wight</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                <div>
                    {
                        manageProduct.map(pd =>
                            <tr>
                                <td>{pd.name}</td>
                                <td>200gm</td>
                                <td>${pd.price}</td>
                                <td><FaEdit /> <FaTrashAlt  /></td>
                            </tr>)
                    }
                </div>
            </table>
        </div>
    );
};

export default ManageProduct;