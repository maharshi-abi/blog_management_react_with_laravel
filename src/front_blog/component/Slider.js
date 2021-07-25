import React from 'react';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  

export default function Slider(props) {
    return (
        <React.Fragment>
            <section className="hero">
                <div className="container">
                    <div className="hero__slider">
                        <OwlCarousel items={1} margin={50} autoplay ={true} loop={true}>         
                            <div className="row">                                                         
                                <img className="img" src= {'https://c4.wallpaperflare.com/wallpaper/307/678/425/pubg-wallpaper-preview.jpg'}/>                            
                            </div>
                            <div className="row">
                                <img className="img" src= {'https://c4.wallpaperflare.com/wallpaper/56/878/323/pubg-playerunknown-s-battlegrounds-4k-wallpaper-preview.jpg'}/>                                                    
                            </div>
                            <div className="row">
                                <img className="img" src= {'https://c4.wallpaperflare.com/wallpaper/714/80/25/video-game-playerunknown-s-battlegrounds-playerunknown-s-battlegrounds-wallpaper-preview.jpg'}/>                                                    
                            </div>                            
                        </OwlCarousel>  
                    </div>
                </div>                  
            </section>       
        </React.Fragment>
    );
}