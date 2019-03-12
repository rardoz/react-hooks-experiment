import React, { Suspense, Fragment } from 'react'
import { Navbar } from '../navbar'
import './styles.scss'

const withSuspense = Component => {
  return props => (
    <Suspense
      fallback={
        <Fragment>
          <Navbar />
          <div className="page-loading" />
        </Fragment>
      }
    >
      <Navbar />
      <div className="page-loading" />
      <Component {...props} />
    </Suspense>
  )
}

export default withSuspense
