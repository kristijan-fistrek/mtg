import { useEffect, useState } from "react";
import { useCardSearchContext } from "../helpers/MTGContext";
import type { Card } from "../models/CardModel";
import { fetchCardsByName } from "../controllers/MtgApiController";

export function useGetSelectedCardInfo() {

    const { selectedCard } = useCardSearchContext();
    const [cardInfo, setCardInfo] = useState<Card | null>(null);

    const fetchDataPerSelectedCard = async () => {
        if (selectedCard) {
            try {
                // ubaciti poziv prema fetchCardsByName
                const data = await fetchCardsByName(selectedCard);
                setCardInfo({
                    name: data.name,
                    mana_cost: data.mana_cost || "",
                    colors: data.colors || [],
                    power: data.power ? data.power : 0,
                    toughness: data.toughness ? data.toughness : 0,
                    oracle_text: data.oracle_text || "",
                    image_uris: {
                        small: data.image_uris?.small || "",
                        normal: data.image_uris?.normal || "",
                        large: data.image_uris?.large || "",
                        png: data.image_uris?.png || "",
                        art_crop: data.image_uris?.art_crop || "",
                        border_crop: data.image_uris?.border_crop || ""
                    }
                });
                console.log(data);

            } catch (error) {
                console.log("error");
            }
        } else {
            console.log("Card not selected.");
        }

    }

    useEffect(() => {
        fetchDataPerSelectedCard();
    }, [selectedCard]);

    return { cardInfo };

}