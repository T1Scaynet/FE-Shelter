import castracion from '../assets/Donations/vacunas.webp';
import alimento from '../assets/Donations/alimento.jpg';
import alimento1 from '../assets/Donations/alimento2.jpg';
import medicamento from '../assets/Donations/vacunas2.webp';
import castracion1 from '../assets/Donations/castraciones2.jpg';
import transporte from '../assets/Donations/transporte.jpg';
import transporte1 from '../assets/Donations/transporte1.jpg';
import cobijas from '../assets/Donations/cobijas.jpg';

export const donations = [
  {
    id: 1,
    title: 'Apadrina una castración',
    category: 'Donacion',
    description: 'Con esta donacion ayudas a llevar a cabo la castración de una mascota del refugio',
    price: 100,
    image: castracion
  },
  {
    id: 2,
    title: 'Donación para alimentos',
    category: 'Donacion',
    description: 'Esta es una donacion para proveer a nuestras mascotas de alimentos',
    price: 1000,
    image: alimento
  },
  {
    id: 3,
    title: 'Donación para medicamentos',
    category: 'Donacion',
    description:
      'Esta es una donacion para comprar medicamentos para nuestras mascotas',
    price: 5000,
    image: medicamento
  },
  {
    id: 4,
    title: 'Apadrina Castraciones',
    category: 'Donacion',
    description:
      'Con esta donación ayudas a castrar a uno o más animales de nuestro refugio',
    price: 5000,
    image: castracion1
  },
  {
    id: 5,
    title: 'Donación para el transporte',
    category: 'Donacion',
    description:
      'Esta es una donacion para ayudar al transporte y la logística de animales de la calle al refugio',
    price: 1000,
    image: transporte
  },
  {
    id: 6,
    title: 'Donación para alimentos',
    category: 'Donacion',
    description:
      'Esta es una donacion para proveer a nuestras mascotas de alimentos por un tiempo prolongado',
    price: 7000,
    image: alimento1
  },
  {
    id: 7,
    title: 'Donación para transportes',
    category: 'Donacion',
    description:
      'Esta es una donacion para ayudar a transportar un mayor número de animales de la calle al refugio',
    price: 5000,
    image: transporte1
  },
  {
    id: 8,
    title: 'Donación para la compra de camas y cobijas',
    category: 'Donacion',
    description:
      'Esta donación ayuda a proporcionar camas, cobijas y otros elementos de confort a las mascotas del refugio',
    price: 1000,
    image: cobijas
  }
];
