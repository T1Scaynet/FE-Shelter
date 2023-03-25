import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCommentsList } from '../../../state/features/comments/commentsSlice';
import { PetsNotFound } from '../../../components/PetsNotFound';
import css from "../DisplayFour/index.module.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from '../../../components/Card/CardComments';

export const DisplayFour = () => { 
  const dispatch = useDispatch();
  const commentsList = useSelector((state) => state.comments.list);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    dispatch(getCommentsList());
  }, [dispatch]);


  return (
    <section>
      <div className='flex flex-col items-center justify-center mb-[3.125rem]' >
      <p className='text-[#7C58D3] font-bold text-[1.2rem] font-[Nunito]'>Nuestras opiniones</p>
      <h1 className=' text-[3rem] font-[Nunito]'>Lo que dice la gente</h1>
      <span>Estos son los comentarios que recibimos de la gente que adoptó nuestros amigos peludos</span>
      </div>
      <div className={css.commentscontainer}>
        {commentsList.length > 0 ? (
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={3}
            slidesToScroll={3}
            className={css.slider}
          >
            {commentsList.map((t) => (
              <Link key={t.id} to={`/detalles/${t._id}`}>
                <Cards
                  idPet={t.idPet}
                  idUser={t.idUser}
                  stars={t.stars}
                  comments={t.comments}
                  image={t.image}
                />
              </Link>
            ))}
          </Slider>
        ) : (
          <PetsNotFound />
        )}
      </div>
    </section>
  );
};

