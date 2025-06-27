import type { Card } from "../models/CardModel";
import type { DeckAttributes } from "../models/DeckAttributes";
import { MtgApiService } from "../services/MtgApiService";

// Integrirati metodu za autocomplete
// https://api.scryfall.com/cards/autocomplete?q=thal pomoću nje dobiti listu, prikazati u dropdownu i onda iskoristiti odabranu kartu poslati na fetchCardsByName

export const fetchCardsByName = (name: string | null) => {
    const url = `https://api.scryfall.com/cards/named?exact=${name}`;
    return MtgApiService.get<Card>(url);
}

export const fetchCardsByKeywords = (keyword: string) => {
    const url = `https://api.scryfall.com/cards/autocomplete?q=${keyword}`
    return MtgApiService.get<any>(url);
}

export const fetchCardsByCustomQuery = (query: DeckAttributes) => {
    const url = `https://api.scryfall.com/cards/search?order=released&q=${query.color}`;
    return MtgApiService.get<Card[]>(url);
}