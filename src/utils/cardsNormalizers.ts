import { LORCANA_CARD_RARITY_MAP, MTG_CARD_RARITY_MAP } from '../common/globalData'

const filterName = (name: string): string => {
  return name.replace(/\\/g, '')
}

const getNameWordsFromName = (name: string): string[] => {
  const words = name.toLowerCase().split(' ')

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
  return {
    id: `mtg-${card.id}`,
    rarity: MTG_CARD_RARITY_MAP[card.rarity],
    color: card.color,
    ...common(card),
  }
}

const lorcana = (card: LorcanaCard): Card => {
  return {
    id: `lorcana-${card.id}`,
    rarity: LORCANA_CARD_RARITY_MAP[card.rarity],
    inkCost: card.ink_cost,
    ...common(card),
  }
}

export const cardsNormalizers = {
  mtg,
  lorcana,
}
