import { LORCANA_CARD_RARITY_MAP, MTG_CARD_RARITY_MAP } from '../common/globalData'

export const filterName = (name: string): string => {
  const nameWithoutProhibitedCharacters = name.replace(/\\|"/g, '')
  const nameWithoutMultipleSpaces = nameWithoutProhibitedCharacters.replace(/\s+/g, ' ')
  return nameWithoutMultipleSpaces.trim()
}

export const getNameWordsFromName = (name: string): string[] => {
  const words = filterName(name).toLowerCase().split(' ')

  // For longer words, we will split them into smaller words
  const result: string[] = []
  for (const word of words) {
    if (word.length > 3) {
      for (let i = 0; i < word.length - 3; i++) {
        result.push(word.slice(i, i + 3))
      }
    }
    result.push(word)
  }

  return result
}

const common = (card: MtgCard | LorcanaCard) => {
  return {
    name: filterName(card.name),
    nameWords: getNameWordsFromName(card.name),
  }
}

const mtg = (card: MtgCard): Card => {
  const provider: Provider = 'mtg'

  return {
    id: `${provider}-${card.id}`,
    rarity: MTG_CARD_RARITY_MAP[card.rarity],
    color: card.color,
    provider,
    ...common(card),
  }
}

const lorcana = (card: LorcanaCard): Card => {
  const provider: Provider = 'lorcana'

  return {
    id: `${provider}-${card.id}`,
    rarity: LORCANA_CARD_RARITY_MAP[card.rarity],
    inkCost: card.ink_cost,
    provider,
    ...common(card),
  }
}

export const cardsNormalizers = {
  mtg,
  lorcana,
}
