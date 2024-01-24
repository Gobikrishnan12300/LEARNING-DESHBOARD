import React from 'react'
import "./Signin.css"

const Signin = () => {
  return (
    <div className='box'>
        <h1>
            SIGNIN ACCOUNT
        </h1>
        <div className='model'>
    <label>FIRST NAME</label> <br />
    <input type='name'></input> <br />
    <br />
    <label>MIDDLE NAME</label> <br />
    <input type='name'></input> <br />
    <br />
    <label>LAST NAME</label> <br />
    <input type='name'></input> <br />
    <br />
    <label>AGE</label> <br />
    <input type='number'></input> <br />
    <br />
    <label>EMAIL ID</label> <br />
    <input type='email id' required></input> <br />
    <br />
    <label>PASSWORD</label> <br />
    <input type='password'></input> <br />
    <br />
    <button type="submit" classname="login-btn">SUBMIT</button>

    </div>

    </div>
  )
}

export default Signin