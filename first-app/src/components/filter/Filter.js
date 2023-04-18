import { useState } from "react";
import React from "react";
import { useProductActions } from "../ProductProviders/ProductProvider";
import styles from "./Filter.module.css";
import Select from "react-select";
import SelectComponent from "../../common/Select/Select";
import SearchBar from "../../common/search/Search";
const sortOptions = [
  { value: "", label: "All" },
  { value: "L", label: "L" },
  { value: "X", label: "X" },
  { value: "XL", label: "Xl" },
];
const filterOptions = [
  { value: "", label: "All" },
  { value: "cheapest", label: "cheapest" },
  { value: "highest", label: "highest" },
];
const Filter = () => {
  const dispatch = useProductActions();
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const filterHandler = (selectedOption) => {
    dispatch({ type: "filter", selectedOption });
    dispatch({ type: "sort", selectedOption: sort });
    setFilter(selectedOption);
  };
  const sortHandler = (selectedOption) => {
    dispatch({ type: "sort", selectedOption });
    setSort(selectedOption);
  };
  return (
    <section>
    <SearchBar filter={filter} />
    <div className={styles.dropDown}>
      <SelectComponent
        value={filter}
        onChange={filterHandler}
        options={sortOptions}
        title="filter by size"
      />
      <SelectComponent
        value={sort}
        onChange={sortHandler}
        options={filterOptions}
        title="sort by price"
      />
    </div>
    </section>
  );
};

export default Filter;
