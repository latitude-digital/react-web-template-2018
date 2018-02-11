import style from './_Testing.module.scss'
import React from 'react'
import connect from 'utils/route_connect'

import {
  setError,
} from 'state/actions'

function Testing(props){
  return (
    <div className={style.container}>
      <h3>Testing Page</h3>

      <button onClick={() => props.setError('Uh Oh... something happened.')}>
        Make It Error
      </button>
    </div>
  )
}

export default connect(
  null,
  {
    setError,
  }
)(Testing)
