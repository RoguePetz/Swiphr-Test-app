import React from 'react';
import "../style/nav.css"

import settingsimage from './assets/icons/setting-2.png'
import notificationimage from './assets/icons/notification.png'
import messageimage from './assets/icons/message-question.png'
import logo from './assets/icons/logo.png'
import pfp from './assets/icons/pfp.png'
import title from './assets/icons/title.png'
import dd from './assets/icons/dd.png'



const Navbar = () => {
    return(
        <div className='nav-container' >
            <div className='nav-main'>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <img src={logo} width={'25px'} height={'25px'}/>
                    <img src={title}  height={'20px'}/>
                </div>
                <div className='navi' style={{display:'flex',gap:'20px',alignItems:'center'}}>
                    <p>Home</p>
                    <p className='clicked'>Dashboard</p>
                    <p>Product</p>
                    <p>Orders</p>
                    <p>Finance</p>
                </div>
                <div className='navi' style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'20px'}}>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'10px'}}>
                        <img src={notificationimage}/>
                        <img src={settingsimage}/>
                        <img src={messageimage}/>
                    </div>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'10px'}}>
                        <img src={pfp}/>
                        <p>Store Name</p>
                        <img src={dd}/>

                    </div>

 
                </div>
            </div>
        </div>
    )
}

export default Navbar