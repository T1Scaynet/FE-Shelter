import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdoptionRequest } from '../../../../state/features/formDashAdopciones';
import Breadcrumb from '../../components/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import { RowTitles } from '../../components/RowTitles/index';
import { titleForm } from '../../constants/titleForm';
import { RowAdoption } from '../../components/RowAdoption';
import { Search } from '../../../../components/Search';

export const Adopciones = () => {
  const dispatch = useDispatch();
  const dataRequest = useSelector(state => state.formRequest.list);

  useEffect(() => {
    dispatch(getAdoptionRequest());
  }, [dispatch]);

  return (
    <DefaultLayout>
      <Breadcrumb pageName='Solicitudes de adopciones' />
      <Search />
      <div className='md:w-full'>
        <RowTitles titles={titleForm} />
        <RowAdoption info={dataRequest} />
      </div>
    </DefaultLayout>
  );
};
