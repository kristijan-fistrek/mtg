<<<<<<< HEAD
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
=======

import { useEffect } from 'react';

const Homepage = () => {

    useEffect(() => { 
        //fetchData(); 
        console.log('Homepage component mounted');
    }, [])
>>>>>>> 7b3267f8522bc82af8af7614f6808cbc20dbd5ec

    return (
        <>
            <div>
                <p>Homepage</p>
            </div>
        </>
    )
}

export default Homepage;