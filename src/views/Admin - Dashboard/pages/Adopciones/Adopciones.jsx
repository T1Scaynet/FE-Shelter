import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdoptionRequest } from '../../../../state/features/formDashAdopciones';
import Breadcrumb from '../../components/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import { RowTitles } from '../../components/RowTitles/index';
import { titleForm } from '../../constants/titleForm';
import { RowAdoption } from '../../components/RowAdoption';

export const Adopciones = () => {
  const dispatch = useDispatch();
  const dataRequest = useSelector(state => state.formRequest.list);
  // console.log(dataRequest);

  useEffect(() => {
    dispatch(getAdoptionRequest());
  }, []);

  return (
    <DefaultLayout>
      <Breadcrumb pageName='Adopciones' />
      <div>Lista de solicitudes adopciones</div>
      <div className='md:w-[61rem]'>
        <RowTitles titles={titleForm} />
        <RowAdoption info={dataRequest} />
      </div>
    </DefaultLayout>
  );
};
