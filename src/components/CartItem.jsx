import React from 'react'
import {FcDeleteDatabase} from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/Slices/cartSlice'

const CartItem = ({item,itemIndex}) => {
    const dispatch =useDispatch()
    const removefromCart =()=>{
        dispatch(remove(item.id))
    }
  return (
    <div>
        <div>
            <div>
                <img src={item.image} alt="" />
            </div>
            <div>
                <h1>{item.title}</h1>
                <h1>{item.description}</h1>
            </div>
            <div>
                <p>{item.price}</p>
                <div onClick={removefromCart}>
                    <FcDeleteDatabase/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem