import { useEffect, useState } from "react";
import { useCardSearchContext } from "../helpers/MTGContext";
import type { Card } from "../models/CardModel";
import { fetchCardsByName } from "../controllers/MtgApiController";

export function useGetSelectedCardInfo() {

    const { selectedCard } = useCardSearchContext();
    const [cardInfo, setCardInfo] = useState<Card | null>(null);

    const fetchDataPerSelectedCard = async () => { 
        try {
            // ubaciti poziv prema fetchCardsByName
            const data = await fetchCardsByName(selectedCard);
            setCardInfo(data);
            console.log("Data from card: " + data);

        } catch (error) {
            console.log("error")
        }
     }

     useEffect(() => {
        fetchDataPerSelectedCard();
     }, [selectedCard]);

    return { cardInfo };

}