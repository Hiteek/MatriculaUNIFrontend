
import { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import goToPage from './utils';
import { useHistory } from 'react-router-dom';
import Speaker from './Speaker';

export default function MatriculaVoice(Enrollment, courses) {
  const history = useHistory();

  const commands = [
    {
      command: 'ir a *',
      callback:(page) => goToPage(page, history)
    },
    {
      command: 'matricular *',
      callback: (name) => enrollCourse(name)
    }
  ]

  const enrollCourse = (name) => {
    const index = findIndexCourse(name);
    if(index == -1) return;
    const enrolled = Enrollment(index);

    if(enrolled) Speaker(name + ' matriculado');
    else Speaker(name + ' desmatriculado');
  };

  function eliminarDiacriticos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
  }

  const findIndexCourse = (name) => {
    for(let i = 0; i < courses.length; i++)
      if(eliminarDiacriticos(courses[i]._id.toLowerCase()) === eliminarDiacriticos(name.toLowerCase())) return i;
    return -1;
  };

  const { transcript } = useSpeechRecognition({ commands });
  
  useEffect(() => {
    SpeechRecognition.startListening({continuous:true, language: 'es-ES'});
    console.log({transcript});
  });
}

