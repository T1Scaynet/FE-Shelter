import { form, check } from '../../constants/inputsForm';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { PostForm } from '../../state/features/form/formSlice';
import { useDispatch, useSelector } from 'react-redux';

export const AdoptionForm = () => {
  const dispatch = useDispatch();
  const selectedPet = useSelector((state) => state.petDetails);
  // console.log({ selectedPet });
  return (
    <div className='w-full h-full flex flex-col justify-center mt-4'>
      <h1 className=' h-[10%] text-center font-bold text-3xl'>Completá los datos para que nos contactemos con los pasos a seguir</h1>
      <div>
        <Formik
          initialValues={{
            name: '',
            lastName: '',
            address: '',
            email: '',
            phone: '',
            adoption: '',
            age: 0,
            familyMembers: 0,
            otherPets: '',
            garden: '',
            children: ''
          }}
          validate={(dataSent) => {
            const error = {};
            if (!dataSent.name) {
              error.name = 'Por favor ingrese un nombre';
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(dataSent.name)) {
              error.name = 'El nombre solo puede contener letras y espacios';
            }
            if (!dataSent.lastName) {
              error.lastName = 'Por favor ingrese un apellido';
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(dataSent.lastName)) {
              error.lastName = 'El apellido solo puede contener letras y espacios';
            }
            if (!dataSent.address) {
              error.address = 'Por favor ingrese una dirección';
            }
            if (!dataSent.email) {
              error.email = 'Por favor ingrese un correo electronico';
            } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(dataSent.email)) {
              error.email = 'El correo solo puede contener letras, números, puntos, guiones y guiones bajos';
            }
            if (!dataSent.phone) {
              error.phone = 'Por favor ingrese un número de telefono';
            } else if (dataSent.phone.length < 10) {
              error.phone = 'Por favor ingrese un número valido';
            } else if (!/^[0-9]+$/.test(dataSent.phone)) {
              error.phone = 'Por favor solo ingrese solo números';
            }
            if (!dataSent.adoption) {
              error.adoption = 'Por favor ingrese una respuesta';
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(dataSent.adoption)) {
              error.adoption = 'La respuesta solo puede contener letras y espacios';
            }
            if (!dataSent.age) {
              error.age = 'Por favor ingrese su edad';
            } else if (dataSent.age < 18) {
              error.age = 'Rango de edad no valida';
            }
            if (!dataSent.familyMembers) {
              error.familyMembers = 'Por favor ingrese una cantidad';
            } else if (dataSent.familyMembers < 0) {
              error.familyMembers = 'Cantidad no valida';
            }
            if (!dataSent.otherPets) {
              error.otherPets = 'Seleccione una respuesta';
            }
            if (!dataSent.garden) {
              error.garden = 'Seleccione una respuesta';
            }
            if (!dataSent.children) {
              error.children = 'Seleccione una respuesta';
            }
            return error;
          }}
          onSubmit={(dataSent, { resetForm }) => {
            if (dataSent.otherPets === 'Si') {
              dataSent.otherPets = true;
            } else if (dataSent.otherPets === 'No') {
              dataSent.otherPets = false;
            }
            if (dataSent.garden === 'Si') {
              dataSent.garden = true;
            } else if (dataSent.garden === 'No') {
              dataSent.garden = false;
            }
            if (dataSent.children === 'Si') {
              dataSent.children = true;
            } else if (dataSent.children === 'No') {
              dataSent.children = false;
            }
            dispatch(PostForm({
              ...dataSent,
              idPet: selectedPet._id
            }));
            resetForm();
          }}
        >
          {({ errors }) => (
            <div className=' max-w-[1170px] h-full flex justify-between m-auto gap-8'>
              <div className='w-full md:h-[80%] 2xl:h-[95%] space-y-3 flex flex-col justify-evenly my-6'>
                <Form className='h-[90%] flex flex-col space-y-3 py-5'>
                  {
                    form.map(f => (
                      <div key={f.title} className='flex flex-col space-y-2'>
                        <label htmlFor={f.name} className='font-bold'>{f.title}: </label>
                        <Field
                          type={f.type}
                          id={f.name}
                          name={f.name}
                          placeholder={f.place}
                          className='bg-[#EBE5F7] h-10 rounded-md p-3'
                          maxLength={f.name === 'phone' ? 10 : 100}
                        />
                        <ErrorMessage
                          name={f.name} component={() => (
                            <p className='text-red-500'>{errors[f.name]}</p>
                          )}
                        />
                      </div>
                    ))
                }
                  <div className='flex justify-between'>

                    <div>
                      <label className='font-bold mr-3' htmlFor='age'>Edad:</label>
                      <Field
                        type='number'
                        id='age'
                        name='age'
                        className='bg-[#EBE5F7] h-10 w-14 p-2 rounded-md'
                      />
                      <ErrorMessage name='age' component={() => (<p className='text-red-500'>{errors.age}</p>)} />
                    </div>

                    <div className='space-x-3'>
                      <label htmlFor='familyMembers' className='font-bold'>¿Cuántas personas habitan en el hogar?</label>
                      <Field
                        type='number'
                        id='familyMembers'
                        name='familyMembers'
                        className='bg-[#EBE5F7] h-10 w-12 p-1 rounded-md'
                      />
                      <ErrorMessage
                        name='familyMembers' component={() => (
                          <p className='text-red-500 text-end'>{errors.familyMembers}</p>
                        )}
                      />
                    </div>

                  </div>
                  {
                  check.map(c => (
                    <div key={c.title} className='space-y-2 w-fit'>
                      <p className='font-bold w-fit'>{c.title}</p>
                      <Field name={c.name} id={c.name} as='select'>
                        <option value=''>- - -</option>
                        <option value='Si'>Si</option>
                        <option value='No'>No</option>
                      </Field>
                      <ErrorMessage
                        name={c.name} component={() => (
                          <p className='text-red-500'>{errors[c.name]}</p>
                        )}
                      />
                    </div>
                  ))
                }
                  <div className='w-full h-full flex justify-center pt-8'>
                    <button type='submit' className='bg-[#7C58D3] text-[white] w-[14rem] h-12 rounded-lg'>Enviar Formulario</button>
                  </div>
                </Form>
              </div>
              <div className='w-[30%] h-full sticky top-8 flex flex-col mt-[4.6rem] space-y-2 mb-10 bg-[#EBE5F7] rounded-md'>
                <div className='rounded-t-md overflow-hidden'>
                  <img className='h-80 w-full object-cover' src={selectedPet.image} alt='imagen de la mascota seleccionada' />
                </div>
                <h1 className='font-bold text-center text-3xl pb-2'>{selectedPet.name}</h1>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};
