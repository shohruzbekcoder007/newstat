import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Демография ва меҳнат статистикаси бошқармаси',
  'Ижтимоий соҳа ва барқарор ривожланиш статистикаси бошқармаси',
  'Инвеститсиялар ва қурилиш статистикаси бошқармаси',
  'Ишбилармонлик муҳити кузатувлари, тадбиркорликни ривожлантириш статистикаси бошқармаси',
  'Қишлоқ хўжалиги ва экология статистикаси бошқармаси',
  'Нархлар статистикаси бошқармаси',
  'Саноат статистикаси бошқармаси',
  'Ташқи иқтисодий фаолият ва савдо статистикаси бошқармаси',
  'Хизматлар соҳаси статистикаси бошқармаси',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function ChipStatus() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ width: "100%" }}>
        <InputLabel id="demo-simple-select-label">Soha tanlash</InputLabel>
        <Select
          id="demo-simple-select-label"
          value={personName}
          onChange={handleChange}
          label="Soha tanlash"
          renderValue={(selected) => (
                <MenuItem>
                  {selected}
                </MenuItem >
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
