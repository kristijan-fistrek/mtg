import * as Magic from 'mtgsdk-ts';
import {Card, MagicEmitter} from "mtgsdk-ts";
import {JSX, useEffect} from "react";

const Homepage = (): JSX.Element => {

    const fetchData = (): MagicEmitter<Card> => {
        return Magic.Cards.all({type: "Planeswalker", page: 2, pageSize: 30}).on("data", card => {
            console.log(card.name);
        }).on("end", () => {
            console.log("done");
        });
    }

    useEffect(() => {
        fetchData();
    })

    return (
        <>
            <div>
                <p>Homepage</p>
            </div>
        </>
    )
}

export default Homepage;