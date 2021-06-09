import React from 'react';

const Nav = () => {
    return (
        <>
        <div className="container-fluid bg-light align-center align-middle ">
            <div className="row text-white">
                <div className="col-11 mx-auto">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <h1 className="navbar-brand fw-bold">FRESH VALLEY</h1>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li>
                                        <a className='nav-link ' href="/">Home</a>
                                    </li>
                                    <li>
                                        <a className='nav-link ' href="/orders">Orders</a>
                                    </li>
                                    <li>
                                        <a className='nav-link ' href="/admin">Admin</a>
                                    </li>
                                    <li>
                                        <a className='nav-link ' href="/deals">Deals</a>
                                    </li>                                   
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