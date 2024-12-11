import { applicationDefault, getApps, initializeApp } from 'firebase-admin/app'
import { setGlobalOptions } from 'firebase-functions/options'

if (!getApps().length) {
  initializeApp({
    credential: applicationDefault(),
  })
}

setGlobalOptions({ region: 'europe-west1', timeoutSeconds: 540 })

import { addCards } from './functions/addCards'
import { getCards } from './functions/getCards'

export { addCards, getCards }
