import React, { Fragment } from 'react'

const LogModal = ({
  title,
  message,
  tech,
  attention,
  setMessage,
  setAttention,
  setTech,
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
              name='message'
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Log Message
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={e => setTech(e.target.value)}>
              <option value='' disabled>
                Select Technician
              </option>
              <option value='Technician1'>Technician1</option>
              <option value='Technician2'>Technician2</option>
              <option value='Technician3'>Technician3</option>
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={e => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
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

export default LogModal
