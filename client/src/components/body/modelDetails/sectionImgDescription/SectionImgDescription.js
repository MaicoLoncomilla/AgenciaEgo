import React from 'react';
import sSection from '../../../../styles/section.module.css'
import sText from '../../../../styles/text.module.css'


export default function SectionImgDescription({direction,img, alt, description, title, active}){
    return (
        <section className={sSection.sectionImgDescription} style={{ flexDirection: direction }}>
            <img src={`https://challenge.agenciaego.tech${img}`} alt={alt} />
            <div className={sSection.containerDescription}>
                <h1 className={sText.textH1CarsDetail}>{title}</h1>
                {active && <p className={sText.textPCarsDetail}>Preparada para cualquier desafío</p>}
                <p className={sText.textPCarsDetailDescription}>{description}</p>
            </div>
        </section>
    )
}