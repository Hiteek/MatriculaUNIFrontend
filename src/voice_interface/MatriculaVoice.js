
import { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import goToPage from './utils';
import { useHistory } from 'react-router-dom';

export default function MatriculaVoice() {
  const history = useHistory();

  const commands = [
    {
      command: 'ir a *',
      callback:(page) => goToPage(page, history)
    },
  ]

  const { transcript } = useSpeechRecognition({ commands });
  
  useEffect(() => {
    SpeechRecognition.startListening({continuous:true, language: 'es-ES'});
    console.log({transcript});
  });
}

