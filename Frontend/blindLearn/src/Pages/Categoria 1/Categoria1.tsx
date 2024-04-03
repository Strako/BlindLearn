import { Carousel } from 'antd';
import speak from '../../Utils/TextToSpeech/TextToSpeech';
import { useEffect, useRef, useState } from 'react';
import { tutorialHome } from '../../Utils/TextToSpeech/tutorialsMessages';
import { useNavigate } from 'react-router-dom';

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '500px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const Categoria1 = () => {
    //Constants
    const [validFlag, setValidFlag] = useState<boolean>();
    const [selectedOption, setSelectedOption] = useState<number>()
    const carrouselRef = useRef<HTMLDivElement>(null)
    const navigate = useNavigate();

    //Voice Recognition
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
    recognition.lang = 'es-MX';

    recognition.onstart = () => {
    };

    recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        console.log("Recognition: -" + transcript);
        if (event.results[0].isFinal) {
            //    setVoiceString(transcript);
            console.log("handler selected option: " + transcript)
            switch (transcript) {
                case 'subcategoría 1':
                    setSelectedOption(0);
                    setValidFlag(true);
                    break;
                case 'subcategoría 2':
                    setSelectedOption(1);
                    setValidFlag(true);
                    break;
                case 'subcategoría 3':
                    setSelectedOption(2);
                    setValidFlag(true);
                    break;
                default:
                    setSelectedOption(-1);
                    setValidFlag(false)
            }
        }
    };

    recognition.onend = () => {

    };


    //Handlers
    const voiceHandler = () => {
        recognition.start();
    }

    /* const handlerSelectedOption = () => {
 
     };
 */
    const handleKeyPress = (event: any) => {
        if (event.key === 'Escape') {
            speak(tutorialHome);
        }
        if (event.key === ' ') {
            voiceHandler();
        }
        //      if (event.key === 'Enter') {
        //          handlerSelectedOption();
        //      }
    };



    //Functions
    const onChange = (currentSlide: number) => {
        console.log("Slide: " + currentSlide);
    };

    //useEffect Hooks
    useEffect(() => {
        carrouselRef.current?.focus();

        window.addEventListener('keydown', handleKeyPress)
    });

    useEffect(() => {
        if (selectedOption != undefined && !validFlag && validFlag != undefined) {
            speak("La opción no es valida");
            console.log("!validFlag && selectedOption: " + selectedOption);
            console.log(validFlag)
        }
        if (selectedOption != undefined && selectedOption !== -1) {
            navigate("/subcategoría/" + selectedOption)
        }
    }, [validFlag, selectedOption]);
    return (
        <>
            <h1> Home ! </h1>
            <Carousel afterChange={onChange}>
                <div ref={carrouselRef} >
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
            </Carousel>
        </>
    )
};

export default Categoria1;