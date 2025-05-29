import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import 'Styles/Startup.scss'
import { FaVolumeHigh } from "react-icons/fa6";
import pushAudio from '/startup/button.mp3';
import audioFile from '/startup/psx.mp3';

const Startup = () => {
    const navigate = useNavigate();
    const push = new Audio(pushAudio);
    const audio = new Audio(audioFile);

    useEffect(() => {
        push.load();
        push.volume = 0.1;
        audio.load();
        audio.volume = 0.05;
    }, []);

    const startUp = () => {
        const elements = [
            ['.overlayBlur', 'blur'],
            ['.fadein', 'fadeinAnim'],
            ['.triOne', 'triOneAnim'],
            ['.triTwo', 'triTwoAnim'],
            ['.stageOne', 'stageOneAnim'],
            ['.stageOneSly', 'stageOneTextFader'],
            ['.stageOneFrontend', 'stageOneTextFader'],
            ['.stageOneEntertainment', 'stageOneTextFader'],
            ['.stageTwo', 'stageTwoAnim'],
            ['.PS', 'PSAnim'],
            ['.stageTwoPS', 'stageTwoPSAnim'],
            ['.stageTwoLicense', 'stageTwoLicenseAnim'],
            ['.playBtn', 'hide']
        ];
       
        elements.forEach(([selector, className]) => {
            const element = document.querySelector(selector);
            if (element) {
                element.classList.add(className);
            }
        });

        push.play();
        setTimeout(() => {
            audio.play();
        }, 500);

        setTimeout(() => {
            navigate('/main-menu'); // o qualsiasi altro percorso desideri
        }, 12000);
    }

    useEffect(() => {
        // startUp();
    }, []);

    const handlePlay = (e) => {
        startUp();
    }

    const handleSkip = (e) => {
        audio.pause();
        audio.currentTime = 0;
        navigate('/main-menu');
    }


    return (
        <div className="page-container">
            <div className="psxBoot">
                <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center text-5xl text-black">
                    <div className="playBtn flex flex-col justify-center items-center relative">
                        <span className="text-white text-[2rem] mb-100 z-90 flex justify-center gap-3"><FaVolumeHigh />SOUNDS ON</span>
                        <button className="bg-gray-300 h-80 w-80 rounded-full z-999 absolute cursor-pointer font-bold animate-pulse shadow-gray-800 shadow-lg"
                            onClick={(e) => handlePlay(e)}
                        >
                            POWER
                        </button>
                    </div>
                    <span className="skip text-2xl font-bold self-end-safe right-10 bottom-10 text-white absolute z-999 hover:text-amber-100 cursor-pointer"
                        onClick={() => handleSkip()}>
                        SKIP INTRO
                    </span>
                </div>

                <div className="overlay overlayBlur">
                    <div className="overlay scanlines"></div>
                    <div className="overlay fadein"></div>
                    <div className="overlay stageTwo">
                        <div className="wrapper">
                            <div className="PS"></div>
                            <div className="stageTwoText">
                                <h3 className="stageTwoPS">DevStation<span className="tm">tm</span></h3>
                                <div className="stageTwoLicense">
                                    <h4>Licensed by</h4>
                                    <h4>Fabio Frontend Entertainment Europe</h4>
                                    <h4 className="scea">FFEE<span className="tm">tm</span></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper stageOne">
                        <h1 className="stageOneSly pb-12 customsly">SLY</h1>
                        <div className="containerBox">
                            <div className="bigBox">
                                <div className="triContainer triTwo">
                                    <div className="triangle"></div>
                                </div>
                                <div className="triContainer triOne">
                                    <div className="triangle"></div>
                                </div>
                            </div>
                        </div>
                        <h2 className="stageOneFrontend pt-12 pl-2">FRONTEND</h2>
                        <h2 className="stageOneEntertainment pt-12">ENTERTAINMENT</h2>
                    </div>
                </div >
            </div>
        </div>
    )
}

export default Startup
