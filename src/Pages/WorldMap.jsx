import 'Styles/WorldMap.css';
import {useNavigate} from 'react-router-dom';

const WorldMap = () => {

    const navigate = useNavigate();
    const sections = [
        { id: 'forest', title: 'Foresta', link: '/forest', color: '#4CAF50' },
        { id: 'mountain', title: 'Montagna', link: '/mountain', color: '#795548' },
        { id: 'crystal', title: 'Cristallo', link: '/crystal', color: '#E91E63' },
        { id: 'desert', title: 'Deserto', link: '/desert', color: '#FFC107' },
        { id: 'castle', title: 'Castello', link: '/castle', color: '#9C27B0' }
    ];

    return (
        <div className="world-map">
            {sections.map((section) => (
                <a
                    key={section.id}
                    className={`map-section ${section.id}`}
                    style={{ '--section-color': section.color }}
                    onClick={() => navigate(section.link)}
                >
                    <div className="section-content">
                        <h3>{section.title}</h3>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default WorldMap;