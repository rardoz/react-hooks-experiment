/* eslint-disable */
/* tslint:disable */

import { assignImportedComponents } from 'react-imported-component'

const applicationImports = [
  () => import('./pages/error'),
  () => import('./pages/home'),
  () => import('./pages/login'),
  () => import('./pages/profile')
]

assignImportedComponents(applicationImports)
export default applicationImports
