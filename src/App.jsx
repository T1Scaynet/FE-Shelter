import { useSelector } from 'react-redux';
import { AppRoutes } from './router/AppRoutes';

function App () {
  const tasksState = useSelector((state) => state.tasks);
  console.log({ tasksState });

  return (
    <AppRoutes />
  );
}

export default App;
