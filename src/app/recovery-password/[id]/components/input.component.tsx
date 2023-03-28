import { Input as ChakraUIInput } from '@chakra-ui/react';

import type { FC } from 'react';
import type { InputProps } from '@chakra-ui/react';

export const Input: FC<InputProps> = (props) => {
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
      {...props}
    />
  );
}
