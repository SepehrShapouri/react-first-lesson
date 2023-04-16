import Select from "react-select"
import styles from "./Select.module.css"
const SelectComponent = ({title,...rest}) => {
  return (
    <span className={styles.selectSpan}>
      <p>{title}</p>
      <Select
      {...rest}
        className={styles.filter}
      />
    </span>
  );
};

export default SelectComponent;
