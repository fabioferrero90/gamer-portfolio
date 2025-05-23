import React from 'react'
import { useNavigate } from 'react-router-dom';
import backgroundImage from '/src/assets/mainmenu/backgrounds/botw1.jpg';
import 'Styles/MainMenu.css';

const MainMenu = () => {
    const navigate = useNavigate();

    const mMenuBg = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom right',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        transition: 'background-position 0.2s ease-out',
        fontFamily: "'Wild Breath', sans-serif"
    }

    const mMenuGradient = {
        background: 'linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.0))',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    return (
        <div className="m-menu-fullscreen w-[100vw] h-[100vh] overflow-hidden" style={mMenuBg}>
            <div className="flex justify-between" style={mMenuGradient}>
                <div className="m-menu-sidebar py-8 xl:py-20 h-[100vh] flex flex-col justify-between w-1/2 pl-24">
                    <div className="game-logo pt-5 xl:pt-12 max-h-[40%]">
                        <img className="h-full" src="/src/assets/mainmenu/fabio_logo.png" alt="" />
                    </div>
                    <nav className="py-5 xl:pt-18 text-4xl xl:text-6xl h-full">
                        <ul>
                            <li>
                                <a
                                    className="cursor-pointer hover:text-yellow-50"
                                >Continue</a>
                            </li>
                            <li>
                                <a
                                    className="cursor-pointer hover:text-yellow-50"
                                    onClick={() => navigate("/play")}
                                >New Game</a>
                            </li>
                            <li>
                                <a
                                    className="cursor-pointer hover:text-yellow-50"
                                >Achievements</a>
                            </li>
                            <li>
                                <a
                                    className="cursor-pointer hover:text-yellow-50"
                                >GitHub</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="m-menu-credits text-xl shadow-xl text-white">
                        <div>
                            <span>© 2025 made in React by </span>
                            <p className="text-3xl xl:text-4xl wildtext">Fabio Ferrero</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col justify-end items-end p-12">
                    <div className="max-w-[80%]">
                        <div className="text-2xl text-white">Don't want to play?</div>
                        <button className="bg-black text-2xl text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
                            Enable Boomer Mode
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainMenu