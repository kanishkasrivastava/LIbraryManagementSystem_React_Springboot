import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

class HeaderComponent extends Component {
    render() {
        const menuItems = [
            { 
                to: 'https://wa.me/1234567890', 
                target: "_blank", 
                rel: "noopener noreferrer", 
                text: 'Whatsapp' 
              },
            { 
                to: 'https://instagram.com/', 
                target: "_blank", 
                rel: "noopener noreferrer", 
                text: 'Instagram' 
              },
            { 
                to: 'https://gmail.com/', 
                target: "_blank", 
                rel: "noopener noreferrer", 
                text: 'Gmail' 
              }
        ];
        

        const { location } = this.props;

        if (location.pathname === '/login' || location.pathname==='/signup' || location.pathname==='/') {
            return (
                <div>
                    <header className="my-navbar">
                        <div className="my-navbar-brand">
                            <a
                                href="https://github.com/kanishkasrivastava"
                                className="my-navbar-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className='main-heading'>LIBRARY MANAGEMENT SYSTEM</div>
                            </a>
                        </div>
                    </header>
                </div>
            );
        }
        return (
            <div>
                <header className="my-navbar">
                    <div className="my-navbar-brand">
                        <a
                            href="https://github.com/kanishkasrivastava"
                            className="my-navbar-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className='main-heading'>LIBRARY MANAGEMENT SYSTEM</div>
                        </a>
                    </div>
                    <Link className='navheading' to='/'>HOME</Link>
                    <Link className='navheading' to='/students'>STUDENT LIST</Link>
                    <Link className='navheading' to='/add-student/_add'>ADD STUDENT</Link>
                    <Dropdown className="custom-dropdown">
                        <Dropdown.Toggle id="dropdown-basic">
                            Contact US
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {menuItems.map((item, index) => (
                                <Dropdown.Item key={index} href={item.to}>
                                    {item.text}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </header>
            </div>
        );
    }
}

export default withRouter(HeaderComponent);
