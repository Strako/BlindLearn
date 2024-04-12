import { Carousel } from 'antd';
import speak from '../../Utils/TextToSpeech/TextToSpeech';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import selectMessage from '../../Utils/SelectTextToSpech/SelectTextToSpeech';


const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '500px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const Categorias = () => {
    //Constants
    const [validFlag, setValidFlag] = useState<boolean>();
    const [selectedOption, setSelectedOption] = useState<number>()
    const carrouselRef = useRef<HTMLDivElement>(null)
    const navigate = useNavigate();
    const { state } = useLocation();
    const { categoryID } = state;



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
                case 'tema 1':
                    setSelectedOption(1);
                    setValidFlag(true);
                    break;
                case 'tema 2':
                    setSelectedOption(2);
                    setValidFlag(true);
                    break;
                case 'tema 3':
                    setSelectedOption(3);
                    setValidFlag(true);
                    break;
                case 'tema 4':
                    setSelectedOption(4);
                    setValidFlag(true);
                    break;
                case 'tema 5':
                    setSelectedOption(5);
                    setValidFlag(true);
                    break;
                case 'tema 6':
                    setSelectedOption(6);
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
            speak(selectMessage(categoryID) ?? "");
        }
        if (event.key === ' ') {
            voiceHandler();
        }
    };


    //Select the correct message for the tutorial


    //Functions
    const onChange = (currentSlide: number) => {
        console.log("Slide: " + currentSlide);
    };

    //useEffect Hooks
    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    useEffect(() => {
        if (selectedOption != undefined && !validFlag && validFlag != undefined) {
            speak("La opción no es valida");
            console.log("!validFlag && selectedOption: " + selectedOption);
            console.log(validFlag)
        }
        if (selectedOption != undefined && selectedOption !== -1) {
            navigate("/temas/" + selectedOption.toString())
        }
    }, [validFlag, selectedOption]);

    const renderCategory = () => {
        switch (categoryID) {
            case 1:
                return <>
                    <h1> Variables </h1>
                    <Carousel afterChange={onChange}>
                        <div ref={carrouselRef} >
                            <h3 style={contentStyle}>Variables primitivas</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>Variables no primitivas</h3>
                        </div>
                    </Carousel>
                </>
                break;
            case 2:
                return <>
                    <h1> Condicionales </h1>
                    <Carousel afterChange={onChange}>
                        <div ref={carrouselRef} >
                            <h3 style={contentStyle}>Conidcional If</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>Condicional Switch Case</h3>
                        </div>
                    </Carousel>
                </>
                break;
            case 3:
                return <>
                    <h1> Bucles </h1>
                    <Carousel afterChange={onChange}>
                        <div ref={carrouselRef} >
                            <h3 style={contentStyle}>Bucle For</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>Bucle While y Do While</h3>
                        </div>
                    </Carousel>
                </>
                break;
            default:
                return <h1> Categoría no encontrada ! </h1>
                break;
        }
    }

    //    console.log(categoryID);
    return (
        <>
            {renderCategory()}

        </>
    )
};

export default Categorias;