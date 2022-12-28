
export default function Speaker(text) {
  const synth = window.speechSynthesis;
  const voices = synth.getVoices();

  const msg = new SpeechSynthesisUtterance(text)
  msg.lang = 'es-MX';
  //msg.voice = voices[66]

  synth.speak(msg);
}

