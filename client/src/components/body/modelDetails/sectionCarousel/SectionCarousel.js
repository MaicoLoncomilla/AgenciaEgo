import React from 'react';
import sSection from '../../../../styles/section.module.css';
import sText from '../../../../styles/text.module.css';

export default function SectionCarousel({ img, alt, name, description}){
    return (
        
        <section className={sSection.sectionContainerCarousel}>
            <img src={`https://challenge.agenciaego.tech${img}`} alt={alt} />
            <h2 className={sText.textH2SectionCarousel}>{name}</h2>
            <p className={sText.textPSectionCarousel}>{description}</p>
        </section>
    )
}