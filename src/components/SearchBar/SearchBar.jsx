import styles from "./SearchBar.module.scss";

const SearchBar = ({ query, onChange }) => {
  return (
    <div className={styles.searchbar}>
      <input
        type="text"
        value={query}
        name="query"
        placeholder="Search show"
        onChange={onChange}
      />
      <span className={styles.hint}>e.g. search for batman</span>
    </div>
  );
};
export default SearchBar;
