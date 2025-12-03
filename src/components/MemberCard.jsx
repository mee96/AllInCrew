

import React from 'react';
import '../scss/layout/MemberCard.scss';

function MemberCard({ memberInfo }) {
    
    const { name, photoUrl, mbti, facts, ultGroups, birthday, role } = memberInfo;

    return (
        <article className="member-card">
            {/* 1. FOTO I NOM */}
            <div className="member-card__header">
                <div className="member-card__photo-container">
                    <img className="member-card__photo" src={photoUrl} alt={`Foto de ${name}`} />
                    <span className="member-card__mbti">{mbti}</span> {/* MBTI sobreposat */}
                </div>
                <h3 className="member-card__name">{name}</h3>
                <p className="member-card__role">{role || 'Dancer'}</p>
            </div>
            
            {/* 2. DETALLS */}
            <div className="member-card__details">
                <p className="member-card__birthday">
                    🎂 {birthday}
                </p>
                
                {/* 🎯 FACTS / COSES QUE ENS DEFINEIXEN */}
                <div className="member-card__facts">
                    {facts.map((fact, index) => (
                        <span key={index} className="member-card__fact-tag">
                            {fact}
                        </span>
                    ))}
                </div>

                {/* 🎶 ULTS / GRUPS PREFERITS */}
                <div className="member-card__ults">
                    <h4>ULTs:</h4>
                    <p>{ultGroups.join(', ')}</p>
                </div>
            </div>
        </article>
    );
}

export default MemberCard;