import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { InputBase } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import styled from '@emotion/styled';
import colors from 'assets/theme/base/colors';
import borders from 'assets/theme/base/borders';


const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: "25px",
    },
    '& .MuiInputBase-input': {
      borderRadius: borders.borderRadius.lg,
      position: 'relative',
      backgroundColor: "transparent",
      border: `2px solid ${colors.dark.main}`,
      fontSize: 16,
      width: '100%',
      padding: '10px 12px',

      '&:focus': {
        borderColor: colors.primary.main,
      },
    },
    //placeholder
    '& .MuiInputBase-input::placeholder': {
      fontSize: 12,
      color: "colors.text.secondary",
      opacity: 0.3,
    },
  }));
  

const ValidationText = styled(FormHelperText)`
    color: ${colors.error.secondary};
    font-size: 12px;
    margin-top: 5px;
    font-weight: 600;
`;

interface CustomInputProps {
    label: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean
    type?: string;
}

export default function CustomInput(
    {
        label,
        placeholder,
        value,
        onChange,
        error,
        type,
    }: CustomInputProps
) {
  return (
    <Box
        my={1}
        component="form"
        noValidate
        autoComplete="off"
    >
      <FormControl 
      variant="standard"
      fullWidth
      >
        <InputLabel shrink htmlFor="bootstrap-input">
          {label}
        </InputLabel>
        <BootstrapInput 
            defaultValue="react-bootstrap"
            id="bootstrap-input"
            placeholder= {placeholder}
            value={value}
            onChange={onChange}
            type={type}
        />
        {error && <ValidationText>{label} is required!</ValidationText>}
      </FormControl>
    </Box>
  );
}