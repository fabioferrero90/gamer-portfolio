import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import backgroundImage from '/mainmenu/backgrounds/mainBG.png';
import mainLogo from '/mainmenu/fabio_logo.png';
import selectSound from '/mainmenu/sounds/select.mp3'; 
import { useGlobalContext } from 'Contexts/GlobalContext';
import i18next from 'i18next';

import 'Styles/MainMenu.css';

const selSound = new Audio(selectSound);
selSound.volume = 0.1;

const MainMenu = () => {

    const { lang } = useGlobalContext()
    const { t } = i18next
    i18next.init({
        lng: lang,
        resources: {
            en: {
                translation: {
                    "Continue": "Continue",
                    "New Game": "New Game",
                    "Achievements": "Achievements",
                    "Enable Boomer Mode": "Enter Boomer Mode",
                    "Don't want to play?": "Don't want to play?",
                }
            },
            it: {
                translation: {
                    "Continue": "Continua",
                    "New Game": "Nuova Partita",
                    "Achievements": "Obiettivi",
                    "Enable Boomer Mode": "Entra in Modalità Boomer",
                    "Don't want to play?": "Non vuoi giocare?",
                }
            }
        }
    })

    const navigate = useNavigate();

    const mMenuBg = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        transition: 'background-position 0.2s ease-out',
        fontFamily: "'Wild Breath', sans-serif"
    }

    const mMenuGradient = {
        background: 'linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0.0))',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    useEffect(() => {
        setTimeout(() => {
            document.querySelector('.m-menu-sidebar').classList.remove('outofscreenl');
            document.querySelector('.rightmodal').classList.remove('outofscreenr');
        }, 500);
    })

    return (
        <div className="m-menu-fullscreen overflow-hidden select-none" style={mMenuBg}>
            <div className="flex justify-between" style={mMenuGradient}>
                <div className="m-menu-sidebar outofscreenl py-8 xl:py-20 h-[100vh] flex flex-col justify-between w-1/2 pl-10 md:pl-24">
                    <div className="game-logo md:pt-5 xl:pt-12 max-w-[40vw] xl:max-w-[20vw]">
                        <img className="aspect-square h-full" src={mainLogo} alt="Fabio logo" />
                    </div>
                    <nav className="navmenu py-5 xl:pt-18 text-4xl xl:text-6xl h-full">
                        <ul>
                            <li className="disabled">
                                <a
                                    className="opacity-50"
                                    onClick={() => selSound.play()}
                                >{t("Continue")}</a>
                            </li>
                            <li>
                                <a
                                    className="cursor-pointer hover:text-yellow-50"
                                    onClick={() => {
                                        selSound.play();
                                        navigate("/play")
                                    }}
                                >{t("New Game")}</a>
                            </li>
                            <li>
                                <a
                                    className="cursor-pointer hover:text-yellow-50"
                                    onClick={() => selSound.play()}
                                >{t("Achievements")}</a>
                            </li>
                            <li>
                                <a
                                    className="cursor-pointer hover:text-yellow-50"
                                    href="https://github.com/fabioferrero90"
                                    target="_blank" rel="noopener noreferrer"
                                    onClick={() => selSound.play()}
                                >GitHub</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="m-menu-credits text-xl text-white">
                        <div>
                            <span className="text-xs md:text-xl block">© 2025 made in React by </span>
                            <span className="md:text-3xl xl:text-4xl wildtext">Fabio Ferrero</span>
                        </div>
                    </div>
                </div>
                <div className="flex rightmodal outofscreenr flex-col justify-center items-end bg-black/70 p-8 md:p-6 rounded-l-2xl absolute right-0 bottom-[12vh]">
                    <div className="boomerBtn max-w-[100%]">
                        <div className="text-lg font-bold pb-4 text-white text-center">{t("Don't want to play?")}</div>
                        <button
                            className=" bg-gray-600 text-md font-bold text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors cursor-pointer"
                            onClick={() => {
                                selSound.play();
                                navigate("/boomer")
                            }}
                        >
                            {t("Enable Boomer Mode")}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainMenu