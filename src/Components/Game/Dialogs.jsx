import styles from 'Components/Game/Dialogs.module.css';
import { useState, useEffect, useRef } from 'react';

const Dialogs = ({ message }) => {
    const [dialogVisible, setDialogVisible] = useState(true);
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const textRef = useRef(null);

    useEffect(() => {
        setDisplayedText('');
        setIsTyping(true);

        let currentIndex = 0;
        function typeNextChar() {
            setDisplayedText(message.slice(0, currentIndex + 1));
            currentIndex++;
            if (currentIndex < message.length) {
                setTimeout(typeNextChar, 40);
            } else {
                setIsTyping(false);
            }
        }

        if (message && message.length > 0) {
            typeNextChar();
        } else {
            setIsTyping(false);
        }
    }, [message]);

    // Scroll automatico verso il basso quando il testo cambia
    useEffect(() => {
        if (textRef.current) {
            textRef.current.scrollTop = textRef.current.scrollHeight;
        }
    }, [displayedText]);

    if (!dialogVisible) return null;
    return (
        <div className="absolute bottom-[3vh] left-[3vw] bg-amber-50 rounded-2xl w-[94vw] h-[20vh] z-10">
            <div className="h-full dialog-box border-9 rounded-2xl shadow-2xl shadow-brown-800">
                <div 
                    className={`dialog-text p-8 ${styles.dialogTextScrollable}`}
                    ref={textRef}
                >
                    <p className={`text-black text-5xl xl:text-4xl leading-[3.5vh] ${styles.typewriter}`}>
                        {displayedText}
                        {isTyping && <span className={styles.caret}>|</span>}
                    </p>
                </div>
            </div>
            <div 
                className="close-btn absolute bottom-[1vh] right-[1vh] text-black bg-amber-100 rounded-lg border-3 border-white w-20 h-8 flex items-center justify-center cursor-pointer"
                onClick={() => setDialogVisible(false)}>
                    <p className="text-4xl">OK</p>
            </div>
        </div>
    )
}

export default Dialogs