
    import speak from '../../Utils/TextToSpeech/TextToSpeech';
    import { useEffect, useState } from 'react';
    import { tutorialQuiz } from '../../Utils/TextToSpeech/tutorialsMessages';
    import { useNavigate } from 'react-router-dom';
    import questionsTema1 from '../../Utils/Temas/Tema1';



    const Tema1 = () => {
        //Constants
        const navigate = useNavigate();
        const [currentQuestion, setCurrentQuestion] = useState<number>(0);
        const tittle:String = 'Respuestas';
        let updatedCurrentQuestion:number = 0;
        let currentScore = 0;
        //Voice Recognition
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
        recognition.lang = 'es-MX';

        recognition.onstart = () => {
        };

        recognition.onresult = (event: any) => {
            const transcript = event.results[0][0].transcript;
            console.log("Recognition: - " + transcript);
            if (event.results[0].isFinal) {
                //    setVoiceString(transcript);
                console.log("handler selected option: " + transcript)
                if (transcript.toLowerCase() === questionsTema1.questions[updatedCurrentQuestion].correctAnswer.toLowerCase()) {
                    currentScore = currentScore + 1;
                    setCurrentQuestion(prevQuestion => prevQuestion + 1);
                    console.log({ 'current score': currentScore, 'current question': currentQuestion, 'transcript': transcript.toLowerCase(), 'correct answer': questionsTema1.questions[currentQuestion].correctAnswer.toLowerCase() })
                    speak("La respuesta es correcta")
                    localStorage.setItem('tema1', currentScore.toString());
                } else {
                    setCurrentQuestion(prevQuestion => prevQuestion + 1);
                    console.log({ 'current score': currentScore, 'current question': currentQuestion, 'transcript': transcript.toLowerCase(), 'correct answer': questionsTema1.questions[currentQuestion].correctAnswer.toLowerCase() })
                    speak("La respuesta es incorrecta")
                }
                updatedCurrentQuestion = updatedCurrentQuestion + 1;
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
                speak(tutorialQuiz);
            }
            if (event.key === ' ') {
                voiceHandler();
            }
            if (event.key === '1') {
                speak(questionsTema1.information);
            }
            if (event.key === '2') {
                speak(questionsTema1.questions[currentQuestion].answers_tittle);
            }
            if (event.key === '3') {
                speak("inciso a" + questionsTema1.questions[currentQuestion].answers.a + ", inciso b" + questionsTema1.questions[currentQuestion].answers.b + ", inciso c" + questionsTema1.questions[currentQuestion].answers.c);

            }
            //      if (event.key === 'Enter') {
            //          handlerSelectedOption();
            //      }
        };

        //Functions

        //useEffect Hooks
        useEffect(() => {
            localStorage.setItem('tema1', '0');
            window.addEventListener('keydown', handleKeyPress);
            return () => {
                window.removeEventListener('keydown', handleKeyPress);
            };
        }, []);

        useEffect(() => {
            console.log({ 'current score': currentScore, 'current question': currentQuestion,   'correct answer': questionsTema1.questions[currentQuestion].correctAnswer.toLowerCase() })
            if(currentQuestion === +questionsTema1.total){
                navigate('/');
            }
        }, [currentQuestion]);

        return (
            <>
                <h1 className='tittle'> {questionsTema1.tittle}</h1>
                <article className='information'> {questionsTema1.information}</article>
                <h2 className='question'>{questionsTema1.questions[currentQuestion].answers_tittle}</h2>
                <h2 className='answers_tittle' > {tittle} </h2>
                <h3 className='answers'>{'Inciso a): ' + questionsTema1.questions[currentQuestion].answers.a}</h3>
                <h3 className='answers'>{'Inciso b): ' + questionsTema1.questions[currentQuestion].answers.b}</h3>
                <h3 className='answers'>{'Inciso c): ' + questionsTema1.questions[currentQuestion].answers.c}</h3>

            </>
        )
    };

    export default Tema1;