import { useState } from "react";
import Select from "react-dropdown-select";

const SelectInput = () => {
  const [values, setValues] = useState<any>([])
  const options = [
    { 
      value: 1,
      label: "All Vitamin"
    },
    { 
      value: 2,
      label: "Vitamin A"
    },
    {
      value:  3,
      label: "Vitamin B"
    },
    {
      value:  4,
      label: "Vitamin C"
    },
    {
      value:  5,
      label: "Vitamin D"
    }
  ];
    
    return (
        <Select
          className=" placeholder:text-[#101010]"
          color="#e6542750"
          placeholder="All Vitamin"
          options={options}
          values={values}
          onChange={(value) => setValues(value)}
        />
    );
};

export default SelectInput;