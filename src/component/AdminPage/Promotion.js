import React from 'react'
import PromotionList from './PromotionList'
import PromotionPopup from './PromotionPopup'
import {useState} from "react"

const Promotion = () => {
     const promotion = [
          {
               promotion:"50% off",
               requirement:"Min spend 90.-",
               expire:"Expire 2022-12-31",
               img:"box",
          },
          {
               promotion:"Free Shipping",
               requirement:"No min spend",
               expire:"Expire 2022-12-31",
               img:"delivery",
          },
          {
               promotion:"Free Shipping",
               requirement:"No min spend",
               expire:"Expire 2022-12-31",
               img:"delivery",
          },
          {
               promotion:"20.- off",
               requirement:"Min spend 90.-",
               expire:"Expire 2022-12-31",
               img:"box",
          },
     ]
     const[popup, setpopup] = useState(false)

  return (
     <div className="Detail">
          <div className="header">
               <p>Promotion</p>
               <button className="addPromotion" onClick={() => setpopup(true)}>+ Add Promotion</button>
          </div>
          <hr></hr>
          <div className="promotion">
               {promotion.map((promotion) => (
                    <PromotionList promotion={promotion}/>
                    ))}
          </div>
          <PromotionPopup trigger={popup} setTriggers={setpopup} promotion={promotion[1]}></PromotionPopup>
     </div>
  )
}

export default Promotion
