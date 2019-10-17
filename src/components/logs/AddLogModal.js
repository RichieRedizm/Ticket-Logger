import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import LogModal from './LogModal'

const AddLogModal = () => {
  const [message, setMessage] = useState('')
  const [attention, setAttention] = useState(false)
  const [tech, setTech] = useState('')

  const onSubmit = e => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter a message and technician' })
    } else {
      console.log('message', message)
      console.log('tech', tech)
      console.log('attention', attention)
    }
  }

  return (
    <div id='add-log-modal' className='modal' style={modalStyle}>
      <LogModal
        title='Enter System Log'
        message={message}
        tech={tech}
        attention={attention}
        setMessage={setMessage}
        setAttention={setAttention}
        setTech={setTech}
      />
    </div>
  )
}

const modalStyle = {
  width: '75%',
  height: '65%'
}
export default AddLogModal
