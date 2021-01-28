import React, { useEffect, useState } from 'react';
import CarsModel from './carsModel/CardModel';
import api from '../../../redux/action-creator';
import { useSelector, useDispatch } from 'react-redux';

import sText from '../../../styles/text.module.css';
import sSection from '../../../styles/section.module.css';
import sContainer from '../../../styles/container.module.css';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

export default function Modelos(){

    const cars = useSelector(state => state.cars)
    const carsFilter = useSelector(state => state.carsFilter)
    const [ menuOrdenBy, setMenuOrdenBy ] = useState(false)
    const [ menuFilterBy, setMenuFilterBy ] = useState(false)
    const [ orderActivate, setOrderActivate ] = useState("")
    const [ orderFilter, setOrderFilter ] = useState("")
    const dispatch = useDispatch()
    const { CARSFILTER, CARS } = api;
    const onHandleFilterCars = (name) => {
        switch (name) {
            case 'todos':
                setOrderFilter(name)
                setMenuFilterBy(!menuFilterBy)
                return dispatch({
                    type: CARSFILTER,
                    payload: false
                })
            case 'Autos':
                setOrderFilter(name)
                setMenuFilterBy(!menuFilterBy)
                return dispatch({
                    type: CARSFILTER,
                    payload: cars.filter(el => el.segment === name)
                })
            case 'Pickups y Comerciales':
                setOrderFilter(name)
                setMenuFilterBy(!menuFilterBy)
                return dispatch({
                    type: CARSFILTER,
                    payload: cars.filter(el => el.segment === name)
                })
            case 'SUVs y Crossovers':
                setOrderFilter(name)
                setMenuFilterBy(!menuFilterBy)
                return dispatch({
                    type: CARSFILTER,
                    payload: cars.filter(el => el.segment === name)
                })
            default:
                return
        }
    }
    const onHandleOrderBy = (name) => {
        switch (name) {
            case 'menorAMayor':
                setOrderActivate(name)
                if (carsFilter) return dispatch({
                    type: CARSFILTER,
                    payload: carsFilter.sort((a, b) => a.price - b.price)
                })
                else return dispatch({
                    type: CARS,
                    payload: cars.sort((a, b) => a.price - b.price)
                })
            case 'mayorAMenor':
                setOrderActivate(name)
                if (carsFilter) return dispatch({
                    type: CARSFILTER,
                    payload: carsFilter.sort((a, b) => b.price - a.price)
                })
                else return dispatch({
                    type: CARS,
                    payload: cars.sort((a, b) => b.price - a.price)
                })
            case 'nuevos':
                setOrderActivate(name)
                if (carsFilter) return dispatch({
                    type: CARSFILTER,
                    payload: carsFilter.sort((a, b) => b.year - a.year)
                })
                else return dispatch({
                    type: CARS,
                    payload: cars.sort((a, b) => b.year - a.year)
                })
            case 'viejos':
                setOrderActivate(name)
                if (carsFilter) return dispatch({
                    type: CARSFILTER,
                    payload: carsFilter.sort((a, b) => a.year - b.year)
                })
                else return dispatch({
                    type: CARS,
                    payload: cars.sort((a, b) => a.year - b.year)
                })
            default:
                setOrderActivate(name)
                if (carsFilter) return dispatch({
                    type: CARSFILTER,
                    payload: carsFilter.sort((a, b) => a.id - b.id)
                })
                else return dispatch({
                    type: CARS,
                    payload: cars.sort((a, b) => a.id - b.id)
                })
        }
    }
    const buttonOrdenFilter = () => {
        return (
            <>
                <button
                    style={{ backgroundColor: orderFilter === "todos" ? 'rgba(209, 214, 214, 0.2)' : null }}
                    onClick={() => onHandleFilterCars('todos')}>
                    Todos
                </button>
                <button
                    style={{ backgroundColor: orderFilter === "Autos" ? 'rgba(209, 214, 214, 0.2)' : null }}
                    onClick={() => onHandleFilterCars('Autos')}>
                    Autos
                </button>
                <button
                    style={{ backgroundColor: orderFilter === "Pickups y Comerciales" ? 'rgba(209, 214, 214, 0.2)' : null }}
                    onClick={() => onHandleFilterCars('Pickups y Comerciales')}>
                    Pickups y Comerciales
                </button>
                <button
                    style={{ backgroundColor: orderFilter === "SUVs y Crossovers" ? 'rgba(209, 214, 214, 0.2)' : null }}
                    onClick={() => onHandleFilterCars('SUVs y Crossovers')}>
                    SUVs y Crossovers
                </button>
            </>
        )
    }

    useEffect(() => {
        dispatch(api.getCars())
    }, [dispatch])

    return (
        <section className={sSection.sectionContainerModels}>
            <h2 className={sText.h2TextModelos}>Descrubrí todos los modelos</h2>
            <div className={sContainer.containerSectionFilter}>
                <div className={sContainer.menuFilterMin850}>
                    <p>Filtrar por</p>
                    <div className={sContainer.containerButtonsModels}>
                        {buttonOrdenFilter()}
                    </div>
                </div>
                <div className={sContainer.menuFilterMax850}>
                    <div className={sContainer.menuFilterArrow} onClick={() => setMenuFilterBy(!menuFilterBy)}>
                        <p>Filtrar por</p>
                        {menuFilterBy ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                    </div>
                    {
                        menuFilterBy &&
                        <div className={sContainer.containerButtonsModels}>
                            {buttonOrdenFilter()}
                        </div>
                    }
                </div>
                <div
                    className={sContainer.containerOrdenBy}
                    onClick={() => setMenuOrdenBy(!menuOrdenBy)}>
                    <p>Ordenar por </p>
                    {menuOrdenBy ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                    {
                        menuOrdenBy &&
                        <div className={sContainer.containerOrdenByActivate}>
                            <button
                                style={{ backgroundColor: orderActivate === "nada" ? "#f7f7f7" : null }}
                                onClick={() => onHandleOrderBy('nada')}
                            >Nada
                            </button>
                            <button
                                style={{ backgroundColor: orderActivate === "menorAMayor" ? 'rgba(209, 214, 214, 0.2)' : null }}
                                onClick={() => onHandleOrderBy('menorAMayor')}>
                                De <strong>menor</strong> a <strong>mayor</strong> precio
                            </button>
                            <button
                                style={{ backgroundColor: orderActivate === "mayorAMenor" ? 'rgba(209, 214, 214, 0.2)' : null }}
                                onClick={() => onHandleOrderBy('mayorAMenor')}>
                                De <strong>mayor</strong> a <strong>menor</strong> precio
                            </button>
                            <button
                                style={{ backgroundColor: orderActivate === "nuevos" ? 'rgba(209, 214, 214, 0.2)' : null }}
                                onClick={() => onHandleOrderBy('nuevos')}>
                                Más <strong>nuevos</strong> primero
                            </button>
                            <button
                                style={{ backgroundColor: orderActivate === "viejos" ? 'rgba(209, 214, 214, 0.2)' : null }}
                                onClick={() => onHandleOrderBy('viejos')}>
                                Más <strong>viejos</strong> primero
                            </button>
                        </div>
                    }
                </div> 
            </div>
            <hr/>
            <div className={sContainer.containerCars}>
                {carsFilter ?
                    carsFilter.map(el =>
                        <CarsModel
                            key={el.id}
                            id={el.id}
                            name={el.name}
                            photo={el.photo}
                            price={el.price}
                            year={el.year}
                        />)
                    : cars.map(el =>
                        <CarsModel
                            key={el.id}
                            id={el.id}
                            name={el.name}
                            photo={el.photo}
                            price={el.price}
                            year={el.year}
                        />)}
            </div>
        </section>
    )
}