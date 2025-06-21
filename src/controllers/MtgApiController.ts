import type { Card } from "../models/CardModel";
import { MtgApiService } from "../services/MtgApiService";

// Integrirati metodu za autocomplete
// https://api.scryfall.com/cards/autocomplete?q=thal pomoću nje dobiti listu, prikazati u dropdownu i onda iskoristiti odabranu kartu poslati na fetchCardsByName

export const fetchCardsByName = (name: string) => {
    const query = encodeURIComponent(`name:${name.toLowerCase()}`);
    const url = `https://api.scryfall.com/cards/named?exact=${query}`;
    return MtgApiService.get<Card>(url);
}