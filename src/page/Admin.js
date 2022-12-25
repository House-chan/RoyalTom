import './Admin.css';
import React, {useState} from "react"

import Topic from "./components/AdminPage/Topic"
import Promotion from "./components/AdminPage/Promotion"

function Admin() {
  
  const [active, setActive] = useState("Promotion");

 
  return (
    <div className="container">
      <Topic setState={setActive}/>
      {active === "Promotion" && <Promotion/>}
    </div>
  );
}


export default Admin;
