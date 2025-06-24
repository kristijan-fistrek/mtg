import { createContext, useContext, useState } from "react";

interface MTGContextType {
    selectedCard: string | null;
    setSelectedCard: (card: string | null) => void;
}

const CardSearchContext = createContext<MTGContextType | undefined>(undefined);

export const CardSearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => { 
    const [selectedCard, setSelectedCard] = useState<string | null>(null);

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