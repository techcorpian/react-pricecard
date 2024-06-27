import React from 'react'
import { TiTick } from "react-icons/ti";
import { HiOutlineX } from "react-icons/hi";



const Card = ({ type, price, featureArr }) => {
    return (
        <div className='card-container'>
            <div className='type'>{type}</div>
            <div className='price'>${price}/month</div>
            <div className='line'></div>
            <div className='features'>

                {
                    featureArr.map((item) => (
                        <div className={item.allowed == true ? 'allowed' : 'not-allowed'}><span>{item.allowed == true ? <TiTick /> : <HiOutlineX/>}</span>{item.text}</div>
                    ))
                }

            </div>
            <button>BUTTON</button>
        </div>
    )
}

export default Card