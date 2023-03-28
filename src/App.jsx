import { AppRoutes } from './router/AppRoutes';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import styles from './styles';

function App() {
  return (
    <div className="w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}  mb-[74px]`}>
        <NavBar />
      </div>
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
