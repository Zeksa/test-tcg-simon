import { firestore } from 'firebase-admin'
import { CollectionReference } from 'firebase-admin/firestore'

const db = firestore()

export const cardsCollection = db.collection('cards') as CollectionReference<Card>
