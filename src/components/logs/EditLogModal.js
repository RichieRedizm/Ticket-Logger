import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import LogModal from './LogModal'

const EditLogModal = () => {
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

      // Clear Fields
      setMessage('')
      setTech('')
      setAttention(false)
    }
  }

  return (
    <div id='edit-log-modal' className='modal large'>
      <LogModal
        title='Enter System Log'
        message={message}
        tech={tech}
        attention={attention}
        setMessage={setMessage}
        setAttention={setAttention}
        setTech={setTech}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default EditLogModal
