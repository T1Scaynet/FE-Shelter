import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPets } from '../../../../state/features/pets/petSlice';
import Breadcrumb from '../../components/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import { RowTitles } from '../../components/RowTitles';
import { Row } from '../../components/Row';
import { titlesPet } from '../../constants/titlePet';

export const ListadeMascotas = () => {
  const dispatch = useDispatch();
  const pets = useSelector((state) => state.pets);
  // useEffect(() => {
  //   dispatch(getAllPets());
  // });
  return (
    <DefaultLayout>
      <Breadcrumb pageName='Lista de Mascotas' />
      <RowTitles titles={titlesPet} />
      <Row info={pets.list} />
    </DefaultLayout>
  );
};
