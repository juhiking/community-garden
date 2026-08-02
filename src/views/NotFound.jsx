import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import './not-found.css'

const NotFound = () => {
  useEffect(() => {
    document.title = '404 - Not Found'
    return () => {
      document.title = 'NeighborNurture Community Garden'
    }
  }, [])

  return (
    <div className="not-found-container1">
      <h3>OOPS! PAGE NOT FOUND</h3>
      <div className="not-found-container2">
        <h1 className="not-found-text2">404</h1>
      </div>
      <div className="not-found-container3">
        <h2 className="not-found-text3">
          WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND
        </h2>
      </div>
      <Link to="/" className="not-found-home-link">
        Back to the garden
      </Link>
    </div>
  )
}

export default NotFound
