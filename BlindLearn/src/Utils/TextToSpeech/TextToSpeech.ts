const msg = new SpeechSynthesisUtterance();
const voices = window.speechSynthesis.getVoices();



const speak = (message:string) => {
    msg.lang = 'es';
    msg.voice = voices[10];
    msg.volume = 1; // From 0 to 1
    msg.rate = 1; // From 0.1 to 10
    msg.pitch = 0; // From 0 to 2
    msg.text = message;
  
    speechSynthesis.speak(msg);
  };

export default speak;