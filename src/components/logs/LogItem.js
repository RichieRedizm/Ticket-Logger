import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'

const LogItem = ({ log }) => {
  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'blue-text'
          }`}>
          <span className='black-text'>#{log.id} </span>
          {log.message}
        </a>
        <br />
        <span className='grey-text'>
          Last update by
          <span className='black-text'> {log.tech} </span>on{' '}
          <Moment format='Do MMMM YYYY, h:mm:ss a'>{log.date}</Moment>
        </span>
        <a href='#!' className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  )
}

LogItem.propTypes = {
  log: PropTypes.object.isRequired
}

export default LogItem
