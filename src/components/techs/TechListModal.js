import React, { useState, useEffect } from 'react'
import TechItem from './TechItem'

const TechListModal = () => {
  const [techs, setTechs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getTechs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getTechs = async () => {
    setLoading(true)
    const res = await fetch('/techs')
    const data = await res.json()
    setTechs(data)
    setLoading(false)
  }

  return (
    <div id='tech-list-modal' className='modal small'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection '>
          {!loading &&
            techs.map(tech => <TechItem key={tech.id} tech={tech} />)}
        </ul>
      </div>
    </div>
  )
}

export default TechListModal
