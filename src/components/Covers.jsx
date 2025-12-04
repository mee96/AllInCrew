// src/components/Covers.js

import React, { useState } from 'react'; 
import covers from '../data/coverData'; 
import '../scss/layout/Covers.scss'; 

function Covers() {
    
    const [featuredVideo, setFeaturedVideo] = useState(covers[0]);

    
    const playlist = covers.filter(cover => cover.id !== featuredVideo.id);

    
    const handleVideoSelect = (video) => {
        setFeaturedVideo(video);
        
    };

    return (
        <section className="covers-section">
            <h2 className="covers-section__title">Els Nostres Covers</h2>
            
            <div className="covers-section__layout-container">
                
                
                <div className="covers-section__main-player">
                    
                    <div className="main-player__video-container">
                        <iframe
                            src={`https://www.youtube.com/embed/${featuredVideo.youtubeId}`}
                            title={featuredVideo.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    
                    <div className="main-player__info">
                        <h3>{featuredVideo.title}</h3>
                        <p>Cover de {featuredVideo.artist}</p>
                    </div>
                </div>

                
                <div className="covers-section__playlist">
                    <h3 className="playlist__title">Tots els Covers ({covers.length})</h3>

                    {playlist.map((cover) => (
                        <div 
                            key={cover.id} 
                            className="playlist__item" 
                            onClick={() => handleVideoSelect(cover)} // 👈 Funció al fer clic
                        >
                            <div className="playlist__item-thumbnail">
                                
                                <img 
                                    src={`https://img.youtube.com/vi/${cover.youtubeId}/mqdefault.jpg`} 
                                    alt={cover.title} 
                                />
                            </div>
                            <div className="playlist__item-info">
                                <h4>{cover.title}</h4>
                                <p>{cover.artist}</p>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    );
}

export default Covers;