import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import iconPassword from '../../../assets/password.svg';
import { updateUserPassword } from '../../../state/features/login/loginSlice';

export const passwordUpdate = () => {
  const user = useSelector(state => state.login.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');

  const handleChange = ({ target }) => {
    setPassword({
      email: user.email,
      [target.name]: target.value
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUserPassword(password));
    navigate('/perfil');
  };

  return (
    <div>
      <div className='mx-auto max-w-270'>
        <div className='grid grid-cols-5 gap-8'>
          <div className='col-span-5 xl:col-span-3'>
            <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
              <div className='border-b border-stroke py-4 px-7 dark:border-strokedark'>
                <h3 className='font-medium text-black dark:text-white'>
                  Información Personal
                </h3>
              </div>
              <div className='p-7'>
                <form onSubmit={handleUpdate}>
                  <div className='mb-5.5'>
                    <label
                      className='mb-3 block text-sm font-medium text-black dark:text-white'
                      htmlFor='emailAddress'
                    >
                      Correo electronico
                    </label>
                    <div className='relative'>
                      <span className='absolute left-4.5 top-4'>
                        <img
                          className='fill-current'
                          width='20'
                          height='20'
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          // src={email}
                        />
                      </span>
                      <input
                        className='w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary'
                        type='email'
                        name='email'
                        id='email'
                        placeholder={user.email}
                        defaultValue={user.email}
                        onChange={handleChange}
                        disabled
                      />
                    </div>
                  </div>

                  <div className='mb-5.5'>
                    <label
                      className='mb-3 block text-sm font-medium text-black dark:text-white'
                      htmlFor='emailAddress'
                    >
                      Nueva Contraseña
                    </label>
                    <div className='relative'>
                      <span className='absolute left-4 top-3'>
                        <img
                          className='fill-current'
                          width='30'
                          height='30'
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          src={iconPassword}
                        />
                      </span>
                      <input
                        className='w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary'
                        type='text'
                        name='newPassword'
                        id='newPassword'
                        placeholder='Escriba su nueva contraseña'
                        defaultValue=''
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className='flex justify-end gap-4.5'>
                    <Link to='/perfil'>
                      <button
                        className='flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white'
                      >
                        Cancel
                      </button>
                    </Link>
                    <button
                      className='flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:shadow-1'
                      type='submit'
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
