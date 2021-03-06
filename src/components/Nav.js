import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import './Nav.css';
import { FaUserCircle } from "react-icons/fa";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const Nav = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const renderTooltip = props => (
        <Tooltip {...props}>{loggedInUser.email}</Tooltip>
    );

    const handleSignOut=()=>{
        const newUserInfo = { ...loggedInUser};
        newUserInfo.email = '';
        setLoggedInUser(newUserInfo);
    }
    return (
        <>
            <div className="container-fluid bg-light align-center align-middle ">
                <div className="row text-white">
                    <div className="mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <h1 className="navbar-brand fw-bold btn">FRESH VALLEY</h1>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li>
                                            <Link className='nav-link ' to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link className='nav-link ' to="/orders">Orders</Link>
                                        </li>
                                        <li>
                                            <Link className='nav-link ' to="/admin">Admin</Link>
                                        </li>
                                        <li>
                                            <Link className='nav-link ' to="/deals">Deals</Link>
                                        </li>

                                        {loggedInUser.email ?
                                            loggedInUser.img === '' ?
                                                <OverlayTrigger placement="bottom" overlay={renderTooltip}>
                                                    <FaUserCircle onClick={handleSignOut} className='icon' />
                                                </OverlayTrigger> :

                                                <OverlayTrigger placement="bottom" overlay={renderTooltip}>
                                                    <img onClick={handleSignOut} className='photo' src={loggedInUser.img} alt='' />
                                                </OverlayTrigger> :

                                            null}

                                        {loggedInUser.email ?
                                            null :
                                            <Link to="/login" className="btn btn-success">Log In</Link>}

                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;