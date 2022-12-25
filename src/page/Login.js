import './Register.css';
import { React } from 'react';
import {Link} from 'react-router-dom';
import logo from '../component/image/royal_tom_logo.png'; 
import Navbar2 from '../component/Navbar2/Navbar2';

import styled from 'styled-components'

function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const jsonData = {
            username: data.get('UserName'),
            password: data.get('Password'),
        }

        fetch('http://localhost:5000/users/login', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.status === 'ok'){
                alert('Login Success Welcome -_-')
                localStorage.setItem('token', data.token)
                window.location = '/home'
            }else{
                alert('Login Failed olo')
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    };

  return ( 
    <LoginCSS>
        <Navbar2/>
        <div className="itemSide">
            <div className="imageLogo">
                <img className="" src={logo} alt="logo"/>
            </div>
            <div className="signupBox">
                <h1 className="signupTitle">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="LowerBox">
                        <div className="gridItemBox">
                            <label className="subjectText">User Name</label>
                            <label className="redStar">*</label>
                            <input className="inputBox" type="text" placeholder="Enter User Name" name="UserName" required/>
                        </div>
                        <div className="gridItemBox">
                            <label className="subjectText">Password</label>
                            <label className="redStar">*</label>
                            <input className="inputBox" type="password" placeholder="Password" name="Password" required/>
                        </div>
                    </div>
                    <div className="signupOuterBox">
                        <button type="submit" className="signupButton">Sign In</button>
                    </div>
                </form>
                <div className="haveAccount">
                    <p className="haa">Have an account ? 
                        <Link className="textGreen" to = "/register">
                             Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </LoginCSS>
  );
}

const LoginCSS = styled.section`
    .itemSide{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 190px 0px;  
        background-color: rgb(92, 141, 103);
    }

    ul {
        display: flex;
        align-items: center;
        list-style-type: none;
    }

    li {
        margin: 0px 10px;
        display: flex;
        align-items: center;
        list-style-type: none;
    }

    *{
        box-sizing: border-box;
    }
    
    input[type=text], input[type=password] {
      width: 100%;
      padding: 15px;
      margin: 5px 0 22px 0;
      display: inline-block;
      border: none;
      background: #f1f1f1;
    }
    
    input[type=text]:focus, input[type=password]:focus {
      background-color: #ddd;
      outline: none;
    }
    
    button {
      background-color: #237e37;
      color: white;
      padding: 14px 20px;
      margin: 8px 0;
      border: none;
      cursor: pointer;
      width: 100%;
      opacity: 0.9;
      text-decoration: none;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: bold;
      width:580px;
    }
    
    button:hover {
      opacity:1.2;
    }

    .signupBox{
        display: flex;
        flex-direction: column;
        justify-content: center;
        background:rgb(255, 255, 255);
        border-radius: 25px;
        margin-top: 50px;
        margin-bottom: 30px;
        margin-left: 200px;
        width: 657px;
        border-style: solid;
    
        height: 460px;
        border: 1px solid gray;
    }
  `

export default Login;