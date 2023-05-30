import React from 'react'
import Logo from '../Assets/favicon.png'
import Dashboard from '../Assets/dashboard.png'
import User from '../Assets/user.png'
import DownArrow from '../Assets/uparrow.png'
import UpArrow from '../Assets/downarrow.png'

const SidebarEdit = () => {
    return (
        <>
            {/* <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">open</button> */}
            {/* <div className='button-class d-flex'>
                    <button type="button" className="btn-open" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"  />
            </div> */}
            <div className="offcanvas offcanvas-start show"
                data-bs-scroll="true"
                data-bs-backdrop="false"
                tabIndex={-1} id="offcanvasScrolling"
                aria-labelledby="offcanvasScrollingLabel"
                style={{ width: '300px' }}
            >

                <div className="offcanvas-header image-box-edit">
                    <img src={Logo} width='127px' />
                </div>

                <div className='button-classs d-flex'>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>

                <div className="offcanvas-body">

                    <button type="button" className=" cos-button d-flex ">
                        <img src={Dashboard} />
                        DASHBOARD
                    </button>
                <div className="flex-shrink-0 bg-white" style={{ width: '280px', marginTop: '38px' }}>
                        <ul className="list-unstyled ps-0">
                            <li className="mb-1">
                                <button type="button" className=" cos-col-button d-flex " data-bs-toggle="collapse" data-bs-target="#USERS" aria-expanded="false">
                                    <img src={User} />
                                    USERS
                                    <img src={DownArrow} />
                                </button>

                                <div className="collapse cos-margin" id="USERS" style={{}}>
                                    <ul className="btn-toggle-nav list-unstyled fw-normal small">
                                        <li className='cos-li'><a href="#" className="link-dark rounded cos-sub-meu">Overview</a></li>
                                        <li className='cos-li'><a href="#" className="link-dark rounded cos-sub-meu">Updates</a></li>
                                        <li className='cos-li'><a href="#" className="link-dark rounded cos-sub-meu">Reports</a></li>
                                    </ul>
                                </div>

                            </li>
                            <li className="mb-1">
                                <button type="button" className=" cos-col-button d-flex " data-bs-toggle="collapse" data-bs-target="#ANALYTICS" aria-expanded="false">
                                    <img src={User} />
                                    ANALYTICS
                                    <img src={DownArrow} />
                                </button>

                                <div className="collapse cos-margin" id="ANALYTICS" style={{}}>
                                    <ul className="btn-toggle-nav list-unstyled fw-normal small">
                                        <li className='cos-li'><a href="#" className="link-dark rounded cos-sub-meu">Overview</a></li>
                                        <li className='cos-li'><a href="#" className="link-dark rounded cos-sub-meu">Updates</a></li>
                                        <li className='cos-li'><a href="#" className="link-dark rounded cos-sub-meu">Reports</a></li>
                                    </ul>
                                </div>

                            </li>
                            <li className="mb-1">
                                <button type="button" className=" cos-col-button d-flex " data-bs-toggle="collapse" data-bs-target="#REPORTS" aria-expanded="false">
                                    <img src={User} />
                                    CREATE REPORTS
                                    <img src={DownArrow} />
                                </button>

                                <div className="collapse cos-margin" id="REPORTS" style={{}}>
                                    <ul className="btn-toggle-nav list-unstyled fw-normal small">
                                        <li className='cos-li'><a href="#" className="link-dark rounded cos-sub-meu">Overview</a></li>
                                        <li className='cos-li'><a href="#" className="link-dark rounded cos-sub-meu">Updates</a></li>
                                        <li className='cos-li'><a href="#" className="link-dark rounded cos-sub-meu">Reports</a></li>
                                    </ul>
                                </div>

                            </li>
                            <li className="mb-1">
                                <button type="button" className=" cos-col-button d-flex " data-bs-toggle="collapse" data-bs-target="#DOCUMENTATION" aria-expanded="false">
                                    <img src={User} />
                                    DOCUMENTATION
                                    <img src={DownArrow} />
                                </button>

                                <div className="collapse cos-margin" id="DOCUMENTATION" style={{}}>
                                    <ul className="btn-toggle-nav list-unstyled fw-normal small">
                                        <li className='cos-li'><a href="#" className="link-dark rounded cos-sub-meu">Overview</a></li>
                                        <li className='cos-li'><a href="#" className="link-dark rounded cos-sub-meu">Updates</a></li>
                                        <li className='cos-li'><a href="#" className="link-dark rounded cos-sub-meu">Reports</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="mb-1">
                                <button type="button" className=" cos-col-button d-flex " data-bs-toggle="collapse" data-bs-target="#SETTINGS" aria-expanded="false">
                                    <img src={User} />
                                    SETTINGS
                                    <img src={DownArrow} />
                                </button>

                                <div className="collapse cos-margin" id="SETTINGS" style={{}}>
                                    <ul className="btn-toggle-nav list-unstyled fw-normal small">
                                        <li className='cos-li'><a href="#" className="link-dark rounded cos-sub-meu">Overview</a></li>
                                        <li className='cos-li'><a href="#" className="link-dark rounded cos-sub-meu">Updates</a></li>
                                        <li className='cos-li'><a href="#" className="link-dark rounded cos-sub-meu">Reports</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="mb-1">
                                <button type="button" className=" cos-col-button d-flex " data-bs-toggle="collapse" data-bs-target="#ALERTS" aria-expanded="false">
                                    <img src={User} />
                                ALERTS
                                    <img src={DownArrow} />
                                </button>

                                <div className="collapse cos-margin" id="ALERTS" style={{}}>
                                    <ul className="btn-toggle-nav list-unstyled fw-normal small">
                                        <li className='cos-li'><a href="#" className="link-dark rounded cos-sub-meu">Overview</a></li>
                                        <li className='cos-li'><a href="#" className="link-dark rounded cos-sub-meu">Updates</a></li>
                                        <li className='cos-li'><a href="#" className="link-dark rounded cos-sub-meu">Reports</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <button type="button" className=" cos-buttonn d-flex ">
                        
                        LOGOUT
                    </button>
                </div>
            </div>
        </>
    )
}

export default SidebarEdit
