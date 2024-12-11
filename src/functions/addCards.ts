import { HttpsError, onRequest } from 'firebase-functions/https'
import { cardsCollection } from '../collections'
import { PROVIDERS } from '../common/globalData'
import { cardsNormalizers } from '../utils/cardsNormalizers'

export const addCards = onRequest(
  { minInstances: 0, maxInstances: 1, timeoutSeconds: 540 },
  async (request, response) => {
    if (!request.body || typeof request.body !== 'object') {
      throw new HttpsError('invalid-argument', 'The request data is invalid.')
    }

    const provider: Provider = request.body.provider

    if (!PROVIDERS.includes(provider)) {
      throw new HttpsError('invalid-argument', 'The provider is invalid.')
    }

    if (!cardsNormalizers[provider]) {
      throw new HttpsError('internal', 'The provider is not implemented.')
    }

    if (typeof request.body.jsonUrl !== 'string') {
      throw new HttpsError('invalid-argument', 'The JSON URL is invalid.')
    }

    // Read json from uri
    let cards
    try {
      const jsonFetch = await fetch(request.body.jsonUrl)
      cards = await jsonFetch.json()

      if (!Array.isArray(cards)) {
        throw new Error('The JSON data is invalid.')
      }
    } catch (error) {
      console.error(error)
      throw new HttpsError('invalid-argument', 'The JSON URL or data is invalid.')
    }

    try {
      const normalizedCards = cards.map(cardsNormalizers[provider])
      const promises = normalizedCards.map(card => cardsCollection.doc(card.id).set(card))
      await Promise.all(promises)
    } catch (error) {
      console.error(error)
      throw new HttpsError('internal', 'An error occurred while adding the cards.')
    }

    response.send({ status: 'ok' })
  },
)
