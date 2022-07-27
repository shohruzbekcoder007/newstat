import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function YearChange() {
  const [age, setAge] = React.useState(2022);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Hisobot yili</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Hisobot yili"
          onChange={handleChange}
        >
          <MenuItem value={2022}>2022</MenuItem>
          <MenuItem value={2023}>2023</MenuItem>
          <MenuItem value={2024}>2024</MenuItem>
        </Select>
      </FormControl>
  );
}
