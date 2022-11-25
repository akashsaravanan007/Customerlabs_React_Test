import { FormControl, MenuItem, Select } from '@mui/material'
import React, { useState } from "react";

const SelectData = ({handleChangeArr, schemaArr, index}) => {
  
  console.log(index);

    const [age, setAge] = useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
      console.log(event.target.value);
      const abcd = schemaArr;
      const xyz = {}
      xyz[event.target.value] = event.target.value
      abcd[index] = xyz
      console.log(schemaArr);
      console.log(index);
      handleChangeArr(abcd);
    };
 

  return (
    <div key={index}>
    <FormControl fullWidth
    sx={{ m: 1 }}>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={age}
  label="Age"
  onChange={handleChange}
  fullWidth
            sx={{ m: 1 }}
    >
      <MenuItem value="first_name">First Name</MenuItem>
      <MenuItem value="last_name"> Last Name</MenuItem>
      <MenuItem value="gender">Gender</MenuItem>
      <MenuItem value="age">Age</MenuItem>
      <MenuItem value="account_name">Account Name</MenuItem>
      <MenuItem value="city">City</MenuItem>
      <MenuItem value="state">State</MenuItem>
    </Select>
  </FormControl>
    </div>
  )
}

export default SelectData