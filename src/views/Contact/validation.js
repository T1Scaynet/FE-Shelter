/* eslint-disable no-useless-escape */
export default function validation ({ name, lastname, email, message, phone }) {
  // eslint-disable-next-line prefer-const
  let error = {};
  const phoneRegExpression = /^[1-9][0-9]{2}[1-9][0-9]{6}$/;
  const emailRegExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

  // Phone
  if (!phone) {
    error.phone = 'Rellene con su teléfono *';
  };

  if (!phoneRegExpression.test(phone)) {
    error.phone = 'El número es invalido *';
  };

  // Email
  if (!email) {
    error.email = 'Rellene con su email *';
  };

  if (!emailRegExpression.test(email)) {
    error.email = 'El email es invalido *';
  };

  // Name
  if (!name) {
    error.name = 'Rellene con su nombre *';
  }

  if (name.length > 100) {
    error.name = 'El nombre es demasiado largo *';
  }

  // Lastname
  if (!lastname) {
    error.lastname = 'Rellene con su apellido *';
  }

  if (lastname.length > 100) {
    error.lastname = 'El apellido es demasiado largo *';
  }

  // message
  if (!message) {
    error.message = 'Rellena con tu mensaje *';
  }

  if (message.length > 1500) {
    error.message = 'El mensaje es demasiado largo *';
  }

  return error;
};
