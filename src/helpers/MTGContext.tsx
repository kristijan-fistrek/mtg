import { createContext, useState } from "react";
import type { Card } from "../models/CardModel";

interface MTGContextType {
    selectedCard: Card | null;
    setSelectedCard: (card: Card | null) => void;
}

const CardSearchContext = createContext<MTGContextType | undefined>(undefined);

export const CardSearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => { 
    const [selectedCard, setSelectedCard] = useState
 }