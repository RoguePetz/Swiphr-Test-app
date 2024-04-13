import React from 'react';
import "../style/nav.css"

import settingsimage from './assets/icons/setting-2.png'
import notificationimage from './assets/icons/notification.png'
import messageimage from './assets/icons/message-question.png'
import logo from './assets/icons/logo.png'
import pfp from './assets/icons/pfp.png'



const Navbar = () => {
    return(
        <div className='nav-container' >
            <div className='nav-main'>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <img src={logo} width={'20px'} height={'20px'}/>
                    <p>Swiphr</p>
                </div>
                <div style={{display:'flex',gap:'20px'}}>
                    <p>Home</p>
                    <p>Dashboard</p>
                    <p>Product</p>
                    <p>Orders</p>
                    <p>Finance</p>
                </div>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'20px'}}>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'10px'}}>
                        <img src={notificationimage}/>
                        <img src={settingsimage}/>
                        <img src={messageimage}/>
                    </div>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'10px'}}>
                        <img src={pfp}/>
                        <p>Store Name</p>
                    </div>

 
                </div>
            </div>
        </div>
    )
}

export default Navbar