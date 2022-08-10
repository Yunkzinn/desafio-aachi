const Projects =  [
  { 
    name: 'Desenvolvedor Front-End',
    deadline: '2 Semanas Atrás',
    progress: 90,
    color: 'pink',
  },
  {        
    name: 'Desenvolvedor Back-end',
    deadline: '1 Semana Atrás',
    progress: 70,
    color: 'success'
  },
  {
    name: 'Desenvolvedor Full-Stack',
    deadline: '1 Mês Atrás',
    progress: 50,
    color: 'info'
  },
  {
    name: 'Auxiliar Administrativo',
    deadline: '2 Meses Atrás',
    progress: 30,
    color: 'teal'
  },
  {
    name: 'Auxiliar de Marketing',
    deadline: '3 Meses Atrás',
    progress: 15,
    color: 'grey'
  },

];

const getProject = (limit) => {
  return (limit) ? Projects.slice(0, limit) : Projects;
};


export {
  Projects,
  getProject
};