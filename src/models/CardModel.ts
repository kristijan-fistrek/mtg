export interface ImageUris {
    small: string,
    normal: string,
    large: string,
    png: string,
    art_crop: string,
    border_crop: string
}

export interface AutocompleteCardSearch {
    card_names: string[]
}

export interface Card {
    name: string,
    mana_cost: string,
    power: number,
    toughness: number,
    oracle_text: string,
    image_uris: ImageUris
}