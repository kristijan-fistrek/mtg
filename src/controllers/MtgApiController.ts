import type { Card } from "../models/CardModel";
import { MtgApiService } from "../services/MtgApiService";

// Integrirati metodu za autocomplete
// https://api.scryfall.com/cards/autocomplete?q=thal pomoću nje dobiti listu, prikazati u dropdownu i onda iskoristiti odabranu kartu poslati na fetchCardsByName

export const fetchCardsByName = (name: string) => {
    const url = `https://api.scryfall.com/cards/named?exact=${name}`;
    return MtgApiService.get<Card>(url);
}

export const fetchCardsByKeywords = (keyword: string) => {
    const url = `https://api.scryfall.com/cards/autocomplete=${keyword}`
    return MtgApiService.get<any>(url);
}