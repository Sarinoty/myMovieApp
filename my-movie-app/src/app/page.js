import MediaCard from '@/components/media-card/MediaCard';
import styles from './page.module.css';
import Popular from '@/components/popular/Popular';
import Genres from '@/components/genres/Genres';

export default function Home() {
  return (
    <div className={styles.main}>
      <Popular />
      <Genres />
    </div>
  )
}
