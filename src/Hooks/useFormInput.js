import { useState } from "react";

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    e.preventDefault();
    setValue(e.target.value);
  }

  return { value, onChange: handleChange };
}

export default useFormInput;
