import React, { Fragment } from 'react'

const TechModal = ({
  title,
  firstName,
  lastName,
  setFirstName,
  setLastName,
  onSubmit
}) => {
  return (
    <Fragment>
      <div className='modal-content'>
        <h4>{title}</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              Frist Name
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor='lastName' className='active'>
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect waves-light blue btn'>
          Enter
        </a>
      </div>
    </Fragment>
  )
}

export default TechModal
