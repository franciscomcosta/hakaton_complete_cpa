import React from "react";
import Exemple from './exemple.jpeg'
import Exemple2 from './exemple2.jpeg'
import './publish.css'
export default function Publish (user) {
    console.log(user)

   

    //Exemplo genérico de puclicação
    return(
        <>
            <section className="main" style={{border: user.type === 'denuncia' ? ' solid 1px tomato' : ' solid 1px white'}}>
                <div className="text" >
                <h2>{user.name}</h2>
                <h5>Classificação: {user.stars} Estrelas</h5>
                <h4>{user.desc}</h4>
                
                </div>
                <img src={user.img === 1 ? Exemple : Exemple2}  width={'50%'}alt="exemple" />
            </section>
        </>
    )
}