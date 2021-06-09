import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import './ManageProduct.css';

const ManageProduct = () => {
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
                
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>200gm</td>
                    <td>200$</td>
                    <td><FaEdit/> <FaTrashAlt/></td>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>200gm</td>
                    <td>200$</td>
                    <td><FaEdit/> <FaTrashAlt/></td>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>200gm</td>
                    <td>200$</td>
                    <td><FaEdit/> <FaTrashAlt/></td>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>200gm</td>
                    <td>200$</td>
                    <td><FaEdit/>   <FaTrashAlt/></td>
                </tr>

                </div>
                
            </table>
        </div>
    );
};

export default ManageProduct;