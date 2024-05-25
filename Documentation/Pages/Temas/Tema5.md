# Tema1 Component Documentation

## Overview
The `Tema1` component is a React component designed for a quiz application that utilizes speech recognition to accept answers and navigate through questions. It integrates text-to-speech functionality to provide feedback and instructions to the user.

## Dependencies
- React (`useEffect`, `useState`, `useRef`)
- Speech Recognition API
- Text-to-Speech utility from `../../Utils/TextToSpeech/TextToSpeech`
- Question data from `../../Utils/Temas/Tema5`
- Navigation utility from `react-router-dom`

## Functionality
### Speech Recognition
The component uses the Web Speech API's SpeechRecognition interface to listen to user's spoken input in Spanish (`es-MX`). It handles the start and end of speech recognition sessions and processes the results to check against the correct answers.

### Text-to-Speech Feedback
Upon determining whether the spoken answer is correct or incorrect, the component uses a text-to-speech utility to provide auditory feedback to the user.

### Navigation and Scoring
The component tracks the user's current question and score. It updates the score based on correct answers and navigates back to the home route once all questions are answered.

### Keyboard Interaction
Users can interact with the quiz using specific keyboard keys:
- `Escape`: Triggers a speech output of general tutorial or quiz instructions.
- `Space`: Initiates the speech recognition to start listening for the user's answer.
- `1`, `2`, `3`: Triggers speech outputs for different parts of the current question (general info, question title, and answers).

## Key Methods and Attributes
- `voiceHandler`: Starts the speech recognition.
- `handleKeyPress`: Handles different actions based on the key pressed by the user.
- `currentQuestion`, `currentScore`: State variables to track the progress and score of the quiz.
- `currentQuestionRef`: A ref object to hold the current question index for stable reference across re-renders.

## Usage Example
```jsx
import Tema1 from './path/to/Tema1';

function App() {
  return <Tema1 />;
}
```

## Edge Cases and Assumptions
- Assumes that the speech recognition API is available in the user's browser.
- Assumes that the input data (questions and answers) are properly formatted and localized in Spanish.
- Handles cases where the user might press keys that are not mapped to any specific functionality.

## External References
- Web Speech API documentation: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)
- React documentation: [React Official Website](https://reactjs.org/)

