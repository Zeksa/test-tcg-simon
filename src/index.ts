import { applicationDefault, getApps, initializeApp } from 'firebase-admin/app'
import { setGlobalOptions } from 'firebase-functions/options'

if (!getApps().length) {
  initializeApp({
    credential: applicationDefault(),
  })
}

setGlobalOptions({ region: 'europe-west1' })

import { addCards } from './addCards'

export { addCards }
