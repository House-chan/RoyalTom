import './Admin.css';
import React, {useState} from "react"

import Topic from "./components/AdminPage/Topic"
import Promotion from "./components/AdminPage/Promotion"

function Admin() {
<<<<<<< Updated upstream
  
=======
>>>>>>> Stashed changes
  const [active, setActive] = useState("Promotion");

 
  return (
    <div className="container">
      <Topic setState={setActive}/>
      {active === "Promotion" && <Promotion/>}
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
    </div>
  );
}


export default Admin;
