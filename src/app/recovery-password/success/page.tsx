'use client';

import Image from 'next/image';
import { ChakraProvider, Flex, Text } from '@chakra-ui/react';

import { theme } from '../../../styles/theme';

import successIcon from '../../../assets/success-icon.svg';

const RecoveryPasswordSuccessPage = () => {
  return (
    <ChakraProvider theme={theme}>
      <Flex maxW="350px" flexDir="column" align="center" justify="center" mx="auto" p="24px">
        <Image width={80} height={80} src={successIcon} quality={100} alt="" />
        <Text fontSize="24px" fontWeight="bold">SUCESSO!</Text>
        <Text mt="16px" mb="24px">Sua senha foi alterada com sucesso</Text>
        <Text textAlign="center">Você já pode fechar esta tela e voltar para o App</Text>
      </Flex>
    </ChakraProvider>
  );
}

export default RecoveryPasswordSuccessPage;