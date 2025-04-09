"use client";
import React from "react";
import './liftingdicecarousel.css'
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LiftingDiceEquipmentSettings from "../assets/LiftingDiceEquipmentSettings.png"
import LiftingDiceMuscleGroups from "../assets/LiftingDiceMuscleGroups.png"
import LiftingDiceRolls from "../assets/LiftingDiceRolls.png"

const LiftingDiceCarousel = () =>  {

    const settings = {
        dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows: false
    }
    
    return(
        <div className="lifting-dice-carousel">
            <Slider  {...settings}>
            <div>
                <Image className="lifting-dice-carousel-image" src={LiftingDiceEquipmentSettings} alt="Screenshot of Lifting Dice equipment settings" />
                <h5>Equipment Settings</h5>
                <p>Pick what equipment you have access to to get relevant exercise rolls.</p>
            </div>
            <div>
                <Image className="lifting-dice-carousel-image" src={LiftingDiceMuscleGroups} alt="Screenshot of Lifting Dice muscle groups" />
                <h5>Muscle Groups</h5>
                <p>Pick what muscle groups you want to roll for for your workout.</p>
            </div>
            <div>
                <Image className="lifting-dice-carousel-image" src={LiftingDiceRolls} alt="Screenshot of Lifting Dice roll"/>
                <h5>Exercise Rolls</h5>
                <p>You will get a fully randomized workout that will keep your sessions fresh and your body sore.</p>
            </div>
        </Slider>
        </div>
    )
}

export default LiftingDiceCarousel;