import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import api from '../../../redux/action-creator';
import SectionImgDescription from './sectionImgDescription/SectionImgDescription';
import SectionCarousel from './sectionCarousel/SectionCarousel';
import sContainer from '../../../styles/container.module.css'
import Carousel, {consts} from 'react-elastic-carousel';

export default function ModelDetails(){

    let { id } = useParams()
    const dispatch = useDispatch()
    const detail = useSelector(state => state.details)
    useEffect(() => {
        dispatch(api.getDetails(id))
    },[id])

    return (
        <section>
            {detail &&
                <SectionImgDescription
                    direction={'row'}
                    img={detail.photo}
                    alt={`auto${detail.name}`}
                    active={true}
                    description={detail.description}
                    title={detail.title}
                />
            }
            <div className={sContainer.containerCarousel}>
                <Carousel
                    itemPosition={consts.CENTER}
                    showArrows={false}
                    breakPoints={[
                        { width: 300, itemsToShow: 1 },
                        { width: 500, itemsToShow: 1.5 },
                        { width: 620, itemsToShow: 2 },
                        { width: 720, itemsToShow: 2.5 },
                        { width: 820, itemsToShow: 3 },
                        { width: 920, itemsToShow: 3.5 },
                        { width: 1020, itemsToShow: 4 },
                        { width: 1420, itemsToShow: 5 },
                        { width: 1720, itemsToShow: 6 },
                    ]}
                >
                    {detail && detail.model_features?.map((el, index) => {
                        return <SectionCarousel
                            key={index}
                            img={el.photo}
                            alt={`auto${el.name}`}
                            name={el.name}
                            description={el.description}
                        />
                        })}
                </Carousel>
            </div>
            {
                detail.model_highlights?.map((el, index) => {
                    let direction
                    if ((index + 1) % 2 === 0) {
                        direction = "row"
                    } else {
                        direction = "row-reverse"
                    }
                    return <SectionImgDescription
                        key={el.title}
                        direction={direction}
                        img={el.image}
                        alt={`auto${el.title}`}
                        active={false}
                        description={el.content}
                        title={el.title}
                    />
                })
            }
        </section>
    )
}