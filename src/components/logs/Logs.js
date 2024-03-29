import React, { useState, useEffect } from 'react'
import Preloader from '../layout/Preloader'
import LogItem from './LogItem'

const Logs = () => {
  const [logs, setLogs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getLogs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getLogs = async () => {
    setLoading(true)
    const res = await fetch('/logs')
    const data = await res.json()

    setLogs(data)
    setLoading(false)
  }

  if (loading) {
    return <Preloader />
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4>System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className='center'>No Logs</p>
      ) : (
        logs.map(log => <LogItem key={log.id} log={log} />)
      )}
    </ul>
  )
}

export default Logs
