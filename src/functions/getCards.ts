import { DocumentData, Query } from 'firebase-admin/firestore'
import { onRequest } from 'firebase-functions/https'
import { cardsCollection } from '../collections'
import { getNameWordsFromName } from '../utils/cardsNormalizers'

export const getCards = onRequest(
  { minInstances: 1, maxInstances: 100, concurrency: 200 },
  async (request, response) => {
    const { name, rarity, color, inkCostMin, inkCostMax, provider } = request.query
    // TODO: check data

    let query: Query<Card, DocumentData> = cardsCollection

    if (name) {
      query = query.where('nameWords', 'array-contains-any', getNameWordsFromName(name.toString()))
    }

    if (rarity) {
      const rarities = Array.isArray(rarity) ? rarity : [rarity]
      query = query.where('rarity', 'in', rarities)
    }

    if (color) {
      const colors = Array.isArray(color) ? color : [color]
      query = query.where('color', 'in', colors)
    }

    if (inkCostMin || inkCostMax) {
      if (inkCostMin) {
        query = query.where('inkCost', '>=', Number(inkCostMin))
      }
      if (inkCostMax) {
        query = query.where('inkCost', '<=', Number(inkCostMax))
      }
    }

    if (provider) {
      const providers = Array.isArray(provider) ? provider : [provider]
      query = query.where('provider', 'in', providers)
    }

    const snapshot = await query.get()
    const cards = snapshot.docs.map(doc => {
      const { nameWords, ...card } = doc.data()
      return card
    })

    response.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    response.status(200).json({ success: true, cards })
  },
)
