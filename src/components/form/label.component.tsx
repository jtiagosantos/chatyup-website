import { FormLabel } from '@chakra-ui/react';

import type { FC } from 'react';
import type { FormLabelProps } from '@chakra-ui/react';

export const Label: FC<FormLabelProps> = ({ children, ...props }) => {
  return (  
    <FormLabel fontWeight="normal" mb="2px" color="#D4D4D8" {...props}>
      {children}
    </FormLabel>
  );
}