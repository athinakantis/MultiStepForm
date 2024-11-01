import { useState } from 'react';
import './PersonalInfo.css';

function PersonalInfo(props) {
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [numError, setNumError] = useState('')

  function checkName(e) {
    props.setNewUser({
      name: e.target.value,
      email: props.newUser.email,
      phone: props.newUser.phone
    })
    if (e.target.value.length < 1) {
      setNameError('This field is required')
    } else {
      setNameError('')
    }
  }

  function checkEmail(e) {
    props.setNewUser({
      name: props.newUser.name,
      email: e.target.value,
      phone: props.newUser.phone
    })
    if (e.target.length < 1) {
      setEmailError('This field is required')
    } else if (!e.target.value.includes('@')) {
      setEmailError('Email must contain @')
    } else {
      setEmailError('')
    }
  }

  function checkPhone(e) {
    props.setNewUser({
      name: props.newUser.name,
      email: props.newUser.email,
      phone: e.target.value
    })

    if (e.target.value.length < 1) {
      setNumError('This field is required')
    } else {
      setNumError('')
    }
  }

  function validateInput() {
    if (!props.newUser.name) {
      setNameError('This field is required')
    } else if (!props.newUser.email) {
      setEmailError('This field is required')
    } else if (!props.newUser.phone) {
      setNumError('This field is required')
    } else {
      props.incrementStep()
    }
  }

  return (
    <section id='personalInfoContainer' className='page'>
      <div className='formContainer'>
        <h2>Personal Info</h2>
        <p className='pageDescription'>
          Please provide your name, email address, and phone number
        </p>

        <div className="inputInfo">
        <label htmlFor='nameInput'>Name</label>
        {nameError && <p className='error'>{nameError}</p>}
        </div>
        <input
          autoComplete='off'
          type='text'
          name='nameInput'
          id='nameInput'
          value={props.newUser.name}
          placeholder='e.g. Stephen King'
          onChange={(e) => checkName(e)}
        />
        <div className="inputInfo">
        <label htmlFor='emailInput'>Email Address</label>
        {emailError && <p className='error'>{emailError}</p>}
        </div>
        <input
          autoComplete='off'
          type='email'
          name='email'
          id='emailInput'
          value={props.newUser.email}
          placeholder='e.g. stephenking@lorem.com'
          onInput={(e) => checkEmail(e)}
        />
        <div className="inputInfo">
        <label htmlFor='phoneInput'>Phone Number</label>
        {numError && <p className='error'>{numError}</p>}
        </div>
        <input
          autoComplete='off'
          type='text'
          name='phoneInput'
          id='phoneInput'
          value={props.newUser.phone}
          placeholder='e.g. +1 234 567 890'
          onInput={(e) => checkPhone(e)}
        />
      </div>

      <nav>
        <button 
        id='nextStep'
        onClick={validateInput}
        >Next Step</button>
      </nav>
    </section>
  );
}

export default PersonalInfo;
