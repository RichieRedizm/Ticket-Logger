import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getLogs } from '../../actions/logActions'
import Preloader from '../layout/Preloader'
import LogItem from './LogItem'

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading || logs === null) {
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

Logs.propTypes = {
  log: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  log: state.log
})

export default connect(
  mapStateToProps,
  { getLogs }
)(Logs)
