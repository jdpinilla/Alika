import React, { useState } from 'react'
import { SliderData } from './SliderData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import '../styles/SlideImage.css'
const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === length - 1 ? 0 : current - 1)
    }


    if (!Array.isArray(slides) || length <= 0) {
        return null;
    }
    return (
        <section className='slider'>
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={slide.id}>
                        {index === current && (
                            <img className='image' src={slide.image} alt={slide.name} />
                        )}
                    </div>
                )
            })}
        </section>
    )
}

export default ImageSlider
