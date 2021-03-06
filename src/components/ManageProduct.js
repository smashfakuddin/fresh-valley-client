import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import './ManageProduct.css';

const ManageProduct = () => {
    const [manageProduct, setManageProduct] = useState([]);
    useEffect(() => {
        fetch('https://tranquil-badlands-20427.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setManageProduct(data))
    }, []);

    const handleDeleteProduct = (id) => {
        fetch(`https://tranquil-badlands-20427.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json)
            .then(result => {
                console.log('deleted success')
            })
    }
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
                                <td>
                                    <FaEdit />
                                    <FaTrashAlt class='deleteIcon' onClick={() => handleDeleteProduct(pd._id)} />
                                </td>
                            </tr>)
                    }
                </div>
            </table>
        </div>
    );
};

export default ManageProduct;