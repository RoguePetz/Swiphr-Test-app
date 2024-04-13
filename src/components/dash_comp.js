import React from 'react';
import "../style/dash.css"
import banner from './assets/icons/banner.png'
import pfp2 from './assets/icons/pfp2.png'

const DashC = () => {
    return(
        <div className='dash-container'>
            <div className='dash-holder'>
                <div style={{padding:'30px'}}>
                    <img src={banner}/>
                    <img src={pfp2} className='pfp2'/>
                    <div style={{marginTop:'70px', display:'flex', alignItems:'center',justifyContent:'space-between'}}>
                        <div>
                            <h1 >Adam-son Store</h1>
                            <p className='description'>Another way to improve the readability of a website or app is to use clear and concise navigation. This helps to make it easy for you to find the information or features that you are looking for. It also helps to prevent you from becoming lost or overwhelmed.</p>
                        </div>

                        <div style={{display:'flex'}}>
                            <div>Edit storfront</div>
                            <div>Add product</div>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default DashC