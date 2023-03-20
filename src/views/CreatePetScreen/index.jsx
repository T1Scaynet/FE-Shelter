/* eslint-disable jsx-quotes */
/* eslint-disable quotes */
/* eslint-disable react/self-closing-comp */

import { useForm } from '../../hooks/useForm';
import puntito from '../../assets/PetsList/PuntitoRosa.svg';
import './styles.css';
import { Link } from 'react-router-dom';

const initialForm = {
  name: '',
  image: '',
  vaccine: '',
  disability: '',
  age: '',
  size: '',
  weight: '',
  genre: '',
  castrated: '',
  coexistencePets: '',
  coexistenceKids: '',
  type: '',
  state: '',
  history: '',
  galery: []
};

const validationsForm = (form) => {
  const onlyLettersVal = new RegExp('^[A-Z]+$', 'i');
  const urlVal = new RegExp(/^(ftp|http|https):[^ "]+$/);
  const numberValidation = new RegExp('^[0-9]+$', 'i');

  let errors = {};

  // Name validations
  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido";
  } else if (form.name.length < 3 || form.name.length > 20) {
    errors.name = 'Entre 3 y 20 carácteres';
  } else if (!onlyLettersVal.test(form.name)) {
    errors.name = "El campo 'Nombre' solo acepta letras";
  }

  // image url validation

  if (!urlVal.test(form.image)) {
    errors.image = 'Debe ingresar una URL válida';
  }

  if (!form.vaccine.trim()) {
    errors.vaccine = "El campo 'Vacunas' es requerido";
  }

  if (!form.disability.trim()) {
    errors.disability = "El campo 'Discapacidad' es requerido";
  }

  // age validation

  if (!form.age) {
    errors.age = "El campo 'Edad' es requerido ";
  } else if (!numberValidation.test(form.age)) {
    errors.age = 'Debe ingresar un número';
  }

  // weight validation

  if (!form.weight) {
    errors.weight = "El campo 'Peso' es requerido ";
  } else if (!numberValidation.test(form.weight)) {
    errors.weight = 'Debe ingresar un número';
  } else if (form.weight < 1 || form.weight > 90) {
    errors.weight = 'El valor de ser entre 1 y 90 ';
  }

  // size validation
  // if (!form.size) {
  //   errors.size = "El campo 'Tamaño' es requerido";
  // } else if (!numberValidation.test(form.size)) {
  //   errors.size = 'Debe ingresar un número';
  // } else if (form.size < 15 || form.size > 110) {
  //   errors.size = 'El valor de ser entre 15 y 110 cm ';
  // }

  // genre validation

  if (!form.genre) {
    errors.genre = "El campo 'Género' es requerido";
  }

  // castrated validation

  if (!form.castrated) {
    errors.castrated = "El campo 'Castrado' es requerido";
  }

  // coexistencePets validation

  if (!form.coexistencePets) {
    errors.coexistencePets = 'El campo es requerido';
  }

  // coexistenceKids validation

  if (!form.coexistenceKids) {
    errors.coexistenceKids = 'El campo es requerido';
  }

  // Type validation

  if (!form.type) {
    errors.type = "El campo 'Tipo' es requerido";
  }

  // State validation

  if (!form.state) {
    errors.state = "El campo 'Estado' es requerido";
  }

  // History validation

  if (!form.history) {
    errors.history = "El campo 'Historia' es requerido";
  } else if (form.history.length > 150) {
    errors.history = 'No se permiten mas de 150 carácteres';
  }

  return errors;
};

export const CreatePetScreen = () => {
  const {
    form,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
    // loading,
    // response,
  } = useForm(initialForm, validationsForm);

  return (
    <>
      <div className="mt-14 pl-12">
        <span className="flex justify-start space-x-2">
          <p>Inicio</p>
          <img
            src={puntito}
            alt="Imagen de un punto de separación color rosa"
          />
          <p>Adoptar</p>
        </span>
      </div>
      <main className="mt-14 min-h-full w-full flex items-center justify-center flex-col">
        <div className="max-w-[850px] w-full bg-[hsl(258,58%,59%)] py-6 px-8 rounded-md">
          <h1 className="text-center my-4 font-extrabold  text-2xl text-white">
            Registrar una mascota
          </h1>
          <div className="flex flex-col items-center justify-center gap-3">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap justify-between my-4 mx-0">
                {/* NAME */}
                <div className="createPetInputBox">
                  <span className="inputTitle">Nombre</span>
                  {errors.name && (
                    <span className="errorMsg">{errors.name} *</span>
                  )}
                  <input
                    className="text"
                    type="text"
                    name="name"
                    placeholder="Ingresa un nombre"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.name}
                    required
                  />
                </div>
                {/* IMAGE */}
                <div className="createPetInputBox">
                  <span className="inputTitle">Imagen</span>
                  {errors.image && (
                    <span className="errorMsg">{errors.image} *</span>
                  )}
                  <input
                    className="text"
                    type="text"
                    name="image"
                    placeholder="Ingresa una imagen"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.image}
                    required
                  />
                </div>
                {/* VACUNAS */}
                <div className="createPetInputBox">
                  <span className="inputTitle">Vacunas</span>
                  {errors.vaccine && (
                    <span className="errorMsg">{errors.vaccine} *</span>
                  )}
                  <input
                    className="text"
                    type="text"
                    name="vaccine"
                    placeholder="Ingresa una vacuna"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.vaccine}
                    required
                  />
                </div>
                {/* DISCAPACIDAD */}
                <div className="createPetInputBox">
                  <span className="inputTitle">Discapacidad</span>
                  {errors.disability && (
                    <span className="errorMsg">{errors.disability} *</span>
                  )}
                  <input
                    className="text"
                    type="text"
                    name="disability"
                    placeholder="Ingresa una discapacidad"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.disability}
                    required
                  />
                </div>
                {/* EDAD */}
                <div className="createPetInputBox">
                  <span className="inputTitle">Edad</span>
                  {errors.age && (
                    <span className="errorMsg">{errors.age} *</span>
                  )}
                  <input
                    className="text"
                    type="text"
                    name="age"
                    placeholder="Ingresa edad"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.age}
                    required
                  />
                </div>
                {/* TAMAÑO */}
                <div className="createPetInputBox">
                  <span className="inputTitle">Tamaño</span>
                  {errors.size && (
                    <span className="errorMsg">{errors.size} *</span>
                  )}
                  {/* <input
                    className="text"
                    type="text"
                    name="size"
                    placeholder="Ingresar tamaño"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.size}
                    required
                  /> */}
                  <select
                    name="size"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">- - -</option>
                    <option value="Chico">Chico</option>
                    <option value="Mediano">Mediano</option>
                    <option value="Grande">Grande</option>
                  </select>
                </div>
                {/* PESO */}
                <div className="createPetInputBox">
                  <span className="inputTitle">Peso</span>
                  {errors.weight && (
                    <span className="errorMsg">{errors.weight} *</span>
                  )}
                  <input
                    className="text"
                    type="text"
                    name="weight"
                    placeholder="Ingresar tamaño"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.weight}
                    required
                  />
                </div>
                {/* GÉNERO */}
                <div className="createPetInputBox">
                  <span className="inputTitle">Género</span>
                  {errors.genre && (
                    <span className="errorMsg">{errors.genre} *</span>
                  )}
                  <select
                    name="genre"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">- - -</option>
                    <option value="Macho">Macho</option>
                    <option value="Hembra">Hembra</option>
                  </select>
                </div>
                {/* TIPO */}
                <div className="createPetInputBox">
                  <span className="inputTitle">Tipo</span>
                  {errors.type && (
                    <span className="errorMsg">{errors.type} *</span>
                  )}

                  <select
                    name="type"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">- - -</option>
                    <option value="dog">Perro</option>
                    <option value="cat">Gato</option>
                    <option value="other">Otro...</option>
                  </select>
                </div>
                {/* ESTADO */}
                <div className="createPetInputBox">
                  <span className="inpuPequeñotTitle">Estado</span>
                  {errors.state && (
                    <span className="errorMsg">{errors.state} *</span>
                  )}
                  <select
                    name="state"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">- - -</option>
                    <option value="adopted">Adoptado</option>
                    <option value="available">Disponible</option>
                    <option value="fosterhome">Hogar adoptivo</option>
                  </select>
                </div>
                {/* CASTRADO */}
                <div className="createPetInputBox">
                  <span className="inputTitle">Castrado</span>
                  {errors.castrated && (
                    <span className="errorMsg">{errors.castrated}*</span>
                  )}
                  <div className="radioBtns">
                    <input
                      className="inputCheckbox"
                      type="radio"
                      id="isCastrated"
                      name="castrated"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value="true"
                    />
                    <label htmlFor="isCastrated">Si</label>
                    <input
                      className="inputCheckbox"
                      type="radio"
                      id="isNotCastrated"
                      name="castrated"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value="false"
                    />
                    <label htmlFor="isNotCastrated">No</label>
                  </div>
                </div>

                {/* CONVIVENCIA CON OTRAS MASCOTAS */}
                <div className="createPetInputBox">
                  <span className="inputTitle">
                    Buena convivencia con otras mascotas
                  </span>
                  {errors.coexistencePets && (
                    <span className="errorMsg">{errors.coexistencePets} *</span>
                  )}
                  <div className="radioBtns">
                    <input
                      className="inputCheckbox"
                      type="radio"
                      id="isFrienly"
                      name="coexistencePets"
                      value="true"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <label htmlFor="isFrienly">Si</label>
                    <input
                      className="inputCheckbox"
                      type="radio"
                      id="isNotFriendly"
                      name="coexistencePets"
                      value="false"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <label htmlFor="isNotFriendly">No</label>
                  </div>
                </div>

                {/* CONVIVENCIA CON NIÑOS PEQUEÑOS */}
                <div className="createPetInputBox">
                  <span className="inputTitle">
                    Buena convivencia con niños
                  </span>
                  {errors.coexistenceKids && (
                    <span className="errorMsg">{errors.coexistenceKids} *</span>
                  )}
                  <div className="radioBtns">
                    <input
                      className="inputCheckbox"
                      type="radio"
                      id="isReallyFrienly"
                      name="coexistenceKids"
                      value="true"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <label htmlFor="isReallyFrienly">Si</label>
                    <input
                      className="inputCheckbox"
                      type="radio"
                      id="isNotReallyFrienly"
                      name="coexistenceKids"
                      value="false"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <label htmlFor="isNotReallyFrienly">No</label>
                  </div>
                </div>
              </div>
              {/* HISTORIA */}
              <div className="createPetInputBox">
                <span className="inputTitle">Historia</span>
                {errors.history && (
                  <span className="errorMsg">{errors.history} *</span>
                )}
                <textarea
                  className="petHistory"
                  name="history"
                  id=""
                  style={{ resize: 'none' }}
                  placeholder="Historia de la mascota..."
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="btn_container">
                <Link to="/">
                  <div>
                    <input type="submit" value="Volver" />
                  </div>
                </Link>

                <div>
                  <input type="submit" value="Crear" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};
