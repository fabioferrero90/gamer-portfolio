import { useState } from 'react';
import { useGlobalContext } from 'Contexts/GlobalContext';

const LangSelector = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { lang, setLang } = useGlobalContext();

    const languages = {
        en: { flag: '/uk-flag.webp', label: 'EN' },
        it: { flag: '/it-flag.webp', label: 'IT' }
    };

return (
    <div className="absolute top-2 right-2">
        <div className="relative">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="bg-gray-800 border border-gray-600 rounded-md p-2 flex items-center gap-2 hover:bg-gray-700 text-white"
            >
                {<img src={languages[lang].flag} width="20px"></img>} {languages[lang].label}
                <svg 
                    className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute top-full mt-1 w-full bg-gray-800 border border-gray-600 rounded-md shadow-lg">
                    {Object.entries(languages).map(([code, { flag, label }]) => (
                        <button
                            key={code}
                            onClick={() => {
                                setLang(code);
                                setIsOpen(false);
                            }}
                            className="w-full p-2 text-left hover:bg-gray-700 flex items-center gap-2"
                        >
                            {<img src={flag} width="20px"></img>} {label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    </div>
);
}

export default LangSelector