# Test TCG Simon

## View the database

[Firebase Console](https://console.firebase.google.com/project/test-tcg/firestore)

## Public endpoints

### 1. Add carts

**POST**  
`https://europe-west1-test-tcg.cloudfunctions.net/addCards`

**Samble Body JSON :**

```json
{
  "provider": "mtg",
  "jsonUrl": "https://cardnexus-hiring-docs.s3.eu-west-1.amazonaws.com/mtg-cards.json"
}
```

**GET**
`https://europe-west1-test-tcg.cloudfunctions.net/getCards`

**Query args**

(color, rarity and provider parameters can be single or multiple times (act as array))

- **color** : `'B'` | `'G'` | `'R'` | `'U'` | `'W'`
- **rarity** :
  `'common'` | `'uncommon'` | `'rare'` | `'mythic'` | `'special'` | `'enchanted'` | `'legendary'` | `'promo'` | `'superRare'`
- **name** : `string`
- **provider** : `'mtg'` | `'lorcana'`
- **inkCostMin** : `number`
- **inkCostMax** : `number`

---

### Run the server locally

```bash
npm i -g yarn
yarn
npm i -g firebase-tools
firebase login
yarn start
```

### Notes

- Accessing documents from a firestore database is usually done directly between the client and firestore (combined with security rules) as it is much faster.
  To not go completely out of the scope of the test I decided to go for the HTTP endpoint.
- Basic browser and CDN cache have been set up.
- Compounds DB indexes have been setup.
- The structure is pretty straightforward and already type-safe in case of adding new games.
- The high scalability, low cost and performances of Firestore come with the downside of some limitations regarding very complex queries (such as 30 parameters in a single query for example). If that happen and it's something we want to support, I would find a way to optimize the data to make it work such as merging some properties (only technically in the model).
- To optimize network we could consider data compression.
- The ID of a card don't need to be stored inside it's document in the database.
- Test done in 3-4 hours
