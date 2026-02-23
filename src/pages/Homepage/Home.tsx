import css from './Home.module.css';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

export const Home = () => {
  return (
    <main className={css.page}>
      <Header />
      <Footer />
    </main>
  );
};
