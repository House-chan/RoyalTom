import React from 'react'

const PromotionPopup = ({trigger, setTriggers, promotion}) => {
  return (trigger) ? (
    <div className="popup">
        <div className="popup-inner">
          <p className="popup-title">Rate Product</p>

          <div className="promotionList">
            <div className="promotionImage">
                <img src={require('../../Images/' + promotion.img + '.png')}></img>
                <p>{promotion.promotion}</p>
            </div>
            <div className="promotionDetail">
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
          </div>
         <hr></hr>
         <div className="popup-grid">
          <div className="popup-child">
              <p>Promotion ID</p>
              <p>*</p>
              <input type="text" id="id" name="id" ></input>
            </div>

            <div className="popup-child">
              <p>Promotion Date</p>
              <p>*</p>
              <input type="text" id="date" name="date" ></input>
            </div>
            
            <div className="popup-child">
              <p>Promotion Discount</p>
              <p>*</p>
              <input type="text" id="discount" name="discount" ></input>
            </div>

            <div className="popup-child">
              <p>Promotion Code</p>
              <p>*</p>
              <input type="text" id="code" name="code" ></input>
            </div>
         </div>
          
          <div className="popup-detail">
            <p>Promotion Info</p>
            <p>*</p>
            <input type="text" id="info" name="info"></input>
          </div>

          <div className="button">
            <button className="save-btn" onClick={() => setTriggers(false)}>Submit</button>
            <button className="cancel-btn" onClick={() => setTriggers(false)}>Cancel</button>
          </div>
        </div>
    </div>
  ) : "";
}


export default PromotionPopup
