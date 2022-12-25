import React from 'react'
import './Popup.css'

const AddressPopup = (props) => {
  return (props.trigger) ? (
    <div className="popup">
        <div className="popup-inner">
          <p className="popup-title">New Address</p>
          <div className="popup-detail">
            <div className="popup-name">
              <input type="text" id="fname" name="fname" placeholder="Full Name"></input>
              <input type="text" id="lname" name="lname" placeholder="Phone Number"></input>
            </div>
          </div>
          <div className="popup-detail">
            <input type="text" id="Street" name="Street" placeholder="Street Name, Building, House No."></input>
          </div>
          <div className="popup-detail">
            <input type="text" id="province" name="province" placeholder="Province, District, Postal Code"></input>
          </div>
          <div className="popup-detail">
            <input type="text" id="location" name="city" placeholder="+ Add Location"></input>
          </div>
          <div className="button">
            <button className="cancel-btn" onClick={() => props.setTriggers(false)}>
              Cancel
            </button>
            <button className="save-btn" onClick={() => props.setTriggers(false)}>
              Submit
            </button>
          </div>
          {props.children}
        </div>
    </div>
  ) : "";
}

export default AddressPopup
