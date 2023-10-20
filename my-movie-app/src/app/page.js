import MediaCard from '@/components/media-card/MediaCard';
import styles from './page.module.css';
import Popular from '@/components/popular/Popular';

export default function Home() {
  return (
    <div className={styles.main}>
      <Popular />
    </div>
  )
}
