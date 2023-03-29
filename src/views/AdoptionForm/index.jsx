import { form, check } from '../../constants/inputsForm';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { PostForm } from '../../state/features/form/formSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export const AdoptionForm = () => {
  const dispatch = useDispatch();
  const selectedPet = useSelector((state) => state.petDetails);
  const navigate = useNavigate();
  // console.log(selectedPet.galery[0]);
  return (
    <div className='w-full h-full flex flex-col'>
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
              error.adoption = 'Seleccione una respuesta';
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
          onSubmit={async (dataSent, { resetForm }) => {
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
            try {
              await dispatch(PostForm({
                ...dataSent
                // idPet: selectedPet._id
              }));
              toast.success('Formulario enviado correctamente', {
                style: {
                  height: '5rem',
                  fontSize: '1rem',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }
              });
              resetForm();
              navigate('/');
            } catch (_error) {
              toast.error('No se pudo enviar el formulario. Inténtelo más tarde', {
                style: {
                  height: '5rem',
                  fontSize: '1rem',
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  paddingLeft: '2.5rem'
                }
              });
            }
          }}
        >
          {({ errors }) => (
            <div className=' max-w-[1170px] h-full flex justify-between m-auto gap-8'>
              <div className='w-full md:h-[80%] 2xl:h-[95%] space-y-3 flex flex-col justify-evenly my-6'>
                <h1 className=' h-[10%] text-center font-bold text-3xl mb-[-1rem] mt-2'>Completá tus datos y te contactaremos</h1>
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
                  <div className='flex w-full gap-3'>

                    <div className='w-1/2 space-y-2'>
                      <label className='font-bold mr-3' htmlFor='age'>Edad:</label>
                      <Field
                        type='number'
                        id='age'
                        name='age'
                        className='bg-[#EBE5F7] h-10 w-full p-3 rounded-md'
                      />
                      <ErrorMessage name='age' component={() => (<p className='text-red-500'>{errors.age}</p>)} />
                    </div>

                    <div className='w-1/2 space-y-2'>
                      <label htmlFor='familyMembers' className='font-bold'>¿Cuántas personas habitan en el hogar?</label>
                      <Field
                        type='number'
                        id='familyMembers'
                        name='familyMembers'
                        className='bg-[#EBE5F7] h-10 w-full p-3 rounded-md'
                      />
                      <ErrorMessage
                        name='familyMembers' component={() => (
                          <p className='text-red-500'>{errors.familyMembers}</p>
                        )}
                      />
                    </div>

                  </div>
                  <div className='w-full grid grid-cols-2 gap-x-3 gap-y-5 pt-1'>
                    {
                    check.map(c => (
                      <div key={c.title} className='w-full'>
                        <p className='font-bold w-fit'>{c.title}</p>
                        <div className='w-full flex flex-col mt-2 relative'>
                          <Field name={c.name} id={c.name} as='select' className='bg-[#EBE5F7] text-gray-900 text-md rounded-lg focus:ring-[#EBE5F7] focus:border-[#EBE5F7] appearance-none block w-full py-2 px-3'>
                            <option value=''>- - -</option>
                            <option value={c.optionOne}>{c.optionOne}</option>
                            <option value={c.optionTwo}>{c.optionTwo}</option>
                          </Field>
                          <div class='absolute inset-y-0 right-0 flex top-3 px-2 pointer-events-none'>
                            <svg class='h-4 w-4 fill-current text-gray-500' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path d='M5 7l5 5 5-5z' /></svg>
                          </div>
                          <ErrorMessage
                            name={c.name} component={() => (
                              <p className='text-red-500 w-full mt-2'>{errors[c.name]}</p>
                            )}
                          />
                        </div>
                      </div>
                    ))
                  }
                  </div>
                  <div className='w-full h-full flex justify-center pt-8'>
                    <button
                      type='submit' className='bg-[#7C58D3] text-[white] w-[14rem] h-12 rounded-lg'
                    >Enviar Formulario
                    </button>
                  </div>
                </Form>
              </div>
              <div className='w-[30%] h-full sticky top-8 flex flex-col mt-[7.2rem] space-y-2 mb-10 bg-[#EBE5F7] rounded-md'>
                <div className='rounded-t-md overflow-hidden'>
                  <img className='h-80 w-full object-cover' src={selectedPet.image ? selectedPet.image : selectedPet.galery[0]} alt='imagen de la mascota seleccionada' />
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
