import React from 'react'
import './OrderStatus.css'
const OrderStatus = () => {
     const order = [
          {
               id:"0096234ASSDKKGHH",
               name:"Tom",
               quantity: 2,
               price: 999,
               status: "prepare",
               tel: '081-234-5678',
               address:'The Cupboard under the Stairs, 4 Privet Drive, Little Whinging, Surrey',
          },
          {
               id:"0096234ASSDKKGHH",
               name:"Tommy",
               quantity: 5,
               price: 1050,
               status: "deliver",
               tel: '081-234-5678',
               address:'The Cupboard under the Stairs, 4 Privet Drive, Little Whinging, Surrey',
          },
          {
               id:"0096234ASSDKKGHH",
               name:"Tomson",
               quantity: 5,
               price: 1050,
               status: "sended",
               tel: '081-234-5678',
               address:'The Cupboard under the Stairs, 4 Privet Drive, Little Whinging, Surrey',
          } 
     ]

  return (
    <div className="Block">
     <button>{"< Back"}</button>
      <div className="header">
          <p>SHIPPING STATUS</p>
      </div>
      <div className="trackingId">
          <p>Order Tracking:</p>
          <p>{order[2].id}</p>
      </div>
      <div className="trackingStatus">{/* grid 3 column */}
          <div className="statusGrid">
               <div className="prepare">
                    <img src={require("../../Images/prepare.png")} id="prepare"></img>
                    <img src={require("../../Images/EllipseY.png")} id="checkpoint"></img>
                    <p>Preparing for shipment</p>
               </div>
               <div className="delivery">
                    <img src={require("../../Images/deliver.png")} id="delivery"></img>
                    {order[2].status === "prepare" &&
                         <img src={require("../../Images/EllipseN.png")} id="checkpoint"></img>
                    }
                    {order[2].status === "deliver" &&
                         <img src={require("../../Images/EllipseY.png")} id="checkpoint"></img>
                    }
                    {order[2].status === "sended" &&
                         <img src={require("../../Images/EllipseY.png")} id="checkpoint"></img>
                    }
                    <p>on the way</p>
               </div>
               <div className="sended">
                    <img src={require("../../Images/sended.png")} id="sended"></img>
                    {order[2].status === "prepare" &&
                         <img src={require("../../Images/EllipseN.png")} id="checkpoint"></img>
                    }
                    {order[2].status === "deliver" &&
                         <img src={require("../../Images/EllipseN.png")} id="checkpoint"></img>
                    }
                    {order[2].status === "sended" &&
                         <img src={require("../../Images/EllipseY.png")} id="checkpoint"></img>
                    }
                    <p>Delivered</p>
               </div>
          </div>
          <div className="statusLine">
               <svg width="75vw" height="180">
                    {order[2].status === "prepare" &&
                         <rect x="0" y="0" width="10%" height="45" fill="rgb(22, 87, 36, 1)" rx="20" ry="20"/>
                    }
                    {order[2].status === "deliver" &&
                         <rect x="0" y="0" width="55%" height="45" fill="rgb(22, 87, 36, 1)" rx="20" ry="20"/>
                    }
                    {order[2].status === "sended" &&
                         <rect x="0" y="0" width="100%" height="45" fill="rgb(22, 87, 36, 1)" rx="20" ry="20"/>
                    }
               </svg>
          </div>
      </div>
      <hr></hr>
      <div className='address'>
          <p id="header">Delivery Address</p>
          <p>{order[2].name + " | " + order[2].tel}</p>
          <p>{order[2].address}</p>
      </div>
    </div>
  )
}

export default OrderStatus
