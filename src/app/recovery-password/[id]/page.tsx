'use client';

import type { NextPage } from 'next';
import { ChakraProvider, Text, Flex, FormControl, Button } from '@chakra-ui/react';

import { Input } from './components/input.component';
import { Label } from './components/label.component';

import { theme } from '../../../styles/theme';

interface RecoveryPasswordProps {
  params: {
    id: string;
  };
}

const RecoveryPasswordPage: NextPage<RecoveryPasswordProps> = ({ params }) => {
  return (
    <ChakraProvider theme={theme}>
      <Flex maxW="350px" flexDir="column" align="flex-start" justify="center" mx="auto" p="24px">
        <Text fontWeight="medium" fontSize="1.1rem">
          Alteração de Senha
        </Text>

        <FormControl mt="16px">
          <Label htmlFor="password">Senha</Label>
          <Input 
            type="password"
            id="password" 
            placeholder="Digite sua senha" 
          />

          <Label htmlFor="confirm-password" mt="16px">Confirmar senha</Label>
          <Input 
            type="password"
            id="confirm-password" 
            placeholder="Confirme sua senha" 
          />

          <Button 
            w="full" 
            bgColor="#5B21B6" 
            mt="24px" 
            fontWeight="normal"
            _hover={{
              opacity: 0.8,
            }}
            _active={{
              bgColor: '#5B21B6',
            }}
          >
            Salvar senha
          </Button>
        </FormControl>
      </Flex>
    </ChakraProvider>
  );
}

export default RecoveryPasswordPage;