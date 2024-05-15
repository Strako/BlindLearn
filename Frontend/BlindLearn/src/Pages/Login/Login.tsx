import LoginInput from "../../Inputs/Logininput/LoginInput";
import { Button } from "antd"
import './Login.css'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import speak from "../../Utils/TextToSpeech/TextToSpeech";
import { tutorialLogin } from "../../Utils/TextToSpeech/tutorialsMessages";

const Login = () => {
  //Constants
  const navigate =useNavigate();

  //useState Hooks
  const [buttonText, setButtonText] = useState("");
  const [voiceString, setVoiceString] = useState("");

  //Handlers
  const voiceHandler = () => {
    recognition.start();
  }

  const handleKeyPress = (event: any) => {
    if (event.key === 'Escape') {
      speak(tutorialLogin);
    }
    if (event.key === ' ') {
      voiceHandler();
      console.log(voiceString);
    }
    if (event.key === 'Enter') {
      //llamada al backend
      localStorage.setItem('token', voiceString);
      navigate("/");
      console.log(event);
    }
  };

  //Voice Recognition
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
  recognition.lang = 'es-MX';

  recognition.onstart = () => {
    setButtonText('Escuchando...')
  };

  recognition.onresult = (event: any) => {
    const transcript = event.results[0][0].transcript;
    setVoiceString(transcript);
    speak("Presiona la tecla enter para ingresar con el nombre " + transcript)
    console.log("-" + transcript);

  };

  recognition.onend = () => {
    setButtonText('Comenzar reconocimiento de voz');
  };

  //useEffect Hooks
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  });

  return (
    <>
      <h1> Type your username !</h1>

      <div className="login-input-container">
        <LoginInput voiceString={voiceString}/>
        <Button id="startButton" type="primary" onClick={voiceHandler}>{buttonText === "" ? "Start Voice Input" : buttonText}</Button>
      </div>
      <div>

      </div>
    </>
  );
};

export default Login;