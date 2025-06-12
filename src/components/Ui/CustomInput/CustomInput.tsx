import TextField, {type TextFieldProps } from '@mui/material/TextField';
import React from 'react';
import styles from './CustomInput.module.scss';

interface CustomInputProps extends Omit<TextFieldProps, 'error' | 'helperText'> {
  label?: string;
  error?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ label, error, ...rest }) => {
  return (
    <TextField
      label={label}
      error={Boolean(error)}
      helperText={error}
      {...rest}
      className={`${styles['custom-input']} ${error ? styles.error : ''}`}
    />
  );
};

export default CustomInput;
