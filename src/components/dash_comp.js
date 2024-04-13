import React from 'react';
import "../style/dash.css"
import banner from './assets/icons/banner.png'
import pfp2 from './assets/icons/pfp2.png'
import Card from './card';
import price1 from './assets/icons/price 1.png'
import price2 from './assets/icons/price 2.png'
import price3 from './assets/icons/price 3.png'
import fall from './assets/icons/fall.png'
import order from './assets/icons/chart-order.png'
import chart from './assets/icons/chart.png'
import viewall from './assets/icons/view all.png'
import product1 from './assets/icons/product1.png'
import product2 from './assets/icons/product2.png'
import product3 from './assets/icons/product3.png'

import rise from './assets/icons/stock rise.png'
const DashC = () => {
    return(
        <div>
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
            <div style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
                <div style={{width:'1300px'}}>
                    <p style={{fontWeight:'bolder',marginTop:'40px'}}>Overview</p>
                    <div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}>
                        <Card
                            img ={price1}
                            img2 ={rise}
                        />
                        <Card
                            img ={price2}
                            img2 ={rise}
                        />
                        <Card
                            img ={price3}
                            img2 ={fall}
                        />
                    </div>
                </div>
            </div>
            <div  style={{display:'flex',justifyContent:'center', alignItems:'center',flexWrap:'wrap',gap:'30px',marginTop:'50px'}}>
                <div className='chart'>
                    <div style={{margin:'20px'}}>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <div style={{display:'flex',flexDirection:'column'}}>
                                <label>Real-Time Sales</label>
                                <label>Here are the monthly sales stats</label>
                            </div>
                            <img src={order} height={'20px'}/>
                        </div>
                        <img src={chart} />
                    </div>

                </div>

                <div className='chart'>
                    <div style={{margin:'20px'}}>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <div style={{display:'flex',flexDirection:'column'}}>
                                <label>Top Product</label>
                                <label>Here are the most recent financial transaction</label>
                            </div>
                            <img src={viewall} height={'10px'}/>
                        </div>
                        <div style={{marginTop:'10px',display:'flex',flexWrap:'wrap', justifyContent:'space-between'}}>
                            <img src={product1} />   
                            <img src={product2} />   
                            <img src={product3} />   
                            <img src={product3} />   
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DashC