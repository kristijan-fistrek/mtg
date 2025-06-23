import { createContext, useContext, useState } from "react";
import type { Card } from "../models/CardModel";

interface MTGContextType {
    selectedCard: Card | null;
    setSelectedCard: (card: Card | null) => void;
}

const CardSearchContext = createContext<MTGContextType | undefined>(undefined);

export const CardSearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => { 
    const [selectedCard, setSelectedCard] = useState<Card | null>(null);

    return (
        <CardSearchContext.Provider
        value={{
            selectedCard,
            setSelectedCard
        }}
        >
            {children}
        </CardSearchContext.Provider>
    )
 }

 export const useCardSearchContext = () => {
  const context = useContext(CardSearchContext);
  if (!context) throw new Error("useCardSearchContext must be used within a CardSearchProvider");
  return context;
};