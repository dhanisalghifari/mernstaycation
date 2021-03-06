import React from 'react'
import Fade from 'react-reveal/Fade';
import ImageHero from 'assets/images/picture/img-hero.jpg';
import ImageHeroFrame from 'assets/images/picture/img-hero-frame.jpg';
import IconCities from 'assets/images/icons/icon_cities.svg';
import IconTraveler from 'assets/images/icons/icon_traveler.svg';
import IconTreasure from 'assets/images/icons/icon_treasure.svg';
import Button from 'elements/Button';
import { thousandSeparator } from 'utils/format';

export default function Hero(props) {

    function showMostPicked() {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        });
    }
     const { data } = props;
    const { travelers, treasures, cities } = data || {};

    return (
        <Fade bottom>
        <section className="container pt-4">
             <div className="row align-items-center">
                 <div className="col-auto pr-5" style={{width: 535}}>
                    <h1 className="font-weight-bold line-height-1 mb-3">
                        Find The Best, <br />
                        Place To Vacation
                    </h1>
                    <p className="mb-4 font-weight-light text-gray-500" style={{lineHeight: "170%", width: '70%'}}>
                    We help you in capturing beautiful moments in 
                    your holiday with family. Time to make 
                    another memorable moments.
                    </p>
                    <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
                    Show Me
                    </Button>

                    <div className="row" style={{marginTop: '80px'}}>

                        <div className="col-auto" style={{marginRight: 10}}>
                            <img width="36" height="36" src={IconTraveler} 
                            alt={`${travelers} Travelers`} />
                            <h6 className="mt-3">
                                {thousandSeparator(travelers)} <span className="text-gray-500 font-weight-light">Travelers</span>
                            </h6>
                        </div>

                        <div className="col-auto" style={{marginRight: 10}}>
                            <img width="36" height="36" src={IconTreasure} 
                            alt={`${travelers} Treasures`} />
                            <h6 className="mt-3">
                                {thousandSeparator(treasures)} <span className="text-gray-500 font-weight-light">Treasures</span>
                            </h6>
                        </div>

                        <div className="col-auto" style={{marginRight: 10}}>
                            <img width="36" height="36" src={IconCities} 
                            alt={`${cities} Cities`} />
                            <h6 className="mt-3">
                                {thousandSeparator(cities)} <span className="text-gray-500 font-weight-light">Cities</span>
                            </h6>
                        </div>

                    </div>
                 </div>

                 <div className="col 6 pl-5">
                     <div style={{width: 520, height: 410}}>
                         <img src={ImageHero} alt="Room with couches" className="img-fluid position-absolute" style={{margin: '-30px 0 0 -30px', zIndex: 1}} />

                         <img src={ImageHeroFrame} alt="Room with couches frame" className="img-fluid position-absolute" style={{margin: '-15px 0 0 -15px' }} />
                     </div>
                 </div>

             </div>
        </section>
        </Fade>
    );
}
