import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <h1 style ={{color:'#fff',display:'Flex',flexDirection:'column',textAlign:'center',justifyContent:"center",fontWeight:'bold',paddingTop:'80px'}}>Welcome to Library Management System by Kanishka Srivastava</h1>
                <div className='button-container-home'>
                    <Link to='/login' className='btn btn-primary-home'>START</Link>
                </div>
            </div>
        );
    }
}

export default Home;