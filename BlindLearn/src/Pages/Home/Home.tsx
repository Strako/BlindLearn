import { Carousel } from 'antd';
import speak from '../../Utils/TextToSpeech/TextToSpeech';
import { useEffect, useRef, useState } from 'react';
import { tutorialHome } from '../../Utils/TextToSpeech/tutorialsMessages';
import { useNavigate } from 'react-router-dom';
import { VictorySharedEvents, VictoryBar, VictoryLabel, VictoryPie } from 'victory';
const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '500px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    fontSize: '120px'
};

const Home = () => {
    //Constants
    const [validFlag, setValidFlag] = useState<boolean>();
    const [selectedOption, setSelectedOption] = useState<number>()
    const carrouselRef = useRef<HTMLDivElement>(null)
    const navigate = useNavigate();

    let calificaciones = '';
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
                case 'categoría 1':
                    setSelectedOption(1);
                    setValidFlag(true);
                    break;
                case 'categoría 2':
                    setSelectedOption(2);
                    setValidFlag(true);
                    break;
                case 'categoría 3':
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

    const handleKeyPress = (event: any) => {
        if (event.key === 'Escape') {
            speak(tutorialHome);
        }
        if (event.key === ' ') {
            event.preventDefault();
            voiceHandler();
        }
        if (event.key === 'Enter') {
            window.scrollTo(0, document.body.scrollHeight - 780);
            calificaciones = '';
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i) || '';
                if (key !== 'token') {
                        console.log(localStorage.getItem(key));
                        calificaciones += (`Calificacion del ${key} es: ${localStorage.getItem(key) || '0'}`);
                }
            }
            speak(calificaciones);
        }
    }


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
            navigate("/categorias/", { state: { categoryID: selectedOption } })
            window.location.reload();
        }
    }, [validFlag, selectedOption]);
    return (
        <>
            <h1> Inicio </h1>
            <Carousel afterChange={onChange}>
                <div ref={carrouselRef} >
                    <h3 style={contentStyle}>Operadores y estructuras de control</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>Funciones y arreglos</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>Objetos, clases y gestion de errores</h3>
                </div>
            </Carousel>

            <h3 className="resultados">Resultados</h3>
<svg viewBox="0 0 450 350">
  <VictorySharedEvents
    events={[{
      childName: ["pie", "bar"],
      target: "data",
      eventHandlers: {
        onMouseOver: () => {
          return [{
            childName: ["pie", "bar"],
            mutation: (props) => {
              return {
                style: Object.assign({}, props.style, { fill: "tomato" })
              };
            }
          }];
        },
        onMouseOut: () => {
          return [{
            childName: ["pie", "bar"],
            mutation: () => {
              return null;
            }
          }];
        }
      }
    }]}
  >
    
    <g transform={"translate(150, 50)"}>
      <VictoryBar name="bar"
        width={300}
        height={300}
        padding={60}
        standalone={false}
        style={{
            labels: { fontSize: 10, padding: 10, fill: 'white' },
            data: { width: 20, fill: "tomato", stroke: 'white', strokeWidth: '1px' },
          }}
        data={[
            { x: "Tema 1", y: +`${localStorage.getItem('tema1') || '0'}` }, 
            { x: "Tema 2", y: +`${localStorage.getItem('tema2') || '0'}` }, 
            { x: "Tema 3", y: +`${localStorage.getItem('tema3') || '0'}` }, 
            { x: "Tema 4", y: +`${localStorage.getItem('tema4') || '0'}` }, 
            { x: "Tema 5", y: +`${localStorage.getItem('tema5') || '0'}` }, 
            { x: "Tema 6", y: +`${localStorage.getItem('tema6') || '0'}` },         ]}
        labels={["Tema1 ", "Tema 2", "Tema 3", "Tema 4", "Tema 5", "Tema 6"]}
        labelComponent={<VictoryLabel y={290} />}
      />
    </g>
    <g transform={"translate(0, -75)"}>
      <VictoryPie name="pie"
        width={200}
        height={550}
        padding={50}
        standalone={false}
        style={{ labels: { fontSize: 10, padding: 10, fill: 'white' }, data: { fill: "black", stroke: 'white' } }}
        data={[
          { x: "Tema 1", y: +`${localStorage.getItem('tema1') || '0'}` }, 
          { x: "Tema 2", y: +`${localStorage.getItem('tema2') || '0'}` }, 
          { x: "Tema 3", y: +`${localStorage.getItem('tema3') || '0'}` }, 
          { x: "Tema 4", y: +`${localStorage.getItem('tema4') || '0'}` }, 
          { x: "Tema 5", y: +`${localStorage.getItem('tema5') || '0'}` }, 
          { x: "Tema 6", y: +`${localStorage.getItem('tema6') || '0'}` }, 
        ]}
      />
    </g>
  </VictorySharedEvents>
</svg>

            
        </>
    )
};

export default Home;