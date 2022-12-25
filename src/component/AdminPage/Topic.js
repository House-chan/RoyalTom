import React from 'react'
import './Admin.css'

const Topic = ({ name, setState }) => {
  return (
     <div className="selection">
          <div className="list">
               <div className="account">
                    <img src={require("../../Images/avatar.png")}></img>
                    <div className="name">
                         <h2>Admin</h2>
                         <p className="editprofile">edit Profile</p>
                    </div>
               </div>
               <br></br>
               <div className="btn">
               <img src={require("../../Images/account.png")}></img>
                    <button onClick={() => setState("Profile")}>My Account</button>
               </div>
               <div className="btn-default">
                    <button onClick={() => setState("Privacy")}>Privacy and Safty</button>
               </div>
               <div className="btn">
                    <img src={require("../../Images/shopping.png")}></img>
                    <button onClick={() => setState("Promotion")}>Promotion</button>
               </div>
          </div>
     </div>
  )
}


Topic.defaultProps = {
     name: "None"
}
export default Topic
