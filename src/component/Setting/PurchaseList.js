import React from 'react'
import ReviewPopup from './Popup/ReviewPopup'
import {useState} from "react"

const PurchaseList = ({purchase}) => {
    const [popup, setpopup] = useState(false)

  return (
    <div className="purchase">
        <div className="id">
            <p>{"Order ID: " + purchase.id}</p>
        </div>
        <div className="product">
            <div className="item">
                <img src={require('../Images/' + purchase.img + '.jpg')}></img>
                <div className="detail">
                    <p>{purchase.name}</p>
                    <p>{"x" + purchase.quantity}</p>
                </div>
            </div>

            <div className="price">
                <p>{purchase.price + " ฿"}</p>
            </div>

        </div>

        <div className="summary">

            <div className="status">
                <p>{"Status: " + purchase.status}</p>
            </div>

            <div className="total">
                <p>{"Total Price: " + purchase.price + " ฿"}</p>
            </div>
        </div>
        {
            purchase.status === "Order Complete" &&
            <div className="review">
                <button className='white'>
                    Buy Again
                </button>
                <button className='white'>
                    Contact Seller
                </button>
                <button className='green' onClick={() => setpopup(true)}>
                    Rating
                </button>
            </div>
        }
        {/* {active === "Profile" && } */}
        <hr></hr>
        <ReviewPopup trigger={popup} setTriggers={setpopup} product={purchase}>

        </ReviewPopup>
    </div>
  )
}

export default PurchaseList
