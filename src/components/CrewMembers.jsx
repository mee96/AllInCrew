
import crewMembers from '../data/crewData'; 
import MemberCard from './MemberCard';
import '../scss/layout/CrewMembers.scss'; 

function CrewMembers() {
    return (
        <section className="crew-section">
            <h2 className="crew-section__title">CONEIX LA CREW</h2>
            <p className="crew-section__subtitle">
                10 ballarines apassionades pel K-Pop, amb personalitats úniques i molta energia!
            </p>
            
            
            <div className="crew-section__container">
                {crewMembers.map((member) => (
                    
                    <MemberCard key={member.id} memberInfo={member} />
                ))}
            </div>
        </section>
    );
}

export default CrewMembers;