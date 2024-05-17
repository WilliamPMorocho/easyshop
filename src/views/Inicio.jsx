import React from "react";
import Hero from "../components/Hero/Hero";
import Popular from "../components/Popular/Popular";
import Offers from "../components/Offers/Offers";
import NewCollections from "../components/NewCollections/NewCollections";

export const Inicio = () => {
    return (
        <>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollections/>
        </>
    );
}