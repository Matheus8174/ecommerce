/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputProps
} from '@chakra-ui/react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { infer, ZodType } from 'zod';

interface InputData extends infer<ZodType> {}

interface FormInputProps extends InputProps {
  inputName: string;
  label: string;
  errors: FieldError | undefined;
  helperText?: string;
  register: UseFormRegister<InputData>;
}

function FormInput({
  inputName,
  label,
  errors,
  helperText = '',
  register,
  ...rest
}: FormInputProps) {
  return (
    <FormControl isRequired isInvalid={!!errors?.message}>
      <FormLabel htmlFor={inputName}>{label}</FormLabel>
      <Input
        id={inputName}
        {...rest}
        {...register(inputName as `${number}.${string}`)}
        aria-invalid={!!errors?.message}
      />
      {!errors?.message ? (
        helperText && <FormHelperText>{helperText}</FormHelperText>
      ) : (
        <FormErrorMessage>{errors?.message}</FormErrorMessage>
      )}
    </FormControl>
  );
}

export default FormInput;
