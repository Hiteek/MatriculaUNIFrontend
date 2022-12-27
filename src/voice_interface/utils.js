
export default function goToPage(page, history) {
  if (page.toLowerCase() === 'configuración') {
    history.push('Configuracion');
  }
  if (page.toLowerCase() === 'inicio') {
    history.push('Inicio');
  }
  if (page.toLowerCase() === 'cursos disponibles') {
    history.push('CursosDisponibles');
  }
  if (page.toLowerCase() === 'reglamento') {
    history.push('Reglamento');
  }
  if (page.toLowerCase() === 'matrícula') {
    history.push('Matricula');
  }
}

