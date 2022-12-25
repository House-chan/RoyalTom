import React from 'react'

const PromotionList = ({promotion}) => {
  return (
     <div className="promotionList">
          <div className="promotionImage">
               <img src={require('../../Images/' + promotion.img + '.png')}></img>
               <p>{promotion.promotion}</p>
          </div>
          <div className="promotionDetail">
               <button>{"Edit >"}</button>
               <div className="promotionName">
                    <h5>{promotion.promotion}</h5>
               </div>
               <div className="promotionRequirement">
                    <p>{promotion.requirement}</p>
               </div>
               <div className="promotionExpire">
                    <p>{promotion.expire}</p>
               </div>

          </div>
      {/* <div className="button">
          <button className="edit">Edit</button>
          <button className="default">Default</button>
      </div> */}
    </div>
  )
}

export default PromotionList
