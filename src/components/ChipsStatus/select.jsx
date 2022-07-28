import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function Tags() {
  return (
    <Stack spacing={3} sx={{ width: 500 }}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={names}
        getOptionLabel={(option) => option}
        defaultValue={[names[1]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Hisobot holati"
            placeholder="Favorites"
          />
        )}
      />
    </Stack>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const names = [
    'Qoralama',
    'Jo`natilgan',
    'ko`rib chiqish jarayonida',
    'Qabul qilingan',
    'Rad etilgan'
  ];
