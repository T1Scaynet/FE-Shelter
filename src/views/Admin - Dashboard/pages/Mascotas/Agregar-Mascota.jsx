/* eslint-disable jsx-quotes */
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
  inputText,
  inputSelect,
  inputNumber,
} from '../../../../constants/createPetInputs';
import Breadcrumb from '../../components/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { useState } from 'react';
import { PostPet } from '../../../../state/features/pets/petSlice';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

const initialForm = {
  name: '',
  vaccine: '',
  disability: '',
  disease: '',
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
  galery: [],
};

const showModal = (res = 'success') => {
  if (res === 'success') {
    Swal.fire({
      icon: 'success',
      title: 'Mascota creada con éxito',
      timer: '3000',
    });
  } else if (res === 'errorform') {
    Swal.fire({
      icon: 'error',
      title: 'Ingrese los datos correctamente',
    });
  } else if (res === 'errorserver') {
    Swal.fire({
      icon: 'error',
      title: 'Ooops',
      text: 'Servidor no responde',
    });
  }
};

const validationsForm = (form) => {
  const noNumbersValidation = /^\D+$/;
  // const urlVal = new RegExp(/^(ftp|http|https):[^ "]+$/);
  const numberValidation = new RegExp('^[0-9]+$', 'i');

  const errors = {};

  // Name validations
  if (!form.name.trim()) {
    errors.name = 'Campo requerido';
  } else if (form.name.length > 20) {
    errors.name = '40 carácteres máximo';
  } else if (!noNumbersValidation.test(form.name)) {
    errors.name = 'Sólo letras';
  }

  // image url validation

  // if (!urlVal.test(form.image)) {
  //   errors.image = 'Debe ingresar una URL válida';
  // }

  if (!form.vaccine.trim()) {
    errors.vaccine = 'Campo requerido';
  } else if (form.vaccine.trim().length > 50) {
    errors.vaccine = 'Máximo 50 carácteres';
  }

  if (!form.disability.trim().length > 150) {
    errors.disability = 'Máximo 150 carácteres';
  }

  if (!form.disease.trim().length > 150) {
    errors.disability = 'Máximo 150 carácteres';
  }

  // age validation

  if (!form.age) {
    errors.age = 'Campo requerido ';
  } else if (!numberValidation.test(form.age)) {
    errors.age = 'Sólo números';
  } else if (form.age < 1 || form.age > 200) {
    errors.age = 'Min 1 - Max 200';
  }

  // weight validation

  if (!form.weight) {
    errors.weight = 'Campo requerido ';
  } else if (!numberValidation.test(form.weight)) {
    errors.weight = 'Sólo números';
  } else if (form.weight > 200) {
    errors.weight = 'Máximo 200';
  }

  // size validation
  if (!form.size) {
    errors.size = 'Campo requerido';
  }
  // else if (!numberValidation.test(form.size)) {
  //   errors.size = 'Debe ingresar un número';
  // } else if (form.size < 15 || form.size > 110) {
  //   errors.size = 'El valor de ser entre 15 y 110 cm ';
  // }

  // genre validation

  if (!form.genre) {
    errors.genre = 'Campo requerido';
  }

  // castrated validation

  // if (!form.castrated) {
  //   errors.castrated = 'Campo requerido';
  // }

  // coexistencePets validation

  if (!form.coexistencePets) {
    errors.coexistencePets = 'Campo requerido';
  }

  // coexistenceKids validation

  if (!form.coexistenceKids) {
    errors.coexistenceKids = 'Campo requerido';
  }

  // Type validation

  if (!form.type) {
    errors.type = 'Campo requerido';
  }

  // State validation

  if (!form.state) {
    errors.state = 'Campo  requerido';
  }

  // History validation

  if (!form.history) {
    errors.history = 'Campo requerido';
  } else if (form.history.length > 150) {
    errors.history = 'Máximo 150 carácteres';
  } else if (!noNumbersValidation.test(form.history)) {
    errors.history = 'Sólo letras';
  }

  return errors;
};

export const AgregarMascota = () => {
  const dispatch = useDispatch();
  const [loadinng, setLoadinng] = useState('');

  const handleSubmit = (pet, actions) => {
    dispatch(PostPet(pet)).then((res) => {
      if (res.status === 200 || res.status === 201) {
        // window.alert('Enviado con éxito');
        showModal();
        console.log(res);
        actions.resetForm()
      } else {
        // window.alert('Error al enviar');
        Swal.fire({
          icon: 'error',
          title: 'Ooops',
          text: res.response.data.msg,
        });
      }
    });
  };

  const handleDrop = (files) => {
    const uploaders = files.map((file) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('tags', 'codeinfuse, medium, gist');
      formData.append('upload_preset', 'Refugio');
      formData.append('api_key', '612164242237861');
      formData.append('timestamp', (Date.now() / 1000) | 0);
      setLoadinng('true');
      return axios
        .post(
          'https://api.cloudinary.com/v1_1/drccfecwy/image/upload',
          formData,
          {
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
          },
        )
        .then((response) => {
          const data = response.data;
          const fileURL = data.secure_url;
          const specificArrayInObject = initialForm.galery;
          specificArrayInObject.push(fileURL);
          // console.log('array que envio', specificArrayInObject);
          // const newObj = { ...uploadedImages, specificArrayInObject };
          // setUploadedImages(newObj);
          // console.log(uploadedImages);
        });
    });
    axios.all(uploaders).then(() => {
      setLoadinng('false');
    });
  };

  const imagePreview = (values) => {
    if (loadinng === 'true') {
      return <h3>Cargando imagenes...</h3>;
    }
    if (loadinng === 'false') {
      return (
        <h3 className="flex">
          {values.galery.length <= 0
            ? 'No hay imagenes'
            : values.galery.map((item, index) => (
                <div
                  className="relative w-[30%] overflow-hidden rounded-sm"
                  key={index}
                >
                  <img
                    alt="imagenes subidas"
                    className="h-40 w-full bg-cover "
                    src={item}
                  />
                </div>
              ))}
        </h3>
      );
    }
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Agregar Mascota" />
      <div className="flex min-h-full items-center justify-center bg-whiter p-6">
        <Formik
          initialValues={initialForm}
          validate={validationsForm}
          onSubmit={handleSubmit}
        >
          {(props) => {
            // console.log(props);
            // console.log(props.values);
            const validateModal = (errors) => {
              if (Object.keys(errors).length > 0) {
                showModal('errorform');
              }
            };
            return (
              <Form className="w-[750px] bg-[#fff] p-5 shadow ">
                <h3 className="pb-1 text-xl uppercase text-[#333]">
                  Detalles de mascota
                </h3>
                <div className="flex flex-wrap gap-6">
                  {/* LEFT SIDE */}
                  <div className="col flex-shrink-1 min-w-0 max-w-full flex-1">
                    {inputText?.map((input, i) => (
                      <div className="mx-0 my-6" key={i}>
                        <span className="bold mb-2 font-semibold">
                          {' '}
                          {input.title} :
                        </span>
                        <ErrorMessage
                          name={input.name}
                          component={() => (
                            <span className="ml-4 text-xs text-danger">
                              {props.errors[input.name]}
                            </span>
                          )}
                        />
                        <Field
                          type="text"
                          name={input.name}
                          placeholder={input.placeholder}
                          className="w-full border border-solid border-[#ccc]  px-4 py-2 text-sm normal-case outline-none transition-all duration-200 ease-linear focus:border-[#000]"
                        />
                      </div>
                    ))}

                    <div className="mx-0 my-6">
                      <span className="mb-2 font-semibold"> Castrado :</span>
                      <Field
                        name="castrated"
                        as="select"
                        className="w-full border border-solid border-[#ccc] px-4 py-2 text-sm normal-case outline-none transition-all duration-200 ease-linear focus:border-[#000]"
                      >
                        <option value="">¿Está castrado?</option>
                        <option value="true">Si</option>
                        <option value="false">No</option>
                      </Field>
                    </div>

                    <div className="mx-0 mt-4 flex gap-4">
                      {inputNumber?.map((el) => (
                        <div className="inputBox" key={el.name}>
                          <span className="mb-2 font-semibold">
                            {el.title} :
                          </span>
                          <ErrorMessage
                            name={el.name}
                            component={() => (
                              <span className="ml-4 text-xs text-danger">
                                {props.errors[el.name]}
                              </span>
                            )}
                          />
                          <Field
                            name={el.name}
                            type="number"
                            placeholder=""
                            className="w-full border border-solid border-[#ccc] px-4 py-2 text-sm normal-case outline-none transition-all duration-200 ease-linear focus:border-[#000]"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="col flex-shrink-1 min-w-0 max-w-full flex-1">
                    {inputSelect?.map((input) => (
                      <div className="mx-0 my-6" key={input.name}>
                        <span className="mb-2 font-semibold">
                          {input.title} :
                        </span>
                        <ErrorMessage
                          name={input.name}
                          component={() => (
                            <span className="ml-4 text-xs text-danger">
                              {props.errors[input.name]}
                            </span>
                          )}
                        />
                        <Field
                          name={input.name}
                          as={input.type}
                          className="w-full border border-solid border-[#ccc] px-4 py-2 text-sm normal-case outline-none transition-all duration-200 ease-linear focus:border-[#000]"
                        >
                          {input.options?.map((op, i) => (
                            <option value={input.values[i]} key={i}>
                              {op}
                            </option>
                          ))}
                        </Field>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="">
                  <span className="mb-2 font-semibold">Historia: </span>
                  <ErrorMessage
                    name="history"
                    component={() => (
                      <span className="ml-4 text-xs text-danger">
                        {props.errors.history}
                      </span>
                    )}
                  />
                  <Field
                    as="textarea"
                    className="w-full resize-none border border-solid border-[#ccc] px-4 py-2 text-sm normal-case outline-none transition-all duration-200 ease-linear focus:border-[#000]"
                    name="history"
                  />
                </div>

                <div className="mt-4 border border-dashed border-[#ccc] p-2">
                  <h3 className="mb-2 font-semibold">Imágenes :</h3>
                  <Dropzone
                    name="galery"
                    onDrop={handleDrop}
                    // onChange={(e) => handleChange(e.target.value)}
                    // onBlur={handleBlur}
                    // value={form.galery}
                  >
                    {({ getRootProps, getInputProps }) => (
                      <section className=" cursor-pointer">
                        <div {...getRootProps()}>
                          <input {...getInputProps()} />
                          <img
                            src="https://icongr.am/fontawesome/folder-open.svg?size=80&color=currentColor"
                            alt="img de carpeta"
                          />
                          <p className="text-center">
                            Clickea para seleccionar tus imagenes
                          </p>
                        </div>
                      </section>
                    )}
                  </Dropzone>
                  {imagePreview(props.values)}
                </div>
                <div className="mt-6 flex gap-10">
                  <input
                    type="reset"
                    value="Descartar"
                    className="submit-btn text- mt-1 w-full cursor-pointer bg-[#27ae60] p-3 text-[#fff] outline-none transition-all duration-200 ease-linear hover:bg-[#2ecc71]"
                  />

                  <input
                    type="submit"
                    onClick={() => validateModal(props.errors)}
                    value="Guardar"
                    className="submit-btn text- mt-1 w-full cursor-pointer bg-[#27ae60] p-3 text-[#fff] outline-none transition-all duration-200 ease-linear hover:bg-[#2ecc71]"
                  />
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </DefaultLayout>
  );
};
