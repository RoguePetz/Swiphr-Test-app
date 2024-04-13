import React from 'react';
import "../style/dash.css"



function Card(props){
    return(
        <div className='card_body'>
           <div style={{display:'flex',justifyContent:'space-between', padding:'20px'}}>
                <img src= {props.img} />
                <img src= {props.img2}  height={'25px'}/>
           </div>
        </div>
    )
}

export default Card