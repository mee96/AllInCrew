// CrewMembers.js

import crewMembers from '../data/crewData'; 
import MemberCard from './MemberCard';
import '../scss/layout/CrewMembers.scss'; 

// 1. IMPORTEM ELS COMPONENTS DE SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
// 2. IMPORTEM ELS MÒDULS QUE NECESSITEM (Navegació i Paginació)
import { Navigation, Pagination } from 'swiper/modules';

// 3. IMPORTEM ELS ESTILS CORE DE SWIPER (Necessaris per al funcionament bàsic)
import 'swiper/css';
import 'swiper/css/navigation'; // Si utilitzes fletxes
import 'swiper/css/pagination'; // Si utilitzes punts

function CrewMembers() {
    return (
        <section className="crew-section">
            <h2 className="crew-section__title">CONEIX LA CREW</h2>
            {/* ... subtítol ... */}
            
            {/* 4. ÚS DEL COMPONENT SWIPER */}
            <Swiper
                // 5. Activem els mòduls de navegació i paginació
                modules={[Navigation, Pagination]}
                
                // Activem les fletxes de navegació (Desktop)
                navigation 
                
                // Activem els punts de paginació (Mobile/Desktop)
                pagination={{ clickable: true }} 
                
                // 6. Definim els breakpoints (quantes targetes mostrar segons la mida)
                breakpoints={{
                    // Quan l'ample és >= 640px
                    640: {
                        slidesPerView: 2, // Mostra 2 targetes
                        spaceBetween: 20, // 20px d'espai
                    },
                    // Quan l'ample és >= 1024px
                    1024: {
                        slidesPerView: 3, // Mostra 3 targetes
                        spaceBetween: 30,
                    },
                    // Mida per defecte (< 640px, mòbil)
                    0: {
                        slidesPerView: 1.1, // Mostra 1 targeta i el tros de la següent
                        spaceBetween: 10,
                    }
                }}
                className="crew-section__container" // Utilitzem la teva classe
            >
                {crewMembers.map((member) => (
                    // 7. Cada targeta ha d'estar dins de SwiperSlide
                    <SwiperSlide key={member.id}>
                        <MemberCard memberInfo={member} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default CrewMembers;