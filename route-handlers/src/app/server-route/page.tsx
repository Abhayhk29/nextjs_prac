import { serVerSideFunction } from '@/utils/server-utils'
import React from 'react'

const ServerSideComponents = () => {

    const result = serVerSideFunction();
  return (
    <div>
        <div>ServerSideComponents</div>
        <p>{result}</p>
    </div>
  )
}

export default ServerSideComponents