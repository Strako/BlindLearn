import speak from '../../Utils/TextToSpeech/TextToSpeech';
import { useEffect, useState, useRef } from 'react';
import { tutorialQuiz } from '../../Utils/TextToSpeech/tutorialsMessages';
import { useNavigate } from 'react-router-dom';
import questionsTema1 from '../../Utils/Temas/Tema6';

const Tema1 = () => {
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [currentScore, setCurrentScore] = useState<number>(0);
    const tittle = 'Respuestas';

    // Crear una referencia para currentQuestion
    const currentQuestionRef = useRef(currentQuestion);
    
    // Mantener la referencia actualizada
    useEffect(() => {
        currentQuestionRef.current = currentQuestion;
    }, [currentQuestion]);

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
    recognition.lang = 'es-MX';

    recognition.onstart = () => {};

    recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        console.log("Recognition: - " + transcript);

        if (event.results[0].isFinal) {
            let lowerTranscript = transcript.toLowerCase();
            let correctAnswer = questionsTema1.questions[currentQuestionRef.current].correctAnswer.toLowerCase();

            if (lowerTranscript === correctAnswer) {
                setCurrentScore(prevScore => {
                    const newScore = prevScore + 1;
                    localStorage.setItem('tema6', newScore.toString());
                    return newScore;
                });
                speak("La respuesta es correcta");
            } else {
                speak("La respuesta es incorrecta");
            }

            setCurrentQuestion(prevQuestion => prevQuestion + 1);
 
        }
    };

    recognition.onend = () => {};

    const voiceHandler = () => {
        recognition.start();
    };

    const handleKeyPress = (event: any) => {
        switch (event.key) {
            case 'Escape':
                speak(tutorialQuiz);
                break;
            case ' ':
                voiceHandler();
                break;
            case '1':
                speak(questionsTema1.information);
                break;
            case '2':
                speak(questionsTema1.questions[currentQuestionRef.current].answers_tittle);
                break;
            case '3':
                speak(`inciso a, ${questionsTema1.questions[currentQuestionRef.current].answers.a}, inciso b, ${questionsTema1.questions[currentQuestionRef.current].answers.b}, inciso c, ${questionsTema1.questions[currentQuestionRef.current].answers.c}`);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        localStorage.setItem('tema6', '0');
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    useEffect(() => {
        console.log({
            'UseEffect -----current score': currentScore,
            'current question': currentQuestion,
            'correct answer': questionsTema1.questions[currentQuestion]?.correctAnswer?.toLowerCase()
        });

        if (currentQuestion === +questionsTema1.total) {
            speak(`Calificacion tema 6 es: ${currentScore} puntos`);
            navigate('/');
        }
    }, [currentQuestion, currentScore, navigate]);

    return (
        <>
<h1 className='tittle'>{questionsTema1.tittle}</h1>
            <article className='information'>{questionsTema1.information}</article>
            <h2 className='question'>{currentQuestion < 10 ? questionsTema1.questions[currentQuestion].answers_tittle : 'Finalizado'}</h2>
            <h2 className='answers_tittle'>{tittle}</h2>
            <h3 className='answers'>{`Inciso a): ${currentQuestion < 10 ? questionsTema1.questions[currentQuestion].answers.a : ''}`}</h3>
            <h3 className='answers'>{`Inciso b): ${currentQuestion < 10 ? questionsTema1.questions[currentQuestion].answers.b : ''}`}</h3>
            <h3 className='answers'>{`Inciso c): ${currentQuestion < 10 ? questionsTema1.questions[currentQuestion].answers.c : ''}`}</h3>
        </>
    );
};

export default Tema1;