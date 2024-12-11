import { CARD_RARITY, LORCANA_CARD_RARITY, MTG_CARD_COLOR, MTG_CARD_RARITY, PROVIDERS } from './globalData'

declare global {
  type Provider = (typeof PROVIDERS)[number]
  type CardRarity = (typeof CARD_RARITY)[number]
  type CardColor = (typeof MTG_CARD_COLOR)[number]

  type MtgCardRarity = (typeof MTG_CARD_RARITY)[number]
  type MtgCardColor = (typeof MTG_CARD_COLOR)[number]

  type MtgCard = {
    id: string
    name: string
    rarity: MtgCardRarity
    color: MtgCardColor
  }

  type LorcanaCardRarity = (typeof LORCANA_CARD_RARITY)[number]

  type LorcanaCard = {
    id: string
    name: string
    rarity: LorcanaCardRarity
    ink_cost: number
  }

  type Card = {
    id: string
    name: string
    rarity: CardRarity
    nameWords: string[]
    color?: CardColor
    inkCost?: number
  }
}
