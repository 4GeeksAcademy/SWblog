import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";


const CharactersDetail = () => {

    const {store , actions} = useContext(Context);
    const params = useParams();


    return (
        <>
        {store.personajes[params.personajeposicion].name}
        <hr></hr>
        {store.personajes[params.personajeposicion].gender}
        <hr></hr>
        {store.personajes[params.personajeposicion].height}
        </>
            
    )
}




export default CharactersDetail;