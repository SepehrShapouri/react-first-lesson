import { useState } from "react";
import styles from "./Search.module.css";
import { useProductActions } from "../../components/ProductProviders/ProductProvider";
const SearchBar = ({ filter }) => {
  const dispatch = useProductActions();
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    dispatch({ type: "search", event: e });
    // dispatch({ type: "filter", selectedOption: filter });
    setValue(e.target.value);
  };
  return (
    <div className={styles.formControl}>
      <span>search for:</span>
      <input
        type="text"
        placeholder="search for"
        onChange={changeHandler}
        value={value}
      />
    </div>
  );
};

export default SearchBar;
