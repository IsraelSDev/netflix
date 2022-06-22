import styles from '/styles/search.module.sass';
import searchImage from '/public/assets/search.svg';
import Image from 'next/image';

const Search = () => {
  return (
    <div className={styles.search_container}>
      <Image src={searchImage} alt="search" width={32} height={32} />
      <input type="text" className={styles.search} placeholder="Search for movies or TV series" />
    </div>
  );
}

export default Search;
