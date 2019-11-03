import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import TechModal from './TechModal'

const AddTechModal = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const onSubmit = e => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter first and last name' })
    } else {
      console.log('firstName', firstName)
      console.log('lastName', lastName)
      // Clear Fields
      setFirstName('')
      setLastName('')
    }
  }

  return (
    <div id='add-tech-modal' className='modal small'>
      <TechModal
        title='New Technician'
        firstName={firstName}
        lastName={lastName}
        setFirstName={setFirstName}
        setLastName={setLastName}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default AddTechModal
