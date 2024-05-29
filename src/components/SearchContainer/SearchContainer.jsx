import Card from "../Card";
import SearchBar from "../SearchBar";
import ShowList from "../ShowList";
import Loading from "../Loading";

import styles from "./SearchContainer.module.scss";
import useDebouncedSearch from "hooks/useDebauncedSearch";
import { fetchData } from "api/fetchData";

const SearchContainer = () => {
  const { query, shows, loading, onChange } = useDebouncedSearch(fetchData);

  return (
    <>
      <div className={styles.row}>
        <Card>
          <SearchBar onChange={onChange} query={query} />
        </Card>
      </div>

      <div className={styles.row}>
        {loading && <Loading />}
        {!loading && query && <ShowList shows={shows} />}
      </div>
    </>
  );
};

export default SearchContainer;
