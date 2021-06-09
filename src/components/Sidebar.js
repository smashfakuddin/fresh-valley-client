import React from 'react';
import './Sidebar.css';
import { FaPlus, FaPen, FaTools } from "react-icons/fa";
import AddProduct from './AddProduct';

//for testing 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ManageProduct from './ManageProduct';
import EditProduct from './EditProduct';

const routes = [
    {
        path: "/manage-product",
        exact: true,
        sidebar: () => <></>,
        main: () => <ManageProduct />
    },
    {
        path: "/add-product",
        main: () => <AddProduct />
    },
    {
        path: "/edit-product",
        main: () => <EditProduct />
    }
];


const Sidebar = () => {
    return (
        <Router>
            <div style={{ display: "flex" }}>
                <div
                    style={{
                        padding: "10px",
                        width: "20%",
                        background: "rgba(32,61,55,255)",
                        height: '100vh',
                        minWidth: '350px'
                    }}
                >
                    <ul style={{ listStyleType: "none", padding: '10px', margin: '20px 50px', color: "black" }}>
                        <li className='test'>
                            <Link to="/manage-product"><FaTools />   Manage Product</Link>
                        </li>
                        <br />
                        <li className="test">
                            <Link to="/add-product"><FaPlus />   Add Product</Link>
                        </li>
                        <br />
                        <li className='test'>
                            <Link to="/edit-product"><FaPen />   Edit Product</Link>
                        </li>
                    </ul>
                </div>

                <div style={{ flex: 1, padding: "10px" }}>
                    <Switch>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.main />}
                            />
                        ))}
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default Sidebar;