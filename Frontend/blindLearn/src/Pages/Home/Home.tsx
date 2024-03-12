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

const Home = () => {
    //Constants
    const [voiceString, setVoiceString] = useState<string>("");
    const [validFlag, setValidFlag] = useState<boolean>();
    const [selectedOption, setSelectedOption] = useState<number>()
    const carrouselRef = useRef<HTMLDivElement>(null)
    const navigate = useNavigate();
    //Handlers
    const voiceHandler = () => {
        recognition.start();
    }

    const handlerSelectedOption = () => {
       // console.log("Voice string " + voiceString + "selected option: " + selectedOption)
        //Cambiar por switchcase
        switch (voiceString) {
            case "categoría 1":
                setSelectedOption(1);
                setValidFlag(true);
                break;
            case "categoría 2":
                setSelectedOption(2);
                setValidFlag(true);
                break;
            case "categoría 3":
                setSelectedOption(3);
                setValidFlag(true);
                break;
            case "categoría 4":
                setSelectedOption(4);
                setValidFlag(true);
                break;
            default:
                if(voiceString != ""){
                setSelectedOption(0);
                setValidFlag(false);
                }
            }
    };

    const handleKeyPress = (event: any) => {
        if (event.key === 'Escape') {
            speak(tutorialHome);
        }
        if (event.key === ' ') {
            voiceHandler();
        }
        if (event.key === 'Enter') {
            handlerSelectedOption();

        }
    };

    //Voice Recognition
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
    recognition.lang = 'es-MX';

    recognition.onstart = () => {
    };

    recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setVoiceString(transcript);
        speak("Presiona la tecla enter para ingresar a la categoría: " + transcript)


    };

    recognition.onend = () => {

    };


    //Functions
    const onChange = (currentSlide: number) => {
        
    };

    //useEffect Hooks
    useEffect(() => {
        carrouselRef.current?.focus();
        window.addEventListener('keydown', handleKeyPress)
    });

    useEffect(() => {
        if (!validFlag && validFlag != undefined) {
            console.log({"validFlag": validFlag, "selectedOption": selectedOption});
            speak("La opción no es valida");
        }else if (validFlag && validFlag != undefined) {
            console.log({"validFlag": validFlag, "selectedOption": selectedOption});
            navigate("/" + selectedOption)
        }
    }, [selectedOption, validFlag]);
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
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
        </>
    )
};

export default Home;