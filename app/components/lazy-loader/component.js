import React from 'react'
import { Navbar } from '../navbar'
import './styles.scss'

const withSuspense = Component => {
  return props => (
    <React.Suspense
      fallback={
        <div>
          <Navbar />
          <div className="page-loading" />
        </div>
      }
    >
      <Navbar />
      <div className="page-loading" />
      <Component {...props} />
    </React.Suspense>
  )
}

export default withSuspense
