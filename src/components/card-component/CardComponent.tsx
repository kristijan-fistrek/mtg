import type { JSX } from "react";
import { useGetSelectedCardInfo } from "../../hooks/useGetSelectedCardInfo";

const CardComponent = () => {

    const selectedCardInformation = useGetSelectedCardInfo();

    const DisplayCardComponent = (): JSX.Element => {
        if (selectedCardInformation.cardInfo) {
            return (
                <>
                    <div className="card-component">
                        <p>{selectedCardInformation.cardInfo.name}</p>
                        <img src={selectedCardInformation.cardInfo?.image_uris["small"]} alt="Selected Commander Image" />
                    </div>
                </>
            )
        } else {
            return <></>
        }
    }

    return (
        <DisplayCardComponent />
    )

}

export default CardComponent;