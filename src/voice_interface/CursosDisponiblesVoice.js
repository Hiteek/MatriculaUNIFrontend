
import { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import goToPage from './utils';
import { useHistory } from 'react-router-dom';
import Speaker from './Speaker';

export default function CursosDisponiblesVoice(courses) {
  const history = useHistory();

  const commands = [
    {
      command: 'ir a *',
      callback:(page) => goToPage(page, history)
    },
    {
      command: 'cursos',
      callback:() => listAllCourses()
    }
  ]

  const listAllCourses = () => {
    console.log(courses);
    let msg = '';

    for(let i = 0; i < courses.length; i++) {
      msg += 'Curso ' + courses[i]._id + ', con ';

      if(courses[i].credits == 1) msg += ' un crédito.\n\n';
      else msg += courses[i].credits + ' créditos.\n\n';
    }

    Speaker(msg);
  };

  const { transcript } = useSpeechRecognition({ commands });
  
  useEffect(() => {
    SpeechRecognition.startListening({continuous:true, language: 'es-ES'});
    console.log({transcript});
  });
}

