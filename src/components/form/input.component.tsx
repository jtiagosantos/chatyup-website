import { useReducer } from 'react';
import { Input as ChakraUIInput, chakra, Box } from '@chakra-ui/react';
import { Eye, EyeSlash } from 'phosphor-react';

import type { FC, InputHTMLAttributes } from 'react';
import type { InputProps as ChakraUIInputProps } from '@chakra-ui/react';
import type { UseFormRegister } from 'react-hook-form';

type InputProps = InputHTMLAttributes<HTMLInputElement> & ChakraUIInputProps & {
  register: UseFormRegister<any>;
}

export const Input: FC<InputProps> = ({ id, register, ...props }) => {
  const [passwordIsVisible, togglePasswordVisibility] = useReducer(
    (visible) => !visible, 
    false
  );

  const EyeIcon = chakra(Eye);
  const EyeSlashIcon = chakra(EyeSlash);

  return (
    <Box pos="relative">
      <ChakraUIInput 
        type={passwordIsVisible ? 'text' : 'password'}
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
      {passwordIsVisible ? (
        <EyeSlashIcon 
          size={22} 
          color="#9d9d9e" 
          pos="absolute" 
          right={3} 
          top="21%" 
          zIndex={2} 
          onClick={togglePasswordVisibility} 
        />
      ) : (
        <EyeIcon 
          size={22} 
          color="#9d9d9e" 
          pos="absolute" 
          right={3} 
          top="21%" 
          zIndex={2} 
          onClick={togglePasswordVisibility} 
        />
      )}
    </Box>
  );
}