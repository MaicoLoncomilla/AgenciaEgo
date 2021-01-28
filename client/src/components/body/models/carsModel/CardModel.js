import React from 'react';
import { Link } from 'react-router-dom'
import sContainer from '../../../../styles/container.module.css';
import sText from '../../../../styles/text.module.css';

export default function CarsModel({ id, name, photo, price, year}){
    return (
        <div className={sContainer.carsModel}>
            <h1 className={sText.textH1CarsModel}>{name}</h1>
            <p className={sText.textPCarsModel}> {year} | ${price}</p>
            <img src={`https://challenge.agenciaego.tech${photo}`} alt={`auto${name}`}/>
            <Link className={sContainer.buttonLink} to={`/AgenciaEgo/detalles/${id}`}>Ver Modelo</Link>
        </div>
    )
}