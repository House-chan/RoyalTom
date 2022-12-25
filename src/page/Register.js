import './Register.css';

import {Link} from 'react-router-dom';
import logo from '../component/image/royal_tom_logo.png'; 
import { React } from 'react';
import styled from 'styled-components'

import Navbar2 from '../component/Navbar2/Navbar2';

function Register() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const jsonData = {
            firstName: data.get('Fname'),
            lastName: data.get('Lname'),
            username: data.get('UserName'),
            password: data.get('Password'),
            cardId: data.get('IDCard'),
            email: data.get('Email'),
            phoneNum: data.get('PhoneNumber'),

            // username: data.get('UserName'),
            // password: data.get('Password'),
            // firstName: data.get('Fname'),
            // lastName: data.get('Lname'),
            // cardId: data.get('IDCard'),
            // email: data.get('Email'),
            // phoneNum: data.get('PhoneNumber'),
        }

        fetch('http://localhost:5000/users/register', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.status === 'ok'){
                alert('Register Success Welcome -_-')
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    };

    return ( 
        <RegisterCSS>
            <Navbar2/>
            <div className="itemSide">
            <div className="imageLogo">
                <img className="" src={logo} alt="logo"/>
            </div>
            <div className="signupBox">
                <h1 className="signupTitle">Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="smallContainer">
                        <div className="smallInputBox">
                            <label className="subjectText">Name</label>
                            <label className="redStar">*</label>
                            <input className="inputBox" type="text" placeholder="Enter Name" name="Fname" required/>
                        </div>
                        <div className="smallInputBox">
                            <label className="subjectText">Last Name</label><label className="redStar">*</label>
                            <input className="inputBox" type="text" placeholder="Enter Last Name" name="Lname" required/>
                        </div>
                    </div>
                    <div className="smallContainer">
                        <div className="smallInputBox">
                            <label className="subjectText">Username</label><label className="redStar">*</label>
                            <input className="inputBox" type="text" placeholder="Enter Username" name="UserName" required/>
                        </div>
                        <div class="smallInputBox">
                            <label class="subjectText">Password</label><label class="redStar">*</label>
                            <input class="inputBox" type="password" placeholder="Enter Password" name="Password" required/>
                        </div>
                    </div>
                    <div className="LowerBox">
                        <div className="gridItemBox">
                            <label className="subjectText">ID Card</label><label className="redStar">*</label>
                            <input className="inputBox" type="text" placeholder="Enter ID Card" name="IDCard" required/>
                        </div>
                        <div className="gridItemBox">
                            <label className="subjectText">Email</label><label className="redStar">*</label>
                            <input className="inputBox" type="text" placeholder="Enter Email" name="Email" required/>
                        </div>
                        <div className="gridItemBox">
                            <label className="subjectText">Phone Number</label><label className="redStar">*</label>
                            <input className="inputBox" type="text" placeholder="Enter Phone Number" name="PhoneNumber" required/>
                        </div>
                    </div>
                    <div className="signupOuterBox">
                        <button type="submit" className="signupButton">Sign Up</button>
                    </div>
                </form>
        
                <p className="termPolicy">By signing up, you agree to Royal Tom's 
                    <a className="textGreen" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> Terms of Service & Privacy Policy</a>
                </p>
                <div className="haveAccount">
                    <p className="haa">Have an account ? 
                        <Link className="textGreen" to = "/login">
                                Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
        </RegisterCSS>
    );
  }

const RegisterCSS = styled.section`
    .itemSide{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 50px 0px;
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
        flex-direction: column;
        justify-content: center;
        background:rgb(255, 255, 255);
        border-radius: 25px;
        margin-top: 50px;
        margin-bottom: 30px;
        margin-left: 200px;
        width: 657px;
        border-style: solid;
    
        height: 740px;
        border: 1px solid gray;
    }
`
  
export default Register;