import React, { useState, useEffect } from 'react'

const Logs = () => {
  const [logs, setLogs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getLogs()
  }, [])

  const getLogs = async () => {
    setLoading(true)
    const res = await fetch('/logs')
    const data = await res.json()

    setLogs(data)
    setLoading(false)
  }

  if (loading) {
    return 'Loading.....'
  }

  return (
    <ul className='collection-with-header'>
      <li className='collection-header'>
        <h4>System Logs</h4>
        {!loading && logs.length === 0 ? (
          <p className='center'>No Logs</p>
        ) : (
          logs.map((log, i) => console.log('log', log))
        )}
      </li>
    </ul>
  )
}

export default Logs
