
import { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import goToPage from './utils';
import { useHistory } from 'react-router-dom';
import Speaker from './Speaker';

export default function MatriculaVoice(Enrollment) {
  const history = useHistory();

  const commands = [
    {
      command: 'ir a *',
      callback:(page) => goToPage(page, history)
    },
    {
      command: 'matricular *',
      callback: (index) => matricular(index)
    }
  ]

  const matricular = (index) => {
    if(index == 'cero') index = 0
    if(index == 'uno') index = 1
    if(index == 'dos') index = 2
    const enrolled = Enrollment(index);

    if(enrolled) Speaker('Curso ' + index + ' matriculado');
    else Speaker('Curso ' + index + ' desmatriculado');
  };

  const { transcript } = useSpeechRecognition({ commands });
  
  useEffect(() => {
    SpeechRecognition.startListening({continuous:true, language: 'es-ES'});
    console.log({transcript});
  });
}

