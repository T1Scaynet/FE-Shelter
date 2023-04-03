export const inputText = [
  {
    title: 'Nombre',
    name: 'name',
    placeholder: 'Pluton',
    type: 'text',
  },
  {
    title: 'Vacuna',
    name: 'vaccine',
    placeholder: 'distemper rabia hepatitis',
    type: 'text',
  },

  {
    title: 'Enfermedad',
    name: 'disease',
    placeholder: 'Moquillo Diarrea parvovirus',
    type: 'text',
  },
  {
    title: 'Discapacidad',
    name: 'disability',
    placeholder: 'ceguera cojera perdida de extremidad',
    type: 'text',
  },
];

export const inputNumber = [
  {
    title: 'Edad',
    name: 'age',
    placeholder: '5',
    type: 'number',
  },
  {
    title: 'Peso',
    name: 'weight',
    placeholder: '25',
    type: 'number',
  },
];

export const inputSelect = [
  {
    title: 'Tamaño',
    name: 'size',
    type: 'select',
    options: ['¿Cuál es su tamaño?', 'Pequeño', 'Mediano', 'Grande'],
    values: ['', 'Pequeño', 'Mediano', 'Grande'],
  },
  {
    title: 'Tipo',
    name: 'type',
    type: 'select',

    options: ['¿Qué especie es?', 'Perro', 'Gato', 'Otro'],
    values: ['', 'Perro', 'Gato', 'Otro'],
  },
  {
    title: 'Género',
    name: 'genre',
    type: 'select',
    options: ['¿Cuál es su género?', 'Macho', 'Hembra'],
    values: ['', 'Macho', 'Hembra'],
  },
  {
    title: 'Estado',
    name: 'state',
    type: 'select',
    options: ['¿Está adoptado?', 'Adoptado', 'Disponible'],
    values: ['', 'Adoptado', 'Disponible'],
  },
  {
    title: 'Buena convivencia animal',
    name: 'coexistencePets',
    type: 'select',
    options: ['¿Puede convivir con otras mascotas?', 'Si', 'No'],
    values: ['', 'true', 'false'],
  },
  {
    title: 'Buena convivencia infantil',
    name: 'coexistenceKids',
    type: 'select',
    options: ['¿Puede convivir con niños?', 'Si', 'No'],
    values: ['', 'true', 'false'],
  },
];
