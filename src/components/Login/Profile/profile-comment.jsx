import { Field, Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { postComment } from '../../../state/features/comments/commentsSlice';

export const profileComment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [comment, setComment] = useState({
    comments: '',
    stars: ''
  });

  const handleChange = ({ target }) => {
    setComment({
      ...comment,
      [target.name]: target.value
    });
  };

  const handleSubmit = () => {
    dispatch(postComment(comment));
    navigate('/perfil');
  };

  return (
    <div>
      <div className='mx-auto max-w-270'>
        <Formik
          className='grid grid-cols-5 gap-8'
        >
          <div className='col-span-5 xl:col-span-3'>
            <div className='rounded-sm border border-stroke bg-red shadow-default dark:border-strokedark dark:bg-boxdark'>
              <div className='border-b border-stroke py-4 px-7 dark:border-strokedark'>
                <h3 className='font-medium text-black dark:text-white'>
                  Hacer una reseña a la fundación
                </h3>
              </div>
              <div className='p-7'>
                <form onSubmit={handleSubmit}>
                  <div className='mb-5.5'>
                    <label
                      className='mb-3 block text-sm font-medium text-black dark:text-white'
                      htmlFor='emailAddress'
                    >
                      Escribibe tu comenttario
                    </label>
                    <div className='relative'>
                      {/* <span className='absolute left-4.5 top-4'>
                        <img
                          className='fill-current'
                          width='20'
                          height='20'
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          // src={email}
                        />
                      </span> */}
                      <Field
                        className='w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary'
                        as='textarea'
                        type='text'
                        name='comments'
                        id='comments'
                        value={comment.comments}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className='mb-5.5'>
                    <label
                      className='mb-3 block text-sm font-medium text-black dark:text-white'
                      htmlFor='emailAddress'
                    >
                      Valoración
                    </label>
                    <div className='relative'>
                      {/* <span className='absolute left-4 top-3'>
                        <img
                          className='fill-current'
                          width='30'
                          height='30'
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          // src={iconPassword}
                        />
                      </span> */}
                      <input
                        className='w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary'
                        type='number'
                        name='stars'
                        id='stars'
                        value={comment.stars}
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
        </Formik>
      </div>
    </div>
  );
};
