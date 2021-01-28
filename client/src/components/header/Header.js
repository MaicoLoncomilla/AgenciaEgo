import React, { useEffect, useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import sHeader from '../../styles/header.module.css';
import sButton from '../../styles/button.module.css';
import logoAgenciaEgo from '../../assets/images/logo.svg';

import DehazeIcon from '@material-ui/icons/Dehaze';
import CloseIcon from '@material-ui/icons/Close';


export default function Header() {

    const { location } = useHistory()
    const { id } = useSelector(state => state.details)
    const [ locationHistory, setLocationHistory ] = useState("")
    const [ activeMenu, setActiveMenu ] = useState(false)
    const [ redirect, setRedirect ] = useState(false)
    const arrayMenu = {
        parteOne: ["Sercivios y Accesorios", "Financiación", "Reviews y Comunidad"],
        partTwo: ["Toyota Mobilitiy Service", "Toyota Gazoo Racing", "Toyota Híbridos"],
        partThree: ["Concesionarios", "Test Drive", "Contacto"],
        partFour: ["Actividades", "Servicios al Cliente", "Ventas Especiales", "Innovación", "Prensa", "Acerca de..."]
    }

    useEffect(() => {
        setLocationHistory(location.pathname)
    }, [location])

    return (
        <>
            { redirect && <Redirect to="/AgenciaEgo/" />}
            <header className={sHeader.headerContainer}>
                <div className={sHeader.headerContainerLeft}>
                    <img
                        onClick={() => setRedirect(!redirect)}
                        src={logoAgenciaEgo}
                        alt="AgenciaEgo" />
                    <Link
                        style={{
                            color: locationHistory === "/AgenciaEgo/" ? "#eb0a1e" : null,
                            borderBottom: locationHistory === "/AgenciaEgo/" ? "4px solid #d0021b" : null
                        }}
                        className={sButton.buttonHeaderLink} to="/AgenciaEgo/">
                        Modelos
                </Link>
                    <button style={{
                        color: locationHistory === `/AgenciaEgo/detalles/${id}` ? "#eb0a1e" : null,
                        borderBottom: locationHistory === `/AgenciaEgo/detalles/${id}` ? "4px solid #d0021b" : null
                    }}
                        className={sButton.buttonHeader}>
                        Ficha de modelo
                </button>
                </div>
                <div className={sHeader.headerContainerRight}>
                    <p className={sHeader.textMenu}>Menú</p>
                    <DehazeIcon className={sHeader.icon} onClick={() => setActiveMenu(!activeMenu)} />
                    {activeMenu &&
                        <div className={sHeader.containerActiveMenu}>
                            <div className={sHeader.containerCloseMenu} onClick={() => setActiveMenu(!activeMenu)}>
                                <p>Cerrar </p>
                                <CloseIcon />
                            </div>
                            <div className={sHeader.containerArrayMenu}>
                                <Link to="/AgenciaEgo/"
                                    onClick={() => setActiveMenu(!activeMenu)}
                                    className={sHeader.headerLink}>
                                    Modelos
                            </Link>
                                {arrayMenu.parteOne.map((el, index) =>
                                    <p key={index}>{el}</p>
                                )}
                            </div>
                            <hr style={{ width: '90%', margin: '0 auto' }} />
                            <div className={sHeader.containerArrayMenu}>
                                {arrayMenu.partTwo.map((el, index) =>
                                    <p key={index}>{el}</p>
                                )}
                            </div>
                            <hr style={{ width: '90%', margin: '0 auto' }} />
                            <div className={sHeader.containerArrayMenu}>
                                {arrayMenu.partThree.map((el, index) =>
                                    <p key={index}>{el}</p>
                                )}
                            </div>
                            <div className={sHeader.containerArrayMenuFour}>
                                {arrayMenu.partFour.map((el, index) =>
                                    <p key={index}>{el}</p>
                                )}
                            </div>
                        </div>
                    }
                </div>
            </header>
        </>
    )
}