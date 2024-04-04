import { Carousel } from 'antd';
import speak from '../../Utils/TextToSpeech/TextToSpeech';
import { useEffect, useRef, useState } from 'react';
import { tutorialCategory } from '../../Utils/TextToSpeech/tutorialsMessages';
import { useLocation, useNavigate } from 'react-router-dom';



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
            speak(tutorialCategory);
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
            navigate("/temas/" + selectedOption.toString())
        }
    }, [validFlag, selectedOption]);

    const renderCategory = () => {
        switch (categoryID) {
            case 1:
                return <h1> Categoría 1 ! </h1>
                break;
            case 2:
                return <h1> Categoría 2 ! </h1>
                break;
            case 3:
                return <h1> Categoría 3 ! </h1>
                break;
            default:
                return <h1> Categoría no ecnontrada ! </h1>
                break;
        }
    }

//    console.log(categoryID);
    return (
        <>
        {renderCategory()}
            <Carousel afterChange={onChange}>
                <div ref={carrouselRef} >
                    <h3 style={contentStyle}>Tema 1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>Tema 2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>Tema 3</h3>
                </div>
            </Carousel>
        </>
    )
};

export default Categorias;