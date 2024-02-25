import LoginInput from "../../Inputs/Logininput/LoginInput";
import { Button } from "antd"
import './Login.css'
import { useDebugValue, useEffect, useState } from "react";


const msg = new SpeechSynthesisUtterance();
const voices = window.speechSynthesis.getVoices();


const speak = () => {
    msg.lang = 'es';
    msg.voice = voices[10]; 
    msg.volume = 1; // From 0 to 1
    msg.rate = 1; // From 0.1 to 10
    msg.pitch = 0; // From 0 to 2
    msg.text = "Para ingresar tu nombre de usuario presiona la barra espaciadora ";

    speechSynthesis.speak(msg);
}


const Login = () => {
    const [buttonText, setButtonText] = useState("");
    const [voiceString, setVoiceString] = useState("");

    const voiceHandler = () => {
        recognition.start();
    }

    const handleKeyPress = (event: any) => {
        if (event.key === 'Enter') {
          console.log('Enter key pressed');
        }
      };

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
    recognition.lang = 'es-MX';

    recognition.onstart = () => {
        setButtonText('Escuchando...')
    };

    recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setVoiceString(transcript);
    };

    recognition.onend = () => {
        setButtonText('Comenzar reconocimiento de voz');
        console.log("-" + voiceString);
    };

    useEffect(() => {
        const handleKeyPress = (event: any) => {
          if (event.key === 'Escape') {
            speak();
          }
          if(event.key === ' '){
            voiceHandler();
            console.log(voiceString);

          }
        };
    
        window.addEventListener('keydown', handleKeyPress);
    
        return () => {
          window.removeEventListener('keydown', handleKeyPress);
        };
      }, []);

    return (
        <>
            <h1> Type your username !</h1>

            <div className="login-input-container">
                <LoginInput voiceString={voiceString} />
                <Button id="startButton" type="primary" onClick={voiceHandler}>{buttonText === ""? "Start Voice Input" : buttonText}</Button>
            </div>
            <div>

    </div>
        </>
    );
};

export default Login;