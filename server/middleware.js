// Middleware for the server-rendering

import { printDrainHydrateMarks } from 'react-imported-component'
import middleware from 'universal-location-middleware'

import React from 'react'
import ReactDOM from 'react-dom/server'

import App from '../app/app'
import generateHtml from './generate-html'

export default (req, res, next) => {
  // Generate the server-rendered HTML using the appropriate router
  const context = {}
  global.window = { ...global.window, location: middleware()(req, res, next) }
  console.log(global.window)
  const router = <App location={location} context={context} />
  const markup = ReactDOM.renderToString(router)

  // If react-router is redirecting, do it on the server side
  if (context.url) {
    res.redirect(301, context.url)
  } else {
    // Format the HTML using the template and send the result

    const html = generateHtml(markup + printDrainHydrateMarks())
    res.send(html)
  }
}
