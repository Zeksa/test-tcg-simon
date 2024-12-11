export const PROVIDERS = ['mtg', 'lorcana'] as const
export const CARD_RARITY = [
  'common',
  'uncommon',
  'rare',
  'mythic',
  'special',
  'enchanted',
  'legendary',
  'promo',
  'superRare',
] as const

export const MTG_CARD_RARITY = ['common', 'mythic', 'rare', 'special', 'uncommon'] as const
export const MTG_CARD_COLOR = ['B', 'G', 'R', 'U', 'W'] as const
export const MTG_CARD_RARITY_MAP: Record<MtgCardRarity, CardRarity> = {
  common: 'common',
  mythic: 'mythic',
  rare: 'rare',
  special: 'special',
  uncommon: 'uncommon',
}

export const LORCANA_CARD_RARITY = [
  'Common',
  'Enchanted',
  'Legendary',
  'Promo',
  'Rare',
  'Super Rare',
  'Uncommon',
] as const
export const LORCANA_CARD_RARITY_MAP: Record<LorcanaCardRarity, CardRarity> = {
  Common: 'common',
  Enchanted: 'enchanted',
  Legendary: 'legendary',
  Promo: 'promo',
  Rare: 'rare',
  'Super Rare': 'superRare',
  Uncommon: 'uncommon',
}
