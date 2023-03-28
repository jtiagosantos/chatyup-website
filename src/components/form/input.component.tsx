import { Input as ChakraUIInput } from '@chakra-ui/react';

import type { FC, InputHTMLAttributes } from 'react';
import type { InputProps as ChakraUIInputProps } from '@chakra-ui/react';
import type { UseFormRegister } from 'react-hook-form';

type InputProps = InputHTMLAttributes<HTMLInputElement> & ChakraUIInputProps & {
  register: UseFormRegister<any>;
}

export const Input: FC<InputProps> = ({ id, register, ...props }) => {
  return (
    <ChakraUIInput 
      bgColor="#27272A"
      border="none"
      _placeholder={{
        color: '#71717A'
      }}
      _focus={{
        outlineColor: '#5B21B6',
        boxShadow: 'none',
        border: 'none',
      }}
      id={id}
      {...register(id ?? '')} 
      {...props} 
    />
  );
}