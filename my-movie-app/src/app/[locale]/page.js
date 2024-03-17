import styles from './page.module.css';
import Popular from '@/components/popular/Popular';
import Genres from '@/components/genres/Genres';

/* export const revalidate = 86400; */ // On demande à ce que la page soit régénéré chaque jour soit toutes les 86400 secondes (il n'est pas possible de mettre un calcul comme valeur)

export default function Home({ params: { locale } }) {

  return (
    <div className={styles.main}>
      <Popular locale={locale} />
      <Genres locale={locale} />
    </div>
  );
}