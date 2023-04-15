import { useState } from "react";
import React from "react";
import { useProductActions } from "../ProductProviders/ProductProvider";
import styles from "./Filter.module.css";
import Select from 'react-select';
const options = [
  { value: "", label: "All" },
  { value: "L", label: "L" },
  { value: "X", label: "X" },
  { value: "XL", label: "Xl" },
];
const Filter = () => {
  const dispatch = useProductActions();
  const [value, setValue] = useState("");

  const changeHandler = (selectedOption) => {
    dispatch({ type: "filter", selectedOption });
    setValue(selectedOption);
  };
  return (
      <div className={styles.dropDown}>
        <p>order based on size</p>
        <Select options={options} onChange={changeHandler} value={value} className={styles.filter}/>
      </div>
  );
};

export default Filter;
