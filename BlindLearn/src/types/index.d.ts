export {};

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any
    mozSpeechRecognition: any
    msSpeechRecognition: any
    textContent:any
  }
}
