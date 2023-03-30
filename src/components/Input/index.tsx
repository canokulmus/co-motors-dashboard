import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import { InputBase } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import styled from '@emotion/styled';
import colors from 'assets/theme/base/colors';
import borders from 'assets/theme/base/borders';

const StyledInput = styled(Input)`
    color: ${colors.text.primary};
    font-size: 14px;
    border-radius: 4px;
    borderBottom: 1px solid red !important;
    padding: 10px 15px;
    width: 100%;
    height: 40px;
    &:focus {
        border: 1px solid yellow;
    }
`;
const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: "25px",
    },
    '& .MuiInputBase-input': {
      borderRadius: borders.borderRadius.lg,
      position: 'relative',
      backgroundColor: "transparent",
      border: `1px solid ${colors.dark.main}`,
      fontSize: 16,
      width: '100%',
      minWidth: '300px',
      maxWidth: '450px',
      padding: '10px 12px',

      '&:focus': {
        borderColor: colors.text.primary,
      },
    },
    //placeholder
  }));
  


const ValidationText = styled(FormHelperText)`
    color: ${colors.error.secondary};
    font-size: 12px;
    margin-top: 5px;
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
        sx={{
        '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off"
    >
      <FormControl variant="standard">
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