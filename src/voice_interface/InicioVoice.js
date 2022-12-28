
import { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import goToPage from './utils';
import { useHistory } from 'react-router-dom';
import Speaker from './Speaker';

export default function InicioVoice() {
  const history = useHistory();

  const commands = [
    {
      command: 'ir a *',
      callback:(page) => goToPage(page, history)
    },
    {
      command: 'instrucciones',
      callback: () => Speaker('La matrícula cuenta con las siguientes secciones: Inicio, Matrícula, Cursos Disponibles, Configuración y Reglamento. Si quieres dirigirte a alguna de ellas, di. Ir a. Más. La sección que desee')
    },
  ]

  // const { transcript, resetTranscript } = useSpeechRecognition({ commands });
  const { transcript } = useSpeechRecognition({ commands });
  
  useEffect(() => {
    SpeechRecognition.startListening({continuous:true, language: 'es-ES'});
    console.log({transcript});
  });
}

