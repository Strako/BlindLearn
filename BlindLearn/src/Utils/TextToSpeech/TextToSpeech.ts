function speak(message: string): void {
  // Define the maximum length for each chunk
  const maxLength = 100;
  // Array to store message chunks
  const chunks: string[] = [];
  // Index to keep track of the current position in the message
  let currentIndex = 0;

  // Loop through the message
  while (currentIndex < message.length) {
      // Find the end index for the current chunk
      let endIndex = currentIndex + maxLength;
      // If the endIndex is beyond the message length, set it to the message length
      if (endIndex > message.length) {
          endIndex = message.length;
      } else {
          // Find the nearest space before the endIndex
          while (endIndex > currentIndex && message.charAt(endIndex) !== ' ') {
              endIndex--;
          }
          // If no space is found, use the endIndex as is
          if (endIndex === currentIndex) {
              endIndex = currentIndex + maxLength;
          }
      }
      // Push the current chunk to the chunks array
      chunks.push(message.substring(currentIndex, endIndex));
      // Update the currentIndex for the next iteration
      currentIndex = endIndex + 1; // Move past the space
  }
  // Get the desired voice
  const voices = window.speechSynthesis.getVoices();
  const desiredVoice = voices.find(voice => voice.name === "Google US English");

  // Function to speak each chunk sequentially
  function speakChunk(index: number): void {
    if (index < chunks.length) {
      const msg = new SpeechSynthesisUtterance(chunks[index]);
      msg.lang = 'es';
      msg.voice = desiredVoice || null;
      msg.volume = 1; // From 0 to 1
      msg.rate = 1; // From 0.1 to 10
      msg.pitch = 0; // From 0 to 2
      msg.text = chunks[index]; // Use the current chunk to speak

      msg.onend = () => {
        // Speak the next chunk when the current one ends
        speakChunk(index + 1);
      };
      // Cancel speech before speaking each chunk
      window.speechSynthesis.cancel();
      speechSynthesis.speak(msg);
    }
  }

  // Start speaking the first chunk
  speakChunk(0);
}


export default speak;