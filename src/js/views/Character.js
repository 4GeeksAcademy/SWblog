import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/characters.css";
import { Link } from "react-router-dom";

const Character = () => {

    const {store , actions} = useContext(Context)

    console.log(store.personajes);

    return(
        <>
            <h1>Characters</h1>
            {store.personajes.map((item , index)=>(
                <>
                     <div className="card" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                        

                            
                        <Link to={"/personajedetalle/" + index}>
                            <button className="btn btn-primary">Más info</button>
                        </Link>


                        </div>
                    </div>
                </>
            ))}
        </>

    );
};

export default Character;
