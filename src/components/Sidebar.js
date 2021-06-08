import React from 'react';
import './Sidebar.css';
import { FaPlus, FaPen, FaTools } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <h2>FRESH VALLEY</h2>
            <Link to='/add-product'><FaTools/>    Manage Product</Link>
            <Link> <FaPlus />   Add Product</Link>
            <Link><FaPen />  Edit Product</Link>
        </div>
    );
};

export default Sidebar;