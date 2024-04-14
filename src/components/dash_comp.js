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
import heading from './assets/icons/heading.png'
import tname from './assets/icons/p-price (4).png'
import date from './assets/icons/p-price (3).png'
import orderno from './assets/icons/p-price (2).png'
import pricee from './assets/icons/p-price (1).png'
import completed from './assets/icons/p-price (6).png'
import pending from './assets/icons/p-price (5).png'
import pimg from './assets/icons/Ellipse 10.png'
import astore from './assets/icons/Adam-son Store.png'


import rise from './assets/icons/stock rise.png'
const DashC = () => {
    return(
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <div className='every' style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',}}>
                <div className='dash-container'>
                    <div className='dash-holder'>
                        <div style={{padding:'30px'}}>
                            <img className='banner' src={banner}/>
                            <img src={pfp2} className='pfp2'/>
                            <div style={{marginTop:'40px', display:'flex', alignItems:'center',justifyContent:'space-between'}}>
                                <div>
                                    <h1 className='store-name'>Adam-son Store</h1>
                                    <p className='description'>Another way to improve the readability of a website or app is to use clear and concise navigation. This helps to make it easy for you to find the information or features that you are looking for. It also helps to prevent you from becoming lost or overwhelmed.</p>
                                </div>
                                <div style={{display:'flex', gap:'10px'}}>
                                    <div className='di2'>Edit storefront</div>
                                    <div className='di'>Add product</div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
                <div style={{display:'flex',justifyContent:'center', alignItems:'center' }}>
                    <div style={{width:'1180px'}}>
                        <p style={{fontWeight:'bolder',marginTop:'40px'}}>Overview</p>
                        <div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:'10px'}}>
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
                <div  style={{display:'flex',justifyContent:'space-between', alignItems:'center',marginTop:'50px',width:'1180px'}}>
                    <div className='chart'>
                        <div style={{margin:'20px'}}>
                            <div style={{display:'flex',justifyContent:'space-between'}}>
                                <div style={{display:'flex',flexDirection:'column'}}>
                                    <label>Real-Time Sales</label>
                                    <label style={{color:'grey', fontSize:'13px', opacity:'50%'}}>Here are the monthly sales stats</label>
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
                                    <label style={{color:'grey', fontSize:'13px', opacity:'50%'}}>Here are the most recent financial transaction</label>
                                </div>
                                <label>view all</label>
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
                <div style={{display:'flex',justifyContent:'center'}}>
                    <div className='dash-holder2'>
                        <div style={{margin:'20px'}}>
                                <img src={heading} />
                                <div style={{marginTop:'20px'}}>
                                    <div className='top-tables'>
                                        <div style={{display:'flex',justifyContent:'space-between',}}>
                                            <label style={{marginLeft:'20px'}}>Product name</label>
                                            <div className='twidth' style={{display:'flex',justifyContent:'space-between'}} >
                                                <label>Date</label>
                                                <label>Order number</label>
                                                <label>Price</label>
                                                <label style={{marginRight:'20px'}}>status</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='top-table'>
                                        <div style={{display:'flex',justifyContent:'space-between',margin:'20px'}}>
                                        <div style={{display:'flex',gap:'10px'}}>
                                            <img src={pimg} />
                                            <div style={{display:'flex',flexDirection:'column',paddingRight:'100px'}}>
                                                <label>Product name</label>
                                                <label style={{width:'200px'}}>Product description</label>
                                            </div>
                                        </div>
                                            <div className='twidth' style={{display:'flex',justifyContent:'space-between'}} >
                                                <label>12-April-2023</label>
                                                <label>#1234567</label>
                                                <label  style={{marginLeft:'70px'}}>N10,000</label>
                                                <img  src={completed} width={'70px'} height={'30px'}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='top-table'>
                                        <div style={{display:'flex',justifyContent:'space-between',margin:'20px'}}>
                                        <div style={{display:'flex',gap:'10px'}}>
                                            <img src={pimg} />
                                            <div style={{display:'flex',flexDirection:'column'}}>
                                                <label>Product name</label>
                                                <label>Product description</label>
                                            </div>
                                        </div>
                                            <div className='twidth' style={{display:'flex',justifyContent:'space-between'}} >
                                                <label>12-April-2023</label>
                                                <label>#1234567</label>
                                                <label style={{marginLeft:'70px'}}>N10,000</label>
                                                <img src={pending} width={'75px'} height={'30px'}/>
                                            </div>
                                        </div>
                                    </div>
                
                                </div>
                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashC